import {
  SAVE_MY_CAMPAIGN_DATA,
  SAVE_SHARE_CAMPAIGN_DATA
} from '../types/campaign';

const initialState = {
  myCampaign: {},
  shareCampaign: {}
};

export default function campaignsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_MY_CAMPAIGN_DATA:
      return {
        ...state,
        myCampaign: action.payload
      };
    case SAVE_SHARE_CAMPAIGN_DATA:
      return {
        ...state,
        shareCampaign: action.payload
      };
    default:
      return state;
  }
}
