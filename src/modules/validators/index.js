import _ from 'lodash';
import moment from 'moment';

export const EmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default class Validator {
  utils = {
    emojiRgx: /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
    getAge: (dateString) => {
      const birthday = new Date(dateString);
      const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = moment.utc(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.get('year') - 1970);
    }
  }

  isEmpty = v => _.isEmpty(v)

  isValidDate(value) { // EXPECT: 04/21/1995
    this.value = value;
    const month = Number(value.split('/')[0]);
    const day = Number(value.split('/')[1]);
    const year = Number(value.split('/')[2]);

    if (_.isEmpty(value)) return false;
    // the person have less or more then 90 y old ?
    if (this.utils.getAge(value) < 18 || year <= 1920) return false;
    // the month is 29/02 ? is leap year ?
    if (year % 4 && month === 2 && day >= 29) return false;

    return true;
  }

  isValidEmail(value) { // EXPECT: test@test.com
    if (_.isEmpty(value)) return false; // string is empty ?

    const after = value.match(/(?=@).*$/);
    if (after === null) return false;
    // get all before @ -> .+?(?=@)
    // get all after @ -> (?<=@).*$

    if (value.match(/[@]/) === null) return false; // string has less or more then one @ ?
    if (after[0].match(/[.]/) === null) return false; // string after @ has . ?
    if (after[0].match(this.utils.emojiRgx) != null) return false; // string has emoji ?

    return true;
  }

  isValidSelected(value, isDate) { // EXPECT: String as option
    if (_.isEmpty(value)) return false; // if the selection is just a bunch of regular options
    if (isDate && !this.isValidDate(value)) return false; // if the selection are regular dates

    return true;
  }

  isValidPassword(value) { // EXPECT: String as password
    this.value = value;
    if (_.isEmpty(value)) return false;
    if (value.length < 6) return false; // password must have 6 characters

    return true;
  }

  isValidPhone(value) { // EXPECT: 999 999-9999
    this.value = value;
    if (_.isEmpty(value)) return false;
    if (value.length < 12) return false;
    // if (value.match(/^\d{3} \d{3}-\d{4}$/) === null) return false;

    return true;
  }

  isValidCampaignCode(value) {
    this.value = value;
    if (_.isEmpty(value)) return false;

    return true;
  }
}
