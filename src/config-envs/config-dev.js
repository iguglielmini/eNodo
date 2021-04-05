export default {
  SHOW_ITEMS: 15,
  baseURL: 'https://api-belshop.qa.nodo.cc',
  apiKey: 'hzPDW5GXag2dBOv4nOUQSffq6LuZEXTMQV0SF5sXvbCATwzLiWOp46oW5NFkb4Vu',
  oneSignalKey: 'b54d02c2-96f0-4f6a-add6-68cbccab33bb',
  checkout: {
    whitelist: [
      'https://www.belshop.core.dcg.com.br/checkout/easy',
      'https://www.belshop.core.dcg.com.br/web-api/v1/Shopping/Basket/CheckoutRedirect',
    ]
  },
  urls: {
    api: 'https://api-belshop.subservers.nodo.cc',
    base: 'https://www.belshop.core.dcg.com.br',
    forgot: 'https://www.belshop.core.dcg.com.br/login?url=/painel-do-cliente/pedidos',
    signup: 'https://www.belshop.core.dcg.com.br/cadastro',
  }
};
