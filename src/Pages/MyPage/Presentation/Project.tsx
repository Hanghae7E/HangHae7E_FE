import { IapplyPosts, IRegisteredPosts } from '../../../TypeInterface/postType';
import { IProfileFormData } from '../../../TypeInterface/userType';

export default function Project({ profileData, type }:
  {profileData: IProfileFormData, type:string}) {
  //   대기중:0,수락:1,거절:2
  console.log('111', profileData.applyPosts, profileData.registeredPosts);
  return (
    <div className="projectComponent flex flex-col  bg-white">
      <div className="title flex max-w-[736px] h-[50px] pl-2 items-center
       border-2 border-[#EEEEEE] rounded-md"
      >
        <span className="w-auto mx-auto font-pre font-bold text-[16px] leading-[19px] ">
          진행 상황
        </span>
        <span className="w-1/4  font-pre font-bold text-[16px] leading-[19px]">프로젝트 제목</span>
        <span className="w-1/4  font-pre font-bold text-[16px] leading-[19px] ">모집 인원</span>
        <span className="w-1/4  font-pre font-bold text-[16px] leading-[19px]">프로젝트 기간</span>
      </div>
      {type === 'registeredPosts' ? (
        profileData.registeredPosts.map((item:IRegisteredPosts) => (
          <div
            className="projectsInner flex max-w-[736px] flex-1 h-[50px] pl-2 mt-4 items-center
        border-2 border-[#EEEEEE] rounded-md"
            key={item.id}
          >
            <span className="w-auto mx-auto rounded-[24px] font-pre font-bold text-[16px]
        leading-[19px]  bg-[#EEEEEE] px-4 py-1"
            >
              {item.status}
            </span>
            <span className="w-1/4 font-pre font-bold text-[16px] leading-[19px]">
              {item.title}
            </span>
            <span className="w-1/4 font-pre font-bold text-[16px] leading-[19px] ">{item.capacity}</span>
            <span className="w-1/4 font-pre font-bold text-[16px] leading-[19px] ">
              {`${item.project_start_time}-${item.project_end_time}`}
            </span>
          </div>
        )))
        : (profileData.applyPosts.map((item:IapplyPosts) => (
          <div
            className="projectsInner flex max-w-[736px] flex-1 h-[50px] pl-2 mt-4 items-center
      border-2 border-[#EEEEEE] rounded-md"
            key={item.id}
          >
            <span className="w-auto mx-auto rounded-[24px] font-pre font-bold text-[16px]
      leading-[19px]  bg-[#EEEEEE] px-4 py-1"
            >
              {item.status}
            </span>
            <span className="w-1/4 font-pre font-bold text-[16px] leading-[19px]">
              {item.title}
            </span>
            <span className="w-1/4 font-pre font-bold text-[16px] leading-[19px] ">{item.capacity}</span>
            <span className="w-1/4 font-pre font-bold text-[16px] leading-[19px] ">
              {`${item.project_start_time}-${item.project_end_time}`}
            </span>
          </div>
        )))}

    </div>
  );
}
