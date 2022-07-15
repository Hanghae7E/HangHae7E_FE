import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Iprofile, IProfileFormData, auth } from '../../../TypeInterface/userType';
import wy from '../Wy.jpg';
import user from '../User.jpg';
import EditIcon from '../EditIcon.png';
import Profile from './Profile';
import Project from './Project';
import userAPi from '../../../Api/userAPi';

export default function MyPageBody({ profileData, tagList, Auth }:
{
  profileData: Iprofile;
  tagList: Array<string>;
  Auth:auth;
}) {
  const [imgBase64, setImgBase64] = useState<string>();
  const [innerContents, setInnerContents] = useState('profile');
  const [modify, setModify] = useState(true);
  const tabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const val = e.currentTarget.value;
    setInnerContents(val);
  };
  const modifyUserInfo = () => {
    console.log('클릭');
  };
  const editUserProfile = () => {
    // 프로필 활성화
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    const files = e.target.files[0];
    if (files) {
      reader.readAsDataURL(files);
    }
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
              <img
                className="w-[80px]  h-[80px] mx-auto rounded-full"
                src={user}
                alt="userImage"
              />
              <form encType="multipart/form-data">
                <input type="file" id="file" accept="image/jpg, image/jpeg, image/png" />
              </form>

            </div>
            <div className="userName font-pre font-semibold text-[22px] leading-[22px] pb-[18px]">
              {profileData.username}
              <button type="button" onClick={editUserProfile} value="modifyUserInfo">
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
              value="appProject"
              onClick={tabClick}
              className="pr-8 hover:underline hover:decoration-4"
            >
              등록한 프로젝트
            </button>
            <button
              type="button"
              defaultValue="reqProject"
              onClick={tabClick}
              className="pr-8 hover:underline hover:decoration-4"
            >
              신청한 프로젝트
            </button>
          </div>
          {innerContents === 'profile' ? (
            <Profile profileData={profileData} tagList={tagList} Auth={Auth} />
          ) : (
            <Project />
          )}
        </div>
      </div>
    </div>
  );
}
