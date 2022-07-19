import React, { MouseEventHandler, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Iprofile, auth, IProfileFormData } from '../../../TypeInterface/userType';
import wy from '../Wy.jpg';
import user from '../User.jpg';
import EditIcon from '../EditIcon.png';
import Profile from './Profile';
import Project from './Project';
import userAPi from '../../../Api/userAPi';

export default function MyPageBody({ profileData, tagList, Auth }:
{
  profileData: IProfileFormData;
  tagList: Array<string>;
  Auth:auth;
  }) {
  const query = useQueryClient();
  const [imgFile, setImgFile] = useState<File>();
  const [imgs, setImgs] = useState<string>(profileData.profile_image_url);
  const [Tab, setTab] = useState('profile');
  const [profileName, setProfileName] = useState(profileData.username);
  // const [modify, setModify] = useState(true);
  const [nameModify, setNameModify] = useState(false);

  const tabClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const val = e.currentTarget.value;
    setTab(val);
  };

  const modifyUserInfo = () => {
    // console.log('클릭');
  };
  /// TODO : 타입 바꿔야 할듯.ㅠ 아니면 닉네임만 업데이트 할 수 있도록 api 만들어달라해야할듯
  const data :Iprofile = {
    userId: Number(Auth.userId),
    username: profileName,
    phone_number: profileData.phone_number,
    email: profileData.email,
    profile_image_url: profileData.profile_image_url,
    residence: profileData.residence,
    available_period: profileData.available_period,
    available_time: profileData.available_time,
    position: profileData.position,
    fields: profileData.fields,
    face_to_face: profileData.face_to_face,
    skills: profileData.skills,
    career_period: profileData.career_period,
    portfolio_url: profileData.portfolio_url,
    file: profileData.file,
  };
  const changeName = () => {
    if (nameModify) {
      userAPi.setMyName(data);
    }
    setNameModify(!nameModify);
  };
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const files = e.target.files[0];
    userAPi.putImageProfile(files, profileData.username);
    setImgs(URL.createObjectURL(files));
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === null) return;
    const values = e.target.value;
    setProfileName(values);
  };
  return (
    <div className="max-w-full mx-auto">
      <div className="myPageBanner  bg-cover bg-center">
        <img className="w-full h-[255px] object-cover" src={wy} alt="backgroundImage" />
      </div>
      <div className="myPageContents flex max-w-[1062px] mx-auto ">
        <div className="side relative flex-none -top-[88px] w-[300px] h-[332px] px-[20px] pb-20px max-w-[300px] bg-white border-2 border-[#EEEEEE]  rounded-2xl ">
          <div className="sideInner text-center mb-[20px]">
            <div className="userImg pt-[40px] pb-[18px]">
              <label className="cursor-pointer" htmlFor="file">
                <img
                  className="w-[80px]  h-[80px] mx-auto rounded-full"
                  src={imgs || user}
                  alt="userImage"
                />
                <input className="hidden" type="file" id="file" accept="image/jpg, image/jpeg, image/png" onChange={onChangeFile} />
              </label>

            </div>
            <div className="flex justify-center userName font-pre font-semibold text-[22px] leading-[22px] pb-[18px]">
              {nameModify ? <input className="w-[100px]" type="text" value={profileName} onChange={onChangeName} /> : profileData.username}
              <button
                type="button"
                onClick={changeName}
                value="modifyUserInfo"
              >
                <img className="w-8 h-8 inline-block" src={EditIcon} alt="userImage" />
              </button>
            </div>
            <div className="userEmail font-pre font-normal  text-[16px] leading-[19px] pb-[18px]  ">
              {profileData.email}
            </div>
            <button
              type="button"
              value="modifyUserInfo"
              onClick={modifyUserInfo}
              className="w-full h-[67px] rounded-[15px] font-pre font-normal text-[16px] leading-[19px] bg-[#6457FA] text-white hover:bg-white hover:text-[#6457FA]  hover:border-2 hover:border-[#6457FA]"
            >
              내 정보 수정하기
            </button>
          </div>
        </div>
        <div className="contentsArea max-w-[736px] basis-full  pl-[32px] ">
          <div className="tab w-full flex-none pt-[87px] pb-8 font-pre font-bold text-[28px] leading-[33px]">
            <button
              type="button"
              onClick={tabClick}
              value="profile"
              className="pr-8 hover:underline hover:decoration-4"
            >
              프로필
            </button>
            <button
              type="button"
              value="registeredPosts"
              onClick={tabClick}
              className="pr-8 hover:underline hover:decoration-4"
            >
              등록한 프로젝트
            </button>
            <button
              type="button"
              value="applyPosts"
              onClick={tabClick}
              className="pr-8 hover:underline hover:decoration-4"
            >
              신청한 프로젝트
            </button>
          </div>
          {Tab === 'profile' ? (
            <Profile profileData={profileData} tagList={tagList} Auth={Auth} />
          ) : (
            <Project type={Tab} profileData={profileData} />
          )}
        </div>
      </div>
    </div>
  );
}
