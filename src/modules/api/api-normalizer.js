class APINormalizer {
  static normalizeBusinessItem(item) {
    return item;
  }

  static normalizeNotificationItem(item) { // TODO: Remove it after integration
    return item;
  }

  static normalizeMyOfferItem(item) {
    if (item.normalized) return item;

    const possibleStatus = ['Expired', 'Redeemed', 'Available'];
    const tempItem = {
      id: 120,
      title: 'The Coffee Place',
      description: '10% Discount in your first purchase',
      time: 'May 5th',
      picture: '',
      status: possibleStatus[Math.floor(Math.random() * possibleStatus.length)]
    };

    tempItem.picture = 'https://via.placeholder.com/150/92c952';
    tempItem.id = item.id;
    tempItem.title = item.name;
    tempItem.normalized = true;

    return tempItem;
  }
}

export default APINormalizer;
