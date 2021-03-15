import {
  USER_SAVE,
  USER_CLEAR,
  SAVE_NEW_FLAGS,
  ADD_PRODUCT_CART,
  TOTAL_LENGTH_CART,
  SAVE_MY_CAMPAIGN_DATA,
  SAVE_SHARE_CAMPAIGN_DATA,
} from './actionTypes';

function saveNewFlags(payload) {
  return {
    type: SAVE_NEW_FLAGS,
    payload,
  };
}

function saveLengthCart(value) {
  return {
    type: TOTAL_LENGTH_CART,
    lengthCart: value,
  };
}

function saveAddProductCart(value) {
  return {
    type: ADD_PRODUCT_CART,
    products: value,
  };
}

function saveMyCampaigns(payload) {
  return {
    type: SAVE_MY_CAMPAIGN_DATA,
    payload,
  };
}

function saveShareCampaigns(payload) {
  return {
    type: SAVE_SHARE_CAMPAIGN_DATA,
    payload,
  };
}

function saveUser(payload) {
  return {
    type: USER_SAVE,
    payload,
  };
}

function clearUser(expired) {
  const payload = { expired };

  return {
    type: USER_CLEAR,
    payload
  };
}

export {
  saveUser,
  clearUser,
  saveNewFlags,
  saveLengthCart,
  saveMyCampaigns,
  saveAddProductCart,
  saveShareCampaigns,
};
