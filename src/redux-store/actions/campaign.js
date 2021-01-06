import {
  SAVE_SHARE_CAMPAIGN_DATA,
  SAVE_MY_CAMPAIGN_DATA
} from './actionTypes';


export function saveMyCampaigns(payload) {
  return {
    type: SAVE_MY_CAMPAIGN_DATA,
    payload,
  };
}

export function saveShareCampaigns(payload) {
  return {
    type: SAVE_SHARE_CAMPAIGN_DATA,
    payload,
  };
}
