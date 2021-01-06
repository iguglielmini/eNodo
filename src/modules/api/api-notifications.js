import RewardService from '@modules/api/api-reward';
import eventBus from '@modules/services/EventBus';
import moment from 'moment';
import Api from '.';
import Store from '../../redux-store';
import APIErrorHandler from './api-error-handler';
import { editUser, decreaseNotification } from '../../redux-store/actions/user';

import Navigation from '../navigator';

export default class NotificationsService extends Api {
  getNews() {
    return this.get('/notification/news')
      .then((response) => {
        if (response.status === 200) {
          NotificationsService.updateBadgeCounter(response.data.notifications.total);
        }

        return false;
      })
      .catch(err => APIErrorHandler.getErrorMessages(err.response));
  }

  static async getNotification(OSNotification) {
    const params = await NotificationsService.beforeMap(OSNotification);
    const action = NotificationsService.getActionByType(OSNotification, params);
    const notification = OSNotification;
    notification.action = action;

    return notification;
  }

  static async beforeMap(OSNotification) {
    // request and verifications to do before the notifications map
    const params = {};
    const { type } = OSNotification;

    // reward
    if (type === 'referral-campaign-signup') {
      const rewardService = new RewardService();
      params.reward = await rewardService.checkCampaign(OSNotification.metadata.campaignSignupId);
    }

    return params;
  }

  static updateBadgeCounter(total) {
    const payload = {
      notificationsCounter: total
    };

    Store.dispatch(editUser(payload));
  }

  static decreaseBadge() {
    Store.dispatch(decreaseNotification());
  }

  static getActionByType(notification, params) {
    const action = {
      route: '',
      data: {},
    };

    switch (notification.type) {
      case 'referral-campaign-signup':
        if (params.reward.success && !params.reward.data.redeemed) {
          action.route = 'RewardCoinsModal';
          action.data.id = notification.metadata.campaignSignupId;
          action.data.coinsReward = notification.metadata.coinsReward;
        } else {
          action.route = 'Wallet';
        }
        break;

      case 'first-coin-ready': // go to business
      case 'business-gift':
        action.route = 'Business';
        action.data.data = {};
        action.data.data.id = notification.targetId;
        break;

      case 'offer-expire-close':
        action.route = 'SingleOffer';
        action.data.id = notification.targetId;
        action.data.offerData = {
          id: notification.targetId
        };

        if (moment.utc(notification.metadata.expirationDate).isBefore(new Date())) {
          action.data.isMyOffer = true;
          action.data.status = 'expired';
        }
        break;

      case 'send-offer': // go to offer
        action.route = 'SingleOffer';
        action.data.id = notification.targetId;
        action.data.offerData = {};
        action.data.offerData.id = notification.targetId;
        break;

      case 'physical-payment': // go to wallet
      case 'payment-auth':
      case 'redeem-coin-gift':
      case 'redeem-coin-gift-customer-notification':
      case 'app-coin-payment':
      case 'app-threshold-coin-payment':
        action.route = 'Wallet';
        break;

      case 'birthday-offer': // go to discovery
      default:
        action.route = 'Discovery';
        break;
    }

    return action;
  }

  static navigate(notificationAction) {
    if (notificationAction) {
      const { route, data } = notificationAction;
      if (route === 'Wallet') eventBus.notify('updateBalance');
      Navigation.navigate(route, data);
    }
  }
}
