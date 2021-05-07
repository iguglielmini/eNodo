import DeviceStorage from '@modules/services/device-storage';
import ApiShopping from '@modules/api/api-shopping';

import cleanCep from '@/utils/clean-cep';
import formatCep from '@/utils/format-cep';

import store from '@/redux-store';
import { updateDelivery } from '@/redux-store/actions';

function getProduct(product) {
  const { delivery } = store.getState();
  const { products } = delivery;

  return products.find(item => (item.product === product));
}

let lastCep = null;
function handleChange() {
  const { delivery } = store.getState();
  const { cep, formatedCep } = delivery;

  if (cep !== lastCep) {
    lastCep = cep;
    saveData({ cep, formatedCep });
  }
}

export function setCep(data) {
  if (!data || (!data.formatedCep && !data.cep)) {
    return false;
  }

  const cep = data.cep || cleanCep(data.formatedCep);
  const formatedCep = data.formatedCep || formatCep(data.cep);

  return store.dispatch(updateDelivery({ cep, formatedCep }));
}

export const defaultDeliveryOption = {
  alias: null,
  amount: 0,
  estimatedTime: null,
  id: null,
  name: null,
};

function upsertProduct(data) {
  const { delivery } = store.getState();
  const { products } = delivery;

  const product = getProduct(data.product);

  if (!product) {
    products.push(data);
    return products;
  }

  const index = products.findIndex(item => (item.product === data.product));
  products[index] = data;

  return products;
}

export async function updateCartDelivery(formatedCep) {
  try {
    const cep = cleanCep(formatedCep);
    const { data } = await ApiShopping.basketSetPostalCode({
      postalCode: cleanCep(cep)
    });

    const { basket } = data;
    const payload = {
      formatedCep,
      cep,
      basket,
    };

    store.dispatch(updateDelivery(payload));

    return basket;
  } catch (error) {
    return [];
  }
}

export async function updateProductDelivery(formatedCep, params) {
  try {
    const cep = cleanCep(formatedCep);
    const { data } = await ApiShopping.getProductDelivery({
      ...params,
      postalCode: cep,
    });

    const { deliveryOption } = data;
    const payload = {
      formatedCep,
      cep,
      products: upsertProduct({
        ...deliveryOption,
        ...params,
        cep,
      }),
    };

    store.dispatch(updateDelivery(payload));

    return data.deliveryOption;
  } catch (_) {
    return defaultDeliveryOption;
  }
}

export function getProductDeliveryOption(params) {
  const product = getProduct(params.product);
  return product || defaultDeliveryOption;
}

export async function clearProductDelivery() {
  try {
    const formatedCep = null;
    const cep = null;

    const payload = {
      formatedCep,
      cep,
    };

    store.dispatch(updateDelivery(payload));

    return defaultDeliveryOption;
  } catch (error) {
    return defaultDeliveryOption;
  }
}

export async function clearCartDelivery() {
  try {
    const { data } = await ApiShopping.basketSetPostalCode({
      postalCode: null
    });

    const { basket } = data;
    const payload = {
      formatedCep: null,
      cep: null,
      basket,
    };

    store.dispatch(updateDelivery(payload));

    return basket;
  } catch (error) {
    return [];
  }
}
export async function loadData() {
  const data = await DeviceStorage.getItem('@BelshopApp:delivery');
  return data;
}

export async function saveData(data) {
  return DeviceStorage.setItem('@BelshopApp:delivery', data);
}

export async function start() {
  const payload = await loadData();

  if (payload) {
    setCep(payload);
  }

  store.subscribe(handleChange);
}
