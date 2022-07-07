import baseUrl from './baseUrl';

//소셜 로그인 후 ??
const getUser = async () => {
  const res = await baseUrl.get(`/user`);
  return res;
};
//프로필 변경
const putUser = async () => {
  const res = await baseUrl.put(`/user`);
  return res;
};

const getUserProfile = async (email: string) => {
  const res = await baseUrl.get(`/user/${email}`);
  return res;
};

export default {
  getUser: () => getUser(),
  putUser: () => putUser(),
  getUserProfile: (email: string) => getUserProfile(email),
};
