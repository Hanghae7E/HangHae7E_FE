import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, SetStateAction } from 'react';
import DropDownItem from './DropDownItem';

export default function CreateBody({
  career,
  setCarrer,
}:
  {
    career: string,
    setCarrer: React.Dispatch<SetStateAction<string>>
  }) {
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-10 bg-white shadow-lg sm:mt-10 mb-8">
      {/* 프로젝트만들기 상단 */}
      <div className="mt-5 sm:mt-15">
        <p className="font-extrabold text-xl sm:text-3xl">
          프로젝트 만들기
        </p>
        <div className="p-5 sm:p-20">
          <div className="flex w-full items-center">
            <p className="font-extrabold text-sm sm:text-xl py-3 w-32 sm:w-56">제목</p>
            <div className="flex flex-1 w-full text-xl">
              <textarea className="flex-1 w-full text-sm sm:text-lg pl-2 py-2 my-2 bg-slate-200 font-semibold box-border resize-none" />
            </div>
          </div>
          <div className="flex min-w-min sm:w-3/4">
            <p className="font-extrabold text-sm sm:text-xl py-3 w-32 sm:w-56">프로젝트 기간</p>
            <div className="flex pl-3 flex-1 w-full text-sm sm:text-lg py-2 my-2 bg-slate-400 cursor-pointer font-semibold">
              <p>2022-07-03 ~ 2022-07-16</p>
            </div>
          </div>
          <div className="flex min-w-min sm:w-3/4">
            <p className=" font-extrabold text-sm sm:text-xl py-3 w-32 sm:w-56">모집 마감일</p>
            <div className="flex pl-3 flex-1 w-full text-sm sm:text-lg py-2 my-2 bg-slate-400 cursor-pointer font-semibold">
              <p>2022-07-03</p>
            </div>
          </div>
          <div className="flex min-w-min sm:w-2/3">
            <p className=" font-extrabold text-sm sm:text-xl py-3 w-32 sm:w-56">필요한 포지션 </p>
            <div className="pl-3 flex-1 w-full py-2 my-2">
              <div className="flex justify-between items-start">
                <div className="w-1/4 text-sm sm:text-lg mr-5 p-2 pl-3 pt-4 font-bold">
                  <p>직군</p>
                </div>
                <div className="flex-1 w-3/4">
                  <div className="flex box-border items-center min-w-min">
                    <p className="w-2/3 text-xs sm:text-base min-w-max px-1">개발자</p>
                    <div className="flex flex-1 items-center">
                      <input type="number" className="w-full pl-2 py-2 my-2 bg-slate-200 box-border text-xs sm:text-base" />
                      <span className="text-xs ml-1 sm:text-base">명</span>
                    </div>
                  </div>
                  <div className="flex box-border items-center min-w-min">
                    <p className="w-2/3 text-xs sm:text-base min-w-max px-1">디자이너</p>
                    <div className="flex flex-1 items-center">
                      <input type="number" className="w-full pl-2 py-2 my-2 bg-slate-200 box-border text-xs sm:text-base" />
                      <span className="text-xs ml-1 sm:text-base">명</span>
                    </div>
                  </div>
                  <div className="flex box-border items-center min-w-min">
                    <p className="w-2/3 text-xs sm:text-base min-w-max px-1">기획자</p>
                    <div className="flex flex-1 items-center">
                      <input type="number" className="w-full pl-2 py-2 my-2 bg-slate-200 box-border text-xs sm:text-base" />
                      <span className="text-xs ml-1 sm:text-base">명</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* 경력 */}
              <div className="flex justify-between items-start">
                <div className="min-w-max w-1/3 text-sm sm:text-lg mr-5 p-2 pl-3 pt-4 font-bold">
                  <p>경력</p>
                </div>
                <div className="w-2/3">
                  <div className="flex box-border items-center">
                    <Menu as="div" className="relative w-full justify-start">
                      <div>
                        <Menu.Button className="flex justify-between px-2 items-center w-10/12 min-w-max py-2 my-2 bg-slate-200  box-border text-xs sm:text-base">
                          <span>{career}</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
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
                          <DropDownItem setCarrer={setCarrer}><p>신입</p></DropDownItem>
                          <DropDownItem setCarrer={setCarrer}><p>경력 1년</p></DropDownItem>
                          <DropDownItem setCarrer={setCarrer}><p>경력 2년</p></DropDownItem>
                          <DropDownItem setCarrer={setCarrer}><p>경력 3년</p></DropDownItem>
                          <DropDownItem setCarrer={setCarrer}><p>경력 4년 이상</p></DropDownItem>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      {/* 프로젝트 상세내용 */}
      <div>
        <p className="font-bold text-sm sm:text-xl">프로젝트 상세내용</p>
        <div className="px-10 pt-5">
          <textarea className="w-full h-52 sm:h-96 p-4 border bg-slate-100 resize-none rounded-lg" />
        </div>
        <div className="px-10 pt-5">
          <textarea className="w-full h-1 p-4 border bg-slate-100 resize-none rounded-lg" />
        </div>
        <div className="m-auto max-w-2xl px-10 pt-5 flex justify-around">
          <div className="flex w-52 border py-3 rounded-2xl justify-center bg-gray-400 font-semibold cursor-pointer hover:bg-black hover:text-white">취소하기</div>
          <div className="flex w-52 border py-3 rounded-2xl justify-center bg-gray-400 font-semibold cursor-pointer hover:bg-black hover:text-white">프로젝트 생성하기</div>
        </div>
      </div>
    </div>
  );
}
