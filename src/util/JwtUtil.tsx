/* eslint-disable no-console */
import jwtDecode from 'jwt-decode';
import { ITokenDecode } from '../TypeInterface/tokenType';

export default class jwtUtils {
  static isAuth(token: string) {
    if (!token) {
      return false;
    }

    const decoded: ITokenDecode = jwtDecode(token);
    // console.log(decoded, new Date().getTime() / 1000);
    if (decoded.exp > new Date().getTime() / 1000) {
      return true;
    }
    return false;
  }

  static getId(token: string | null) {
    if (!token) {
      return false;
    }
    const decoded: ITokenDecode = jwtDecode(token.substring(6));
    return decoded.userId;
  }
}
