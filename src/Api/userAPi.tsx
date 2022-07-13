import { useQuery } from 'react-query';
import { Iprofile } from '../TypeInterface/userType';
import baseUrl from './baseUrl';

export const getMyInfo = (id: string, token: any) => {
  const res = baseUrl.get(`/api/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const setMyInfo = (userInfo: Iprofile, token: any) => {
  const res = baseUrl.put(`/api/user/${userInfo.id}`, { data: userInfo }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export default {
  getMyInfo: (id: string, token: any) => getMyInfo(id, token),
  setMyInfo: (userInfo: Iprofile, token: any) => setMyInfo(userInfo, token),
};
