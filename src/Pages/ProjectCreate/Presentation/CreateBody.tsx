import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, SetStateAction, useState } from 'react';
import PositionCreateTag from '../../../Components/PositionCreateTag';
import SearchCreateTag from '../../../Components/SearchCreateTag';
import DropDownItem from './DropDownItem';

export default function CreateBody({
  career,
  setCarrer,
  hashTag,
  setHashTag,
  imgName,
  setImageName,
}:
  {
    career: string,
    setCarrer: React.Dispatch<SetStateAction<string>>
    hashTag:Array<string>,
    setHashTag: React.Dispatch<SetStateAction<Array<string>>>,
    imgName: File | undefined,
    setImageName:React.Dispatch<SetStateAction<File | undefined>>
  }) {
  const fileGetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filename = e.target.files;

    if (filename) {
      const abc = filename[0];
      setImageName(abc);
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-10 bg-white sm:mt-10 mb-8">
      {/* 프로젝트만들기 상단 */}
      <div className="mt-5 sm:mt-15">
        <p className="ml-16 font-extrabold text-xl sm:text-[36px] text-developer">
          프로젝트 만들기
        </p>
        <div className="ml-16 pt-5 sm:pt-20">
          <div className="flex w-full items-center">
            <p className="font-extrabold text-xs sm:text-lg py-3 w-32 sm:w-56 self-center  min-w-max">제목</p>
            <div className="flex flex-1 w-full border-[3px] h-[60px]  border-inputGray my-1 rounded-xl overflow-hidden max-w-[600px]">
              <input
                className="flex-1 w-full
              sm:text-[20px] pl-3 py-3 rounded-xl outline-none
              outline-inputGray bg-white font-inter
              box-border resize-none"
                placeholder="000 프로젝트에 함께할 팀원을 모집합니다."
              />
            </div>
          </div>
          <div className="flex min-w-min sm:w-3/4">
            <p className="font-extrabold text-xs sm:text-lg py-3 w-32 sm:w-56 self-center ">프로젝트 기간</p>
            <div className="flex px-2 flex-1 w-full max-w-[281px] h-[60px] items-center min-w-max text-xs sm:text-base py-3 my-2 cursor-pointer font-semibold border-[3px] rounded-lg border-inputGray">
              <p className="whitespace-nowrap flex items-center ">
                <img className="pr-1" src="/calendarIcon.svg" alt="calendar" />
                <span className="m-0 p-0 font-inter text-[18px]">2022-07-03 ~ 2022-07-16</span>
              </p>
            </div>
          </div>
          <div className="flex min-w-min sm:w-3/4">
            <p className=" font-extrabold text-xs sm:text-lg py-3 w-32 sm:w-56 self-center">모집 마감일</p>
            <div className="flex px-2 flex-1 w-full items-center h-[60px]  max-w-[281px] min-w-max text-xs sm:text-base py-3 my-2 cursor-pointer font-semibold border-[3px] rounded-lg border-inputGray">
              <p className="sm:whitespace-nowrap flex items-center">
                <img className="pr-1" src="/calendarIcon.svg" alt="calendar" />
                <span className="m-0 p-0 font-inter text-[18px]">2022-07-03</span>
              </p>
            </div>
          </div>
          <div className="flex min-w-min sm:w-2/3">
            <p className=" font-extrabold text-xs sm:text-lg py-3 w-32 sm:w-56">필요한 포지션 </p>
            <div className="flex-1 w-full py-2 my-2">
              <div className="flex items-start">
                <div className="text-xs sm:text-[18px] pt-7 font-bold mr-[21px]">
                  <p className="whitespace-nowrap">직군</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between box-border min-w-max">
                    <PositionCreateTag userPosition="개발자" />
                    <div className="flex items-center ml-5">
                      <input type="text" className="text-right sm:text-[18px] w-[85px] h-[60px] pr-2 py-2 my-2 border-[3px] rounded-xl border-inputGray box-border text-xs " />
                      <span className="text-xs ml-1 sm:text-[18px] font-bold">명</span>
                    </div>
                  </div>
                  <div className="flex w-full box-border justify-between min-w-max">
                    <PositionCreateTag userPosition="디자이너" />
                    <div className="flex items-center">
                      <input type="text" className="text-right sm:text-[18px] w-[85px] h-[60px] pr-2 py-2 my-2 border-[3px] rounded-xl border-inputGray box-border text-xs " />
                      <span className="text-xs ml-1 sm:text-[18px] font-bold">명</span>
                    </div>
                  </div>
                  <div className="flex w-full box-border justify-between min-w-max">
                    <PositionCreateTag userPosition="기획자" />
                    <div className="flex items-center">
                      <input type="number" className="text-right sm:text-[18px]  w-[85px] h-[60px] pr-2 py-2 my-2 border-[3px] rounded-xl border-inputGray box-border text-xs " />
                      <span className="text-xs ml-1 sm:text-[18px] font-bold">명</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* 경력 */}
              <div className="flex ">
                <div className="min-w-max mr-[20px] text-xs sm:text-[18px] pt-6 font-bold">
                  <p>경력</p>
                </div>
                <div className="w-full ">
                  <div className="flex box-border items-center ">
                    <Menu as="div" className="relative w-full justify-start ">
                      <Menu.Button className="flex w-full max-w-[198px] h-[40px] justify-between px-2 items-center min-w-max py-1 mt-3  box-border text-xs sm:text-base border-[3px] border-inputGray rounded-lg">
                        <span>{career}</span>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.77951 8L0.487136 0.5L11.0719 0.500001L5.77951 8Z" fill="#9AA0A6" />
                        </svg>

                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 font-inter  w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
          <div className="flex min-w-min sm:w-3/4">
            <p className=" font-extrabold text-xs sm:text-lg py-3 w-32 sm:w-56 self-center">참고이미지</p>
            <div className="flex px-3 flex-1 w-full items-center max-w-[235px] min-w-max text-xs sm:text-base py-2 my-2  border-[3px] rounded-2xl border-developer">
              <label className="sm:whitespace-nowrap flex items-center cursor-pointer" htmlFor="imageFile">
                <img className="pr-2" src="/fileIcon.svg" alt="calendar" />
                <span className="font-inter text-developer text-[18px]">
                  {imgName ? imgName.name : '파일첨부(최대 2MB)'}
                  {' '}
                </span>
              </label>
              <input className="hidden" id="imageFile" type="file" accept="image/png, image/jpeg" onChange={fileGetChange} />
            </div>

          </div>
        </div>
        <div className="mx-auto w-1/2  overflow-hidden pb-5 sm:pb-20">
          {imgName && (

          <img className="rounded-3xl" src={URL.createObjectURL(imgName)} alt="" />

          )}
        </div>
      </div>
      {/* 프로젝트 상세내용 */}
      <div>
        <p className="font-bold text-sm sm:text-[20px] ml-16">프로젝트 상세내용</p>
        <div className="pl-16 pt-5 ">
          <textarea className="w-full h-52 text-[18px] sm:h-96 p-4 border-[3px] bg-input-bg border-inputGray bg-slate-100 resize-none rounded-lg" />
        </div>
        <div className="pl-16 pt-5">
          <div className="w-full self-center flex items-center min-h-[50px] border-[3px] border-inputGray bordre-in resize-none rounded-full">
            {hashTag.length < 1
              ? <p className="font-inter text-inputGray text-[20px] pl-[24px]">해시태그를 선택해주세요 최대 4개</p>
              : (
                <div className="flex flex-wrap px-5">
                  {hashTag.map((text, i) => <SearchCreateTag add={false} setHashTag={setHashTag} hashTag={hashTag} key={`${text + i}`} tag={text} />)}
                </div>
              )}
          </div>
          <div className="flex flex-wrap mt-5">
            <SearchCreateTag add setHashTag={setHashTag} hashTag={hashTag} tag="Spring" />
            <SearchCreateTag add setHashTag={setHashTag} hashTag={hashTag} tag="React" />
            <SearchCreateTag add setHashTag={setHashTag} hashTag={hashTag} tag="프론트엔드" />
            <SearchCreateTag add setHashTag={setHashTag} hashTag={hashTag} tag="백엔드" />
            <SearchCreateTag add setHashTag={setHashTag} hashTag={hashTag} tag="개발자" />
            <SearchCreateTag add setHashTag={setHashTag} hashTag={hashTag} tag="디자이너" />
          </div>
        </div>

      </div>
    </div>
  );
}
