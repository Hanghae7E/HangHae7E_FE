/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const nav = useNavigate();
  const isLogin = true;
  const goCreateProject = () => {
    nav('/projectcreate');
  };
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {() => (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center ">
              <div className="flex-1 flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src="/logo.svg" alt="huddleup" />
                <img className="hidden lg:block h-8 w-auto" src="/logo.svg" alt="huddleup" />
              </div>
              <div className="hidden sm:block  hover:bg-developer text-gray-800 hover:text-white text-sm px-5 py-2 rounded-2xl">
                <div className="flex justify-center items-center">
                  <div
                    onClick={goCreateProject}
                    className="no-underline bg-white-900 font-bold cursor-pointer"
                  >
                    프로젝트 생성
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
              {!isLogin ? (
                <div className="flex  space-x-1 text-sm">
                  <div className="sm:block  hover:bg-gray-700 text-gray-800 hover:text-white text-sm px-5 py-2 rounded-2xl">
                    <div className="flex ">
                      <a href="/" className="no-underline bg-white-900 font-bold">
                        로그인
                      </a>
                    </div>
                  </div>
                  <div className="sm:block  hover:bg-gray-700 text-gray-800 hover:text-white text-sm px-5 py-2 rounded-2xl">
                    <div className="flex">
                      <a href="/" className="no-underline bg-white-900 font-bold">
                        회원가입
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div>test</div>
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}