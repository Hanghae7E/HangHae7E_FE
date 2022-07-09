import Calendar from '../../../Components/SelectOptionCalendar';
import wy from './Wy.jpg';
import user from './User.jpg';
import { Iprofile } from '../../../TypeInterface/profileType';
import TagInput from '../../../Components/TagInput';
import { Itag } from '../../../TypeInterface/tagType';
import CustomCalinder from '../../../Components/CustomCalinder';

export default function Profile({
  profileData,
  tagList,
}: {
  profileData: Iprofile;
  tagList: Array<string>;
}) {
  const selected = profileData.skills;
  const urltitle = profileData.position === '개발자' ? 'Github URL' : 'portfolio URL';
  const placeholderTag = '스킬을 입력 하세요.';
  const [startDate, endDate] = profileData.available_time.split(',');
  return (
    <fieldset>
      <div className="profileComponent flex flex-col  bg-white ">
        <div className="profileTitle flex">
          <h2 className="w-full mt-[7px] text-2xl font-extrabold">
            안녕하세요
            <br />
            {`${profileData.fields[0]} ${profileData.position}, ${profileData.username}입니다.`}
          </h2>
        </div>
        <div className="profileSkil w-full mt-4">
          <div className="profile-inner Info flex mt-2">
            <h2 className="font-bold w-1/2">직군</h2>
            <input className="w-1/2" type="text" placeholder="직군" value={profileData.position} />
          </div>
          <div className="profile-inner info flex mt-2">
            <h2 className="font-bold w-1/2">직무</h2>
            <input className="w-1/2 " type="text" placeholder="직무" value={profileData.fields} />
          </div>
          <div className="profile-inner info Infoflex mt-2">
            <h2 className="font-bold w-1/2">경력</h2>
            <input
              className="w-1/2 "
              type="text"
              placeholder="경력"
              value={profileData.career_period}
            />
          </div>
          <div className="profile-inner info flex flex-col w-full mt-2">
            <TagInput tagData={tagList} selected={selected} placeholder={placeholderTag} />
          </div>
          <div className="profile-inner info flex mt-2 ">
            <h2 className="font-bold w-1/2">스킬</h2>
            <input className="w-1/2 " type="text" placeholder="스킬" value={profileData.skills} />
          </div>
          <div className="profile-inner info flex-col mt-2">
            <h2 className="font-bold w-full">{urltitle}</h2>
            <input
              className="w-full "
              type="url"
              placeholder="url"
              value={profileData.portfolio_url}
            />
          </div>
        </div>
        <div className="profileContact w-full mt-4">
          <div className="profile-inner info flex-col mt-2">
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
              value={profileData.phone_number}
            />
          </div>
        </div>
        <div className="profileCo">
          <div className="profile-inner infoCo flex mt-4">
            <h2 className="w-full text-xl font-extrabold">협업사항</h2>
          </div>
          <div className="profile-inner infoCo flex mt-2">
            <h2 className="font-bold w-1/4 ">거주지역</h2>
            <input
              className="w-1/4 text-center"
              type="text"
              placeholder="서울"
              value={profileData.residence}
            />
            <h2 className="font-bold w-1/4 ">미팅 방식</h2>
            <div className="flex items-center mr-4">
              <input
                id="inline-radio"
                type="radio"
                value="대면"
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                대면
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-2-radio"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                비대면
              </label>
            </div>
          </div>
          <div className="profile-inner infoCo flex flex-col mt-2">
            <h2 className="font-bold w-full ">작업가능 기간</h2>
            <CustomCalinder start={startDate} end={endDate} isRange />
          </div>
          <div className="profile-inner infoCo flex  mt-2">
            <h2 className="font-bold w-full ">작업가능 시간</h2>
            <input className="w-full text-center" type="text" placeholder="주 4일 /퇴근후" />
          </div>
        </div>
      </div>
    </fieldset>
  );
}
