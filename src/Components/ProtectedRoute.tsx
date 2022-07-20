/* eslint-disable react/require-default-props */
/* eslint-disable no-alert */
import { Navigate, Outlet } from 'react-router-dom';
import jwtUtils from '../util/JwtUtil';

function ProtectedRoute({ redirectPath = '/' }: { redirectPath: string }) {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('로그인이 필요한 페이지 입니다.');
    return <Navigate to={redirectPath} replace />;
  }
  if (!jwtUtils.isAuth(token)) {
    alert('로그인이 필요한 페이지 입니다.');
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
