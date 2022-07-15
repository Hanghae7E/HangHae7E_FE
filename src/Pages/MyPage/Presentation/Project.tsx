import wy from './Wy.jpg';
import user from './User.jpg';

export default function Project() {
  //   대기중:0,수락:1,거절:2
  type bgOption = {
    [key: number]: string;
  };
  const projectState: bgOption = {
    0: 'bg-amber-200 rounded-md leading-relaxed align-middle',
    1: 'bg-lime-600 rounded-md leading-relaxed align-middle',
    2: 'bg-slate-700 rounded-md leading-relaxed align-middle',
  };
  return (
    <div className="projectComponent flex flex-col  bg-white">
      <div className="title flex max-w-[736px] h-[50px] pl-2 items-center border-2 border-[#EEEEEE] rounded-md">
        <span className="w-auto mx-auto font-pre font-bold text-[16px] leading-[19px] ">
          진행 상황
        </span>
        <span className="w-1/4  font-pre font-bold text-[16px] leading-[19px]">프로젝트 제목</span>
        <span className="w-1/4  font-pre font-bold text-[16px] leading-[19px] ">모집 인원</span>
        <span className="w-1/4  font-pre font-bold text-[16px] leading-[19px]">프로젝트 기간</span>
      </div>
      <div className="projectsInner flex max-w-[736px] flex-1 h-[50px] pl-2 mt-4 items-center border-2 border-[#EEEEEE] rounded-md">
        <span className="w-auto mx-auto rounded-[24px] font-pre font-bold text-[16px] leading-[19px]  bg-[#EEEEEE] px-4 py-1">
          모집중
        </span>
        <span className="w-1/4 font-pre font-bold text-[16px] leading-[19px]">모집합니다.</span>
        <span className="w-1/4 font-pre font-bold text-[16px] leading-[19px] ">0/8</span>
        <span className="w-1/4 font-pre font-bold text-[16px] leading-[19px] ">
          2022/07/03-2022/07/05
        </span>
      </div>
    </div>
  );
}
