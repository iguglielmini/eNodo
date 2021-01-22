export default {
  baseURL: 'https://api-belshop.qa.nodo.cc',
  apiKey: 'hzPDW5GXag2dBOv4nOUQSffq6LuZEXTMQV0SF5sXvbCATwzLiWOp46oW5NFkb4Vu',
  checkout: {
    whitelist: [
      'https://www.belshop.core.dcg.com.br/checkout/easy#payment',
      'https://www.belshop.core.dcg.com.br/checkout/easy#delivery',
      'https://www.belshop.core.dcg.com.br/checkout/easy#payment/paymentslip',
      'https://www.belshop.core.dcg.com.br/checkout/easy#self',
      'https://www.belshop.core.dcg.com.br/carrinho#payment',
      'https://www.belshop.core.dcg.com.br/carrinho#delivery',
      'https://www.belshop.core.dcg.com.br/carrinho#payment/paymentslip',
      'https://www.belshop.core.dcg.com.br/carrinho#self',
    ]
  }
};
