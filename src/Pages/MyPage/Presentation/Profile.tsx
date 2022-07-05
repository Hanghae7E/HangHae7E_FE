import Calendar from '../../../Components/Calendar';
import wy from './Wy.jpg';
import user from './User.jpg';
import { Iprofile } from '../../../TypeInterface/profileType';

export default function Profile({ profileData }: { profileData: Iprofile }) {
  
  const urltitle = profileData.jobGroup === '개발자' ? 'Github URL' : 'portfolio URL';
  return (
    <div className="profileComponent flex flex-col pl-2 bg-white ">
      <div className="title  flex">
        <h2 className="w-full  text-2xl font-extrabold">
          안녕하세요
          <br />
          {`${profileData.jobPosition} ${profileData.jobGroup}, ${profileData.username}입니다.`}
        </h2>
      </div>
      <div className="w-full mt-4">
        <div className="profile-inner flex mt-2">
          <h2 className="font-bold w-1/2">직군</h2>
          <input className="w-1/2" type="text" placeholder="직군" value={profileData.jobGroup} />
        </div>
        <div className="profile-inner flex mt-2">
          <h2 className="font-bold w-1/2">직무</h2>
          <input
            className="w-1/2 "
            type="text"
            placeholder="직무"
            value={profileData.jobPosition}
          />
        </div>
        <div className="profile-inner flex mt-2">
          <h2 className="font-bold w-1/2">경력</h2>
          <input
            className="w-1/2 "
            type="text"
            placeholder="경력"
            value={profileData.workExperience}
          />
        </div>
        <div className="profile-inner flex mt-2 ">
          <h2 className="font-bold w-1/2">스킬</h2>
          <input className="w-1/2 " type="text" placeholder="스킬" value={profileData.skil} />
        </div>
        <div className="profile-inner flex-col mt-2">
          <h2 className="font-bold w-full">{urltitle}</h2>
          <input className="w-full " type="url" placeholder="url" value={profileData.url} />
        </div>
        <div className="profile-inner flex-col mt-2">
          <h2 className="font-bold w-full">연락처</h2>
          <input
            className="w-full text-left"
            type="text"
            placeholder="이메일"
            value={profileData.email}
          />
          <input
            className="w-full text-left"
            type="text"
            placeholder="핸드폰"
            value={profileData.phoneNumber}
          />
          <input
            className="w-full text-left"
            type="text"
            placeholder="인스타"
            value={profileData.instagramId}
          />
        </div>
        <div className="profile-inner flex mt-4">
          <h2 className="w-full text-xl font-extrabold">협업사항</h2>
        </div>
        <div className="profile-inner flex mt-2">
          <h2 className="font-bold w-1/4 ">거주지역</h2>
          <input
            className="w-1/4 text-center"
            type="text"
            placeholder="서울"
            value={profileData.residence}
          />
          <h2 className="font-bold w-1/4 ">미팅 방식</h2>
          <input
            className="w-1/4 text-center"
            type="text"
            placeholder="대면/비대면/상관없음"
            value={profileData.availbility[0]}
          />
        </div>
        <div className="profile-inner flex flex-col mt-2">
          <h2 className="font-bold w-full ">작업가능 기간</h2>
          <Calendar start="2022-07-01" end="2022-07-02" isRange />
        </div>
        <div className="profile-inner flex  mt-2">
          <h2 className="font-bold w-full ">작업가능 시간</h2>
          <input className="w-full text-center" type="text" placeholder="주 4일 /퇴근후" />
        </div>
      </div>
    </div>
  );
}
