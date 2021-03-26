import {
  SAVE_MY_CAMPAIGN_DATA,
  SAVE_SHARE_CAMPAIGN_DATA,
} from '../types/campaign';

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
