/* eslint-disable react/require-default-props */
/* eslint-disable no-alert */
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import jwtUtils from '../util/JwtUtil';
import Login from './Login';

function ProtectedRoute({ redirectPath = '/' }: { redirectPath: string }) {
  const token = localStorage.getItem('token');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navgate = useNavigate();
  const modalClose = () => {
    setModalOpen(!modalOpen);
    navgate(redirectPath, { replace: true });
  };

  if (!token) {
    return (<Login closeModal={modalClose} titles={['로그인이 필요한 페이지 입니다.']} messages={['로그인 후 다양한 서비스를 이용해보세요.']} />);
  }
  if (!jwtUtils.isAuth(token)) {
    return (<Login closeModal={modalClose} titles={['로그인이 필요한 페이지 입니다.']} messages={['로그인 후 다양한 서비스를 이용해보세요.']} />);
  }

  return <Outlet />;
}

export default ProtectedRoute;
