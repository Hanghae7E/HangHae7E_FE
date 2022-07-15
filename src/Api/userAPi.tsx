/* eslint-disable @typescript-eslint/no-explicit-any */
import { Iprofile } from '../TypeInterface/userType';
import baseUrl from './baseUrl';

export const getMyInfo = (id: string, token: any) => {
  const res = baseUrl.get(`/user/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return res;
};
export const setMyInfo = (userInfo: Iprofile, token: any) => {
  const form = new FormData();

  form.append('username', userInfo.username);
  form.append('phone_number', userInfo.phone_number);
  form.append('email', userInfo.email);
  const res = baseUrl.put('/user/3', form, {
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

export default {
  getMyInfo: (id: string, token: any) => getMyInfo(id, token),
  setMyInfo: (userInfo: Iprofile, token: any) => setMyInfo(userInfo, token),
};
