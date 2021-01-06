import 'intl';
import 'intl/locale-data/jsonp/en';

function roundNumber(value) {
  return (Math.floor(value * 100) / 100);
}

function getNumberAsString(number, alwaysShowCents) {
  const result = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').split('.');

  if (alwaysShowCents || result[1] !== '00') return result.join('.');
  return result[0];
}

function getBonusFromPrice(price, bonus) {
  return (price * (parseFloat(+bonus) / 100));
}

function getPriceAsNumber(price) {
  return roundNumber(+price);
}

function getPriceAsString(price, alwaysShowCents) {
  return getNumberAsString(getPriceAsNumber(+price), alwaysShowCents);
}

function getBonusFromPriceAsNumber(price, bonus) {
  return Number(getBonusFromPriceAsString(+price, +bonus).replace(/[^0-9.]+/g, ''));
}

function getBonusFromPriceAsString(price, bonus, alwaysShowCents) {
  return getNumberAsString(roundNumber(getBonusFromPrice(+price, +bonus)), alwaysShowCents);
}

function getMoneyFromCoins(coins, coinExchangeRatio) {
  let coinsToFormat;
  if (typeof coins === 'string') {
    coinsToFormat = coins.replace(/[^0-9.]+/g, '');
  }

  const money = coinsToFormat * coinExchangeRatio;

  let moneyFormated = new Intl.NumberFormat('en-US', {
    style: 'decimal'
  }).format(money);

  if (moneyFormated.includes('.') && moneyFormated.split('.')[1].length < 2) {
    moneyFormated += '0';
  }

  if (moneyFormated.length >= 18) {
    return moneyFormated.slice(0, 15).padEnd(18, '.');
  }

  return moneyFormated;
}

export {
  getPriceAsNumber,
  getPriceAsString,
  getBonusFromPriceAsNumber,
  getBonusFromPriceAsString,
  getMoneyFromCoins
};
