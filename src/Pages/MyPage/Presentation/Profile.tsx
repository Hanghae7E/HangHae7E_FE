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
  const urltitle = profileData.position === '개발자' ? 'Git' : '링크';
  const placeholderTag = '스킬을 입력 하세요.';
  const [startDate, endDate] = profileData.available_time.split(',');
  const [workDay, IncludWeekend] = profileData.available_period.split(',');

  return (
    <fieldset>
      <div className="profile max-w-[736px] pl-[10px] pb-[63px] border-2 border-[#EEEEEE] rounded-2xl">
        <h2 className="prorileTitle pt-[40px] font-pre font-bold text-[28px] leading-[33px] ">
          안녕하세요
          <br />
          {`${profileData.fields[0]} ${profileData.position}, ${profileData.username}입니다.`}
        </h2>
        <hr className="mt-[40px] mr-[64px]  border-1 border-[#CCCCCC]" />
        <div className="flex pt-[40px]">
          <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[21px]">
            직군
          </h2>
          <input className="" type="text" placeholder="직군" value={profileData.position} />
        </div>
        <div className="flex pt-[28px]">
          <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[21px]">
            직무
          </h2>
          <input className="" type="text" placeholder="직무" value={profileData.fields} />
        </div>
        <div className="flex pt-[28px]">
          <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[21px]">
            경력
          </h2>
          <input className="" type="text" placeholder="경력" value={profileData.career_period} />
        </div>
        <div className="flex pt-[28px] mr-[64px]">
          <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[50px]">
            스킬
          </h2>
          <TagInput tagData={tagList} selected={selected} placeholder={placeholderTag} />
          {/* <input
            className="h-[50px] w-full  mr-[64px] border-2
            border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] 
            leading-[21px] text-[#CCCCCC]"
            type="text"
            placeholder="보유 스킬을 검색해 주세요"
            value={profileData.fields}
          /> */}
        </div>
        <div className="flex pt-[28px]">
          <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[50px]">
            {urltitle}
          </h2>
          <input
            className="h-[50px] w-full mr-[64px] pl-[10px] border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px] text-[#CCCCCC]"
            type="text"
            placeholder="https://.."
            value={profileData.portfolio_url}
          />
        </div>
        <div className="flex pl-[60px] pt-[12px]">
          <text className="w-full font-pre font-normal text-[12px] leading-[14.32px]">
            깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 본인을 보여줄 수 있는 링크를
            추가해주세요.
          </text>
        </div>
        <hr className="mt-[40px] mr-[64px]  border-1 border-[#CCCCCC]" />
        <div className="flex flex-col pt-[40px] mr-[64px]">
          <h2 className="font-pre font-bold text-[24px] leading-[29px]">연락처</h2>
          <input
            className="w-full h-[50px] mt-[20px] pl-[20px] border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px] text-[#CCCCCC]"
            type="text"
            placeholder="이메일"
            value={profileData.email}
          />
          <input
            className="w-full h-[50px] mt-[20px] pl-[20px] border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px] text-[#CCCCCC]"
            type="text"
            placeholder="연락처"
            value={profileData.phone_number}
          />
        </div>
        <hr className="mt-[40px] mr-[64px]  border-1 border-[#CCCCCC]" />
        <div className="flex pt-[40px]">
          <h2 className="flex-none w-full font-pre font-bold text-[24px] leading-[29px]">
            협업 사항
          </h2>
        </div>
        <div className="flex pt-[40px]">
          <h2 className="min-w-[122px] pr-[20px] font-pre font-bold text-[18px] leading-[21px]">
            거주지역
          </h2>
          <input className="" type="text" placeholder="거주지" value={profileData.residence} />
        </div>
        <div className="flex pt-[40px]">
          <h2 className="min-w-[122px] pr-[20px] font-pre font-bold text-[18px] leading-[21px]">
            미팅방식
          </h2>
          <label htmlFor="meeting"></label>
          <select id="meeting" className="border-2 border-[#EEEEEE] rounded-md">
            <option value=""> 선호하는 미팅 방식 </option>
            <option selected={profileData.face_to_face} value="true">
              대면
            </option>
            <option selected={profileData.face_to_face} value="false">
              비대면
            </option>
          </select>
        </div>
        <div className="flex pt-[40px]">
          <h2 className="min-w-[102px] pr-[20px] font-pre font-bold text-[18px] leading-[21px]">
            작업 가능 기간
          </h2>
          <CustomCalinder start={startDate} end={endDate} isRange />
        </div>
        <div className="flex pt-[40px]">
          <h2 className="min-w-[102px] pr-[20px] font-pre font-bold text-[18px] leading-[21px]">
            작업 가능 시간
          </h2>
          <select id="workDay" className="border-2 border-[#EEEEEE] rounded-md  ">
            <option value="">작업 가능 시간</option>
            <option selected={workDay === '주 1일'} value="주 1일">
              주 1일
            </option>
            <option selected={workDay === '주 2일'} value="주 2일">
              주 2일
            </option>
            <option selected={workDay === '주 3일'} value="주 3일">
              주 3일
            </option>
            <option selected={workDay === '주 4일'} value="주 4일">
              주 4일
            </option>
            <option selected={workDay === '주 5일'} value="주 5일">
              주 5일
            </option>
          </select>
          <select id="workforWeek" className="border-2 border-[#EEEEEE] rounded-md  ">
            <option value="">주말 작업 여부</option>
            <option selected={IncludWeekend === '주말 포함'} value="주말 포함">
              주말 포함
            </option>
            <option selected={IncludWeekend === '주말 제외'} value="주말 제외">
              주말 제외
            </option>
          </select>
        </div>
      </div>
    </fieldset>
  );
}
