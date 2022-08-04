/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import { useQuery } from 'react-query';
import userApi from '../Api/userApi';
import jwtUtils from '../util/JwtUtil';

export default () => {
  console.log('get_userInfo1');
  const token = localStorage.getItem('token');
  if (token) {
    const userId = jwtUtils.getId(token);
    console.log('get_userInfo2 ', userId);
    const userinfo = useQuery(['get_userInfo', userId], () => userApi.getMyInfo(userId), {
      enabled: !!userId,
    });
    return userinfo;
  }
};
