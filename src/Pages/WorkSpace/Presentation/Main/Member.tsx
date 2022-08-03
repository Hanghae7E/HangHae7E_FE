import { ITeam } from '../../../../TypeInterface/workType';
import WorkSpaceTag from '../../../DetailPage/presentations/WorkSpaceTag';

export default function Member({
  userInfo,
}:{
  userInfo:ITeam
}) {
  return (
    <li className="relative flex m-5 items-center">
      <div className="absolute p-[5px] rounded-full bg-green-500 top-0 -left-[6px]" />
      <div className="imgArea mr-2">
        <img alt="신청자이미지" className="w-[44px] h-[44px] rounded-full" src="/profiledefault.svg" />
      </div>
      <div className="flex flex-col">
        <h5 className="w-full font-pre font-bold text-[16px] whitespace-nowrap">{userInfo.username}</h5>
        <WorkSpaceTag
          position="개발자"
          propsClassname="bg-[#ffffff] border border-[#333333]  font-medium text-[10px] text-[#333333] py-[4px] rounded-[4px] px-[8px] whitespace-nowrap mt-[4px] "
        />
      </div>
    </li>
  );
}
