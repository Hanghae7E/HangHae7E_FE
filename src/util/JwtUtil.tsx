/* eslint-disable no-console */
import jwtDecode from 'jwt-decode';
import { ITokenDecode } from '../TypeInterface/tokenType';

export default class jwtUtils {
  static isAuth(token: string) {
    if (!token) {
      return false;
    }
    console.log('test', token);
    const decoded: ITokenDecode = jwtDecode(token);
    console.log('test2', decoded);
    if (decoded.EXPIRED_DATE > new Date().getTime() / 1000) {
      return true;
    }
    return false;
  }

  static getId(token: string) {
    const decoded: ITokenDecode = jwtDecode(token.substring(6));
    return decoded.USER_ID;
  }
}
