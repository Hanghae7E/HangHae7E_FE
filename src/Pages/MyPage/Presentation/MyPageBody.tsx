import { useState } from 'react';
import wy from '../Wy.jpg';
import Profile from './Profile';
import { Iprofile } from '../../../TypeInterface/profileType';
import { Itag } from '../../../TypeInterface/tagType';
import Project from './Project';

export default function MyPageBody({
  profileData,
  skillTags,
}: {
  profileData: Iprofile;
  skillTags: Array<string>;
}) {
  const profileClick = () => {};
  const reqProjectClick = () => {};
  const appProjectClick = () => {};
  const modifyUserInfo = () => {};
  return (
    <div className="myPage w-full h-full">
      <div className="myPageBanner  bg-cover bg-center">
        <img className="w-full h-[255px] object-cover" src={wy} alt="backgroundImage" />
      </div>
      <div className="myPageContents flex w-full h-full  bg-white">
        <div className="sideProfile p-20 w-20 relative">
          <div className="side absolute -top-[88px] w-48 bg-white border-2  rounded-sm ">
            <div className="sideInner p-5  rounded-xl text-center">
              <div className="userImg relative  ">
                <img
                  className="h-20 w-20 m-auto rounded-full"
                  src={profileData.profile_image_url}
                  alt="userImage"
                />
                <div className="absolute w-6 h4 right-1/4 -bottom-1 rounded-full  bg-slate-800 text-slate-800">
                  ED
                </div>
              </div>
              <div className="userName p-2 font-bold">{profileData.username}</div>
              <div className="userEmail pb-2 text-sm text-slate-700">{profileData.email}</div>
              <button
                type="button"
                onClick={modifyUserInfo}
                className="w-32 h-6  bg-slate-700 rounded-lg text-center text-xs font-medium text-white"
              >
                내 정보 수정하기
              </button>
            </div>
          </div>
        </div>
        <div className="constens w-full  flex flex-col pl-32  bg-white ">
          <div className="constensTab flex m-3 pl-4 ">
            <button
              className="profileTap flex p-2 font-extrabold text-slate-700"
              type="button"
              onClick={profileClick}
            >
              프로필
            </button>
            <button
              className="reqProjectTap flex p-2 font-extrabold text-slate-400 hover:text-slate-700"
              type="button"
              onClick={reqProjectClick}
            >
              진행중인 프로젝트
            </button>
            <button
              className="appProjectTap flex p-2 font-extrabold text-slate-400 hover:text-slate-700"
              type="button"
              onClick={appProjectClick}
            >
              참여 신청 한 프로젝트
            </button>
          </div>
          <div className="profileComponent flex flex-col m-2 p-[27px] border-2 ">
            <Profile profileData={profileData} tagList={skillTags} />
            {/* <Project /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
