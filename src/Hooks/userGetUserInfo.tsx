/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import { useQuery } from 'react-query';
import userAPi from '../Api/userAPi';
import jwtUtils from '../util/JwtUtil';

export default () => {
  const token = localStorage.getItem('token');
  if (token) {
    const userId = jwtUtils.getId(token || '');
    const userInfo = useQuery(['get_userInfo', userId], () => userAPi.getMyInfo(userId), {
      enabled: !!userId,
    });
    return userInfo;
  }
};
