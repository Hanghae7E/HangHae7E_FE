/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  Fragment, useContext, useEffect, useState,
} from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import jwtUtils from '../util/JwtUtil';
import { Iuser } from '../TypeInterface/userType';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header({ userInfo }:{ userInfo: Iuser }) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const nav = useNavigate();
  const token = localStorage.getItem('token');
  const [isLogin, setIsLogin] = useState(false);
  const goCreateProject = () => {
    if (!window.location.pathname.includes('/projectcreate')) { nav('/projectcreate'); }
  };
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };
  useEffect(() => {
    console.log('test', token);
    if (token) {
      setIsLogin(jwtUtils.isAuth(token));
    }
  }, []);
  return (
    <>
      <Disclosure as="nav" className="bg-white">
        {() => (
          <div className="mx-auto w-full px-[2px] sm:px-6">
            <div className="relative flex items-center h-[44px] sm:h-16">
              <div className="flex flex-1 items-center">
                <div className="flex items-center flex-1">
                  <img className="h-[19px] sm:h-[29px] px-[10px] sm:px-0 " src="/logo.svg" alt="로고" />
                </div>
                <div className="text-[14px] sm:text-[18px] px-5 py-2">
                  <div className="flex justify-center items-center">

                    <div
                      onClick={goCreateProject}
                      className="no-underline font-bold cursor-pointer"
                    >
                      프로젝트 생성
                    </div>

                  </div>
                </div>
              </div>
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button> */}

                {/* Profile dropdown */}
                {!isLogin
                  ? (
                    <div className="flex text-sm">
                      <div className="border border-[#6457FA] text-[#6457FA] text-[14px] sm:text-[16px]  h-[29px] w-[69px] sm:h-[35px] sm:w-[74px] rounded-full sm:rounded-[12px] justify-center flex items-center">

                        <button onClick={modalClose} type="button" className="flex ">
                          <p
                            className="font-medium"
                          >
                            로그인
                          </p>
                        </button>
                      </div>

                    </div>
                  )
                  : (
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none ">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={userInfo && userInfo.profile_image_url ? userInfo.profile_image_url : '/profiledefault.svg'}
                            alt=""
                          />
                          <div className="text-[16px] ml-[8px]">{userInfo && userInfo.username}</div>
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-[-5px] md:right-[-20px] mt-2 w-[126px] h-[90px] rounded-[8px] shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/mypage"
                                className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-2 text-[16px]  items-center justify-center flex')}
                              >
                                마이페이지
                              </Link>

                            )}
                          </Menu.Item>
                          <hr className="text-[#DFE1E5]" />
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                onClick={() => {
                                  localStorage.clear();
                                  window.location.replace('/');
                                }}
                                className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-2 text-[16px] items-center justify-center flex cursor-pointer')}
                              >
                                로그아웃
                              </div>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
              </div>
            </div>
          </div>
        )}
      </Disclosure>
      {modalOpen && <Login closeModal={modalClose} />}
    </>
  );
}
