import ApiAuth from '@modules/api/api-auth';
import ApiProfile from '@modules/api/api-profile';

class AuthService {
  async start() {
    try {
      const { data } = await ApiAuth.session();

      if (data.expired) {
        throw new Error('Session expired');
      }

      const profile = await this.getProfile();
      await ApiAuth.saveUser(profile);
    } catch (error) {
      await ApiAuth.clearUser();
    }
  }

  async getProfile() {
    try {
      const response = await ApiProfile.getProfile();
      const { data: dataProfile } = response;

      return dataProfile;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new AuthService();
