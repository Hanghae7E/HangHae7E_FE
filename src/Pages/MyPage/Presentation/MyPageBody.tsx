/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { IProfileFormData, IsideProfile } from '../../../TypeInterface/userType';
import { Itag } from '../../../TypeInterface/tagType';
import Profile from './Profile';
import Project from './Project';
import userAPi from '../../../Api/userAPi';
import GlobalIcon from '../../../Components/GlobalIcon';

export default function MyPageBody({ profileData, tagList, currentUser }:
{
  profileData: IProfileFormData;
  tagList: Array<Itag>;
  currentUser:boolean;
  }) {
  const tag = tagList.map((obj: Itag) => obj.body);
  const newTag = tag.splice(8);
  const [Tab, setTab] = useState('profile');
  const [objectURL, setObjectURL] = useState<string>(profileData.profile_image_url);
  const [nameModify, setNameModify] = useState(false);
  const [modifyState, setModifyState] = useState(false);

  const [newName, setNewName] = useState(profileData.username);
  const [nameMessage, setNameMessage] = useState('');
  const [err, setErr] = useState(false);
  const [updateErrMessage, setUpdateErrMessage] = useState('');
  const queryClient = useQueryClient();

  const UpdateSideProfile = useMutation(
    (data: IsideProfile) => userAPi.setSideProfile(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('get_userInfo');
        queryClient.invalidateQueries('get_profile_info');
      },
      onError: () => {
        // TODO : 에러 모달 보여주기
        setUpdateErrMessage('에러가 발생했습니다.');
      },
    },
  );

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const files = e.target.files[0];
    const SideProfile:IsideProfile = { file: files, username: newName };

    setObjectURL(URL.createObjectURL(files));
    UpdateSideProfile.mutate(SideProfile, {
      onSuccess: () => {
        URL.revokeObjectURL(objectURL);
      },
      onError: () => {
        setUpdateErrMessage('#######프로필 변경 실패########');
      },
    });
  };

  const onChangeName = () => {
    const SideProfile:IsideProfile = { username: newName };
    if (nameModify) {
      UpdateSideProfile.mutate(SideProfile, {
        onError: () => {
          setUpdateErrMessage('#######프로필 변경 실패########');
        },
      });
    }
    setNameModify(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setErr(true);
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
    } else { setNewName(e.target.value); }
  };

  const modifyUserInfo = () => {
    setModifyState(!modifyState);
  };

  const tabClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const val = e.currentTarget.value;
    setTab(val);
    setNameModify(false);
  };
  return (
    <div className="max-w-full mx-auto">
      <div className="myPageBanner  bg-cover bg-center">
        <img className="w-full h-[91px] pc:h-[255px] object-cover" src="/headerimg.svg" alt="backgroundImage" />
      </div>
      <div className="myPageContents flex w-full pc:max-w-[1062px] mx-auto ">
        <div className="side_pc  hidden  pc:block pc:relative flex-none  pc:-top-[88px]  pc:w-[300px]  pc:h-[332px]  pc:px-[20px]  pc:pb-20px  pc:max-w-[300px] bg-white border-2 border-[#EEEEEE]  rounded-2xl ">
          <div className="sideInner text-center mb-[20px]">
            <div className="userImg pt-[40px] pb-[18px]">
              <label className="cursor-pointer" htmlFor="file">
                <img
                  className="w-[80px]  h-[80px] mx-auto rounded-full"
                  src={objectURL || '/profiledefault.svg'}
                  alt="userImage"
                />
                <input className="hidden" type="file" id="file" accept="image/jpg, image/jpeg, image/png" onChange={onChangeFile} />
              </label>

            </div>
            <div className="flex justify-center userName font-pre font-semibold text-[22px] leading-[25px] pb-[18px]">
              {currentUser && nameModify ? (
                <div className=" ">
                  {err === true && (<span className="font-pre font-normal text-[12px] leading-[13.32px]">{nameMessage}</span>)}
                  <input className="w-[100px] pl-[10px] shadow-lg " type="text" onChange={handleInput} />
                  <button
                    type="button"
                    onClick={onChangeName}
                    value="editName"
                  >
                    <GlobalIcon.Edit />
                  </button>
                </div>
              )
                : (
                  <div>
                    {profileData.username}
                    <button
                      type="button"
                      onClick={() => { setNameModify(!nameModify); }}
                      value="editName"
                    >
                      {currentUser && <GlobalIcon.Edit />}
                    </button>
                  </div>
                )}
            </div>
            <div className="userEmail font-pre font-normal  text-[16px] leading-[19px] pb-[18px]  ">
              {profileData.email}
            </div>
            {currentUser && Tab === 'profile'
            && (
            <button
              type="button"
              value="modifyUserInfo"
              onClick={modifyUserInfo}
              className="w-full h-[67px] rounded-[15px] font-pre font-normal text-[16px] leading-[19px] bg-[#6457FA] text-white hover:bg-white hover:text-[#6457FA]  hover:border-2 hover:border-[#6457FA]"
            >
              내 정보 수정하기
            </button>

            )}
            {currentUser && Tab !== 'profile'
            && (
            <button
              type="button"
              value="profile"
              onClick={tabClick}
              className="w-full h-[67px] rounded-[15px] font-pre font-normal text-[16px] leading-[19px] bg-[#cccccc] text-white hover:bg-white hover:text-[#6457FA]  hover:border-2 hover:border-[#6457FA]"
            >
              프로필로 이동
            </button>

            )}

          </div>
        </div>
        <div className="flex flex-col" />
        <div className="contentsArea max-w-full pc:max-w-[736px] basis-full  pl-[32px] ">
          <div>
            <div className="profile_mobile pc:hidden max-w-full relative flex-none -top-[65px] ">
              <label className="cursor-pointer" htmlFor="file">
                <img
                  className="w-[110px]  h-[110px] mx-auto rounded-full"
                  src={profileData.profile_image_url || objectURL || '/profiledefault.svg'}
                  alt="userImage"
                />
                <input
                  className="hidden"
                  type="file"
                  id="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={onChangeFile}
                />
              </label>
              <div className="flex justify-center userName font-pre font-semibold text-[22px] leading-[25px] pb-[18px]">
                {currentUser && nameModify ? (
                  <div className=" ">
                    {err === true && (<span className="font-pre font-normal text-[12px] leading-[13.32px]">{nameMessage}</span>)}
                    <input className="w-[100px] pl-[10px] shadow-lg " type="text" onChange={handleInput} />
                    <button
                      type="button"
                      onClick={onChangeName}
                      value="editName"
                    >
                      <GlobalIcon.Edit />
                    </button>
                  </div>
                )
                  : (
                    <div>
                      {profileData.username}
                      <button
                        type="button"
                        onClick={() => { setNameModify(!nameModify); }}
                        value="editName"
                      >
                        {currentUser && <GlobalIcon.Edit />}
                      </button>
                    </div>
                  )}
              </div>
            </div>
          </div>
          {currentUser && (
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
          )}
          {Tab === 'profile' ? (
            <Profile
              profileData={profileData}
              tagList={newTag}
              currentUser={currentUser}
              modifyState={modifyState}
              setModifyState={setModifyState}
            />
          ) : (
            <Project type={Tab} profileData={profileData} />
          )}
        </div>
      </div>
    </div>
  );
}
