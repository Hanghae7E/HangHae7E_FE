import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SocialLogin() {
  const getParm = new URL(window.location.href).searchParams.get('jwt');

  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const modalClose = () => { setModalOpen(!modalOpen); };
  const navigate = useNavigate();

  if (getParm) {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIzIiwiZW1haWwiOiJoYXJwZXI5ODA4QGdtYWlsLmNvbSIsInNvY2lhbC10eXBlIjoiZ29vZ2xlIiwiaWF0IjoxNjU3ODYxMDIzLCJleHAiOjE2NTc5NDc0MjN9.cFY6nqu9vkYQaPNEi1xoP8RP2Ai_F0qT4gUl1m08daE');
  }

  return (<div />);
}
