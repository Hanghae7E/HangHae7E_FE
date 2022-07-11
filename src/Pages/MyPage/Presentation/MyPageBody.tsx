import { useState } from 'react';
import wy from '../Wy.jpg';
import EditIcon from '../EditIcon.png';
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
  const [innerContents, setInnerContents] = useState('project');
  const tabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const val = e.currentTarget.value;
    setInnerContents(val);
  };
  // const reqProjectClick = () => {};
  // const appProjectClick = () => {};
  const modifyUserInfo = () => {};

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
                src={profileData.profile_image_url}
                alt="userImage"
              />
            </div>
            <div className="userName font-pre font-semibold text-[22px] leading-[22px] pb-[18px]">
              {profileData.username}
              <button type="button">
                <img className="w-8 h-8 inline-block" src={EditIcon} alt="userImage" />
              </button>
            </div>
            <div className="userEmail font-pre font-normal  text-[16px] leading-[19px] pb-[18px]  ">
              {profileData.email}
            </div>
            <button
              type="button"
              onClick={modifyUserInfo}
              className="w-full h-[67px] rounded-[15px] font-pre font-normal text-[16px] leading-[19px] bg-[#6457FA] text-white hover:bg-white hover:text-[#6457FA]  hover:border-2 hover:border-[#6457FA]"
            >
              내 정보 수정하기
            </button>
          </div>
        </div>

        <div className="contentsArea max-w-[736px] basis-full  pl-[32px] ">
          <div className="tab w-full flex-none pt-[87px] pb-8 font-pre font-bold text-[28px] leading-[33px]   ">
            <button
              onClick={tabClick}
              value="profile"
              className="pr-8 hover:underline hover:decoration-4"
            >
              프로필
            </button>
            <button
              value="appProject"
              onClick={tabClick}
              className="pr-8 hover:underline hover:decoration-4"
            >
              등록한 프로젝트
            </button>
            <button
              value="reqProject"
              onClick={tabClick}
              className="pr-8 hover:underline hover:decoration-4"
            >
              신청한 프로젝트
            </button>
          </div>
          {innerContents === 'profile' ? (
            <Profile profileData={profileData} tagList={skillTags} />
          ) : (
            <Project />
          )}
        </div>
      </div>
    </div>
  );
}
