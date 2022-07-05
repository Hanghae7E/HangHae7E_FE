import Calendar from '../../../Components/Calendar';
import wy from './Wy.jpg';
import user from './User.jpg';
import { Iprofile } from '../../../TypeInterface/profileType';

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
    <div className="projectComponent flex flex-col pl-2 bg-white ">
      <div className="title flex pl-2 bg-slate-300 rounded-md">
        <span className="w-1/4 font-bold text-slate-800 ">진행 상황</span>
        <span className="w-1/4 font-bold text-slate-800 ">프로젝트 제목</span>
        <span className="w-1/4 font-bold text-slate-800 ">모집 인원</span>
        <span className="w-1/4 font-bold text-slate-800 ">프로젝트 기간</span>
      </div>
      <div className="projects flex flex-col mt-2 pl-2 bg-slate-400 ">
        <div className="project flex">
          <div className="w-1/4 text-sm ">
            <span className="bg-slate-700 text-white rounded-md leading-relaxed align-middle">
              모집중
            </span>
          </div>
          <span className="w-1/4 text-sm leading-relaxed align-middle">모집합니다.</span>
          <span className="w-1/4 text-smleading-relaxed align-middle">0/8</span>
          <span className="w-1/4 text-sm leading-relaxed align-middle">2022/07/03-2022/07/05</span>
        </div>
      </div>
    </div>
  );
}
