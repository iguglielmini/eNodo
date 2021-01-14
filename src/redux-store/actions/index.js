import {
  USER_SAVE,
  USER_EDIT,
  SAVE_NEW_FLAGS,
  TOTAL_LENGTH_CART,
  SAVE_MY_CAMPAIGN_DATA,
  SAVE_SHARE_CAMPAIGN_DATA,
  USER_DECREASE_NOTIFICATION,
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

function editUser(payload) {
  return {
    type: USER_EDIT,
    payload,
  };
}

function decreaseNotification() {
  return {
    type: USER_DECREASE_NOTIFICATION,
  };
}

export {
    saveUser,
    editUser,
    saveNewFlags,
    saveLengthCart,
    saveMyCampaigns,
    saveShareCampaigns,
    decreaseNotification
}