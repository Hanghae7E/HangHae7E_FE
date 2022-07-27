/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Portal } from '@headlessui/react';
import { IProfileFormData, IsideProfile } from '../../../TypeInterface/userType';
import { Itag } from '../../../TypeInterface/tagType';
import Profile from './Profile';
import userAPi from '../../../Api/userAPi';
import GlobalIcon from '../../../Components/GlobalIcon';
import TextModal from '../../../Components/TextModal';
import ApplyProject from './ApplyProject';
import RegisterProject from './RegisterProject';

export default function MyPageBody({ profileData, tagList, currentUser }:
{
  profileData: IProfileFormData;
  tagList: Array<Itag>;
  currentUser:boolean;
  }) {
  const [Tab, setTab] = useState('profile');
  const [objectURL, setObjectURL] = useState<string>(profileData.profile_image_url);
  const [nameModify, setNameModify] = useState(false);
  const [modifyState, setModifyState] = useState(false);
  const [newName, setNewName] = useState(profileData.username);
  const [nameMessage, setNameMessage] = useState('');
  const [err, setErr] = useState(false);
  const [updateErrMessage, setUpdateErrMessage] = useState('');
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  const profileChangeButtonDefault = 'w-full h-[67px] rounded-[15px] font-pre font-normal text-[16px] leading-[19px] bg-[#EEEEEE] text-[#CCCCCC]';
  const profileChangeButtonActive = 'w-full h-[67px] rounded-[15px] font-pre font-normal text-[16px] leading-[19px] bg-white border-2 text-[#6457FA] border-[#6457FA]';

  const queryClient = useQueryClient();

  const UpdateSideProfile = useMutation(
    (data: IsideProfile) => userAPi.setSideProfile(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('get_userInfo');
        queryClient.invalidateQueries('get_profile_info');
      },
      onError: () => {
        setUpdateErrMessage('에러가 발생했습니다.');
      },
    },
  );

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const files = e.target.files[0];
    const SideProfile:IsideProfile = {
      file: files, username: newName, skills: profileData.skills, fields: profileData.fields,
    };

    setObjectURL(URL.createObjectURL(files));
    UpdateSideProfile.mutate(SideProfile, {
      onSuccess: () => {
        URL.revokeObjectURL(objectURL);
      },
      onError: () => {
        setModalOpen(true);
        setUpdateErrMessage('프로필 사진을 다시 변경해 주세요.');
      },
    });
  };

  const onChangeName = () => {
    const SideProfile:IsideProfile = {
      username: newName,
      skills: profileData.skills,
      fields: profileData.fields,
    };
    if (nameModify) {
      UpdateSideProfile.mutate(SideProfile, {
        onError: () => {
          setModalOpen(true);
          setUpdateErrMessage('닉네임을 다시 변경해 주세요.');
        },
      });
    }
    setNameModify(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 2) {
      setErr(true);
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
      setNewName(e.target.value);
    } else if (e.target.value.length > 5) {
      setErr(true);
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
    } else {
      setNewName(e.target.value);
    }
  };

  const modifyUserInfo = () => {
    setModifyState(!modifyState);
  };

  const tabClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const val = e.currentTarget.value;
    setTab(val);
    setNameModify(false);
  };

  const tabDefatult = 'pr-8 hover:text-black text-[#CCCCCC]';
  const tabClicked = 'pr-8 underline underline-offset-8 text-black';
  const tabCss = tabDefatult;
  return (
    <div className="max-w-full mx-auto min-h-screen">
      { modalOpen && updateErrMessage && (
        <Portal>
          <TextModal messages={['프로필을 변경할 수 없습니다.', updateErrMessage]} modalClose={setModalOpen} />
        </Portal>
      )}
      <div className="myPageBanner  bg-cover bg-center">
        <img className="w-full h-[91px] pc:h-[240px] object-cover" src="/myPageBackground.svg" alt="backgroundImage" />
      </div>
      <div className="myPageContents flex w-full pc:max-w-[1062px] mx-auto ">
        <div className="side_pc  hidden  pc:block pc:relative flex-none  pc:-top-[90px]  pc:w-[300px]  pc:h-[332px]  pc:px-[20px]  pc:pb-20px  pc:max-w-[300px] bg-white border-2 border-[#EEEEEE]  rounded-2xl ">
          <div className="sideInner text-center mb-[20px]">
            <div className="userImg pt-[40px] pb-[18px]">
              <label className="cursor-pointer relative " htmlFor="file">
                <img
                  className="w-[80px]  h-[80px] mx-auto rounded-full "
                  src={objectURL || '/profiledefault.svg'}
                  alt="userImage"
                />
                <div className="absolute bottom-0 left-2 ">
                  <GlobalIcon.Camera />
                </div>
                <input className="hidden" type="file" id="file" accept="image/jpg, image/jpeg, image/png" onChange={onChangeFile} />
              </label>

            </div>
            <div className="flex justify-center userName font-pre font-semibold text-[22px] leading-[25px] pb-[18px]">
              {currentUser && nameModify ? (
                <div className=" ">
                  {err === true && (<span className="font-pre font-normal text-[12px] leading-[13.32px]">{nameMessage}</span>)}
                  <input className="w-[100px] pl-[10px] shadow-lg " type="text" onChange={handleInput} value={newName} />
                  <button
                    type="button"
                    onClick={onChangeName}
                    value="editName"
                    className="ml-[4px]"
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
                      className="ml-[4px]"
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
              className={!modifyState ? profileChangeButtonActive : profileChangeButtonDefault}
              disabled={modifyState}
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
              className="w-full h-[67px] rounded-[15px] font-pre font-normal text-[16px] leading-[19px] bg-[#EEEEEE] text-[#CCCCCC] hover:bg-white hover:text-[#6457FA]  hover:border-2 hover:border-[#6457FA]"
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
                    <input className="w-[100px] pl-[10px] shadow-lg " type="text" onChange={handleInput} value={newName} />
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
          <div className="tab w-full pt-[87px] pb-8 font-pre font-bold text-[28px] leading-[33px] text-[#CCCCCC  ] visited:text-black">
            <button
              type="button"
              onClick={tabClick}
              value="profile"
              className={`${Tab === 'profile' ? tabClicked : tabDefatult}`}
            >
              프로필
            </button>
            <button
              type="button"
              value="registeredPosts"
              onClick={tabClick}
              className={`${Tab === 'registeredPosts' ? tabClicked : tabDefatult}`}
            >
              등록한 프로젝트
            </button>
            <button
              type="button"
              value="applyPosts"
              onClick={tabClick}
              className={`${Tab === 'applyPosts' ? tabClicked : tabDefatult}`}
            >
              신청한 프로젝트
            </button>
          </div>
          )}
          {Tab === 'profile' && (
            <Profile
              profileData={profileData}
              tagList={tagList}
              currentUser={currentUser}
              modifyState={modifyState}
              setModifyState={setModifyState}
            />
          )}
          {Tab === 'applyPosts' && (
            <ApplyProject projects={profileData.applyPosts} />
          )}
          {Tab === 'registeredPosts' && (
          <RegisterProject projects={profileData.registeredPosts} />
          )}
        </div>
      </div>
    </div>
  );
}
