/* eslint-disable @typescript-eslint/no-explicit-any */
import { Iprofile } from '../TypeInterface/userType';
import jwtUtils from '../util/JwtUtil';
import baseUrl from './baseUrl';

export const getMyInfo = (id: string| false) => {
  const res = baseUrl.get(`/user/${id}`);
  return res;
};
export const setMyName = (userInfo: Iprofile) => {
  const form = new FormData();
  const token = localStorage.getItem('token');
  const userId = jwtUtils.getId(token || '');
  form.append('username', userInfo.username);
  form.append('phone_number', userInfo.phone_number);
  const res = baseUrl.put(`/user/${userId}`, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

export default {
  getMyInfo: (id: string |false) => getMyInfo(id),
  setMyName: (userInfo: Iprofile) => setMyName(userInfo),
};
