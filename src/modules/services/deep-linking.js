import {
  Linking, AppState
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import branch from 'react-native-branch';

import ReferralBusinessInvitationService from './referral-business-invitation';
import ReferralOffer from './referral-offer';
import GiftService from './gift';

import { Notification } from '~/App';

export default class deepLinkingManager {
  static init() {
    deepLinkingManager.handleInitialURL();
    deepLinkingManager.addEventListeners();
  }

  static handleInitialURL() {
    Linking.getInitialURL().then(deepLinkingManager.handleOpenURL);
  }

  static addEventListeners() {
    branch.subscribe(deepLinkingManager.handleBranchURL);

    Linking.addEventListener('url', deepLinkingManager.handleOpenURL);

    AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        deepLinkingManager.handleInitialURL();
      }
    });
  }

  static handleOpenURL(params) { // for non branch.io links
    if (params) {
      const urlStr = params.url || params;

      const indexOfApp = urlStr.lastIndexOf('app');
      if (indexOfApp === -1) return;

      const urlArr = urlStr.substr(urlStr.lastIndexOf('app') + 4).split('/');

      switch (urlArr[0]) {
        case 'invite':
          deepLinkingManager.setInvitationCode(urlArr[1]);
          break;

        default:
          break;
      }
    }
  }

  static async handleBranchURL({ error, params }) { // for branch.io links
    if (error) {
      Notification.current.send({
        title: 'Oops, something went wrong',
        description: 'Something went wrong with your invitation URL. Please, try again later.',
        type: 'error',
      });

      return;
    }

    // if (params['+non_branch_link']) {
    //   // Route non-Branch URL.
    //   return;
    // }

    // if (!params['+clicked_branch_link']) {
    //   // Indicates initialization success and some other conditions.
    //   // No link was opened.
    //   return;
    // }

    // A Branch link was opened.

    if (params['~feature'] === ReferralBusinessInvitationService.slug) {
      if (!params.$web_only) ReferralBusinessInvitationService.register(params.BelshopBusinessId);
    } else if (params['~feature'] === ReferralOffer.slug) {
      if (!params.$web_only) ReferralOffer.register(params.BelshopOfferId);
    } else if (params['~feature'] === 'customer-gift') {
      deepLinkingManager.setGift(params);
    } else if (params.BelshopCampaignId) {
      deepLinkingManager.setCampaign(params);
    } else if (params.BelshopInvitationCode) {
      deepLinkingManager.setInvitationCode(params.BelshopInvitationCode);
    }
  }

  static async getInvite(data) {
    const invitedLink = await AsyncStorage.getItem('@BelshopApp:invite-url');
    const newData = data;

    if (invitedLink) {
      newData.invitationCode = invitedLink;
    } else {
      delete newData.invitationCode;
    }

    return newData;
  }

  static async setGift(params) {
    const data = {
      gift: {
        coinsAmount: params.BelshopGiftCoins,
        message: params.BelshopGiftMessage,
        id: params.BelshopGiftCode
      },
      customer: {
        id: params.BelshopCustomerId,
        name: params.BelshopCustomerName.split(' ')[0],
        picture: {
          uri: params.BelshopCustomerImage
        }
      },
      business: {
        name: params.BelshopBusinessName,
        id: params.BelshopBusinessId,
        address: params.BelshopBusinessAddress,
        businessLocations: JSON.parse(params.twsimBusinessLocations || null),
        logo: {
          publicPath: {
            small: params.BelshopBusinessLogo
          }
        }
      }
    };

    GiftService.register(data);
  }

  static setInvitationCode(invitationCode) {
    AsyncStorage.setItem('@BelshopApp:invite-url', invitationCode);
    deepLinkingManager.removeCampaign();
  }

  static removeInviteURL() {
    return AsyncStorage.removeItem('@BelshopApp:invite-url');
  }

  static setCampaign(params) {
    if (params.BelshopLeadId) {
      const [name, lastname] = params.BelshopLeadFullname.split(' ');
      const phone = params.BelshopLeadPhone;
      const lead = {
        name,
        lastname,
        phone
      };

      deepLinkingManager.setLead(lead);
    }

    deepLinkingManager.setCampaignCode(params.BelshopInvitationCode);
    if (deepLinkingManager.LeadCallback) deepLinkingManager.LeadCallback();
  }

  static async setLead(lead) {
    AsyncStorage.setItem('@BelshopApp:campaign-lead', JSON.stringify(lead));
  }

  static setCampaignCode(campaignCode) {
    AsyncStorage.setItem('@BelshopApp:campaign-code', campaignCode);
    deepLinkingManager.removeInviteURL();
  }

  static async removeCampaign() {
    return AsyncStorage.multiRemove(
      ['@BelshopApp:campaign-code', '@BelshopApp:campaign-lead']
    );
  }
}
