import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { URLSearchParams } from 'url';
import userAPi from '../Api/userAPi';
import { jwtType } from '../TypeInterface/jwtType';
import { Iprofile } from '../TypeInterface/userType';
import ChangeNickname from './NicknameModal';

export default function SocialLogin() {
  const getParm = new URL(window.location.href).searchParams.get('jwt')

  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const modalClose = () => { setModalOpen(!modalOpen) }
  const navigate = useNavigate();

  if (getParm) {
    localStorage.setItem('token', getParm);
  }

  return (<div />)
}
