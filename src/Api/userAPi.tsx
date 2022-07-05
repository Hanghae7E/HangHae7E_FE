import baseUrl from './baseUrl';

const getUser = async () => {
  const res = await baseUrl.get(`/user`);
  return res;
};
const getUserProfile = async (email: string) => {
  const res = await baseUrl.get(`/user/${email}`);
  return res;
};

export default {
  getUser: () => getUser(),
  getUserProfile: (email: string) => getUserProfile(email),
};
