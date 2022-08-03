/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PositionTag from '../../../DetailPage/presentations/PositionTag';
import WorkSpaceTag from '../../../DetailPage/presentations/WorkSpaceTag';

export default function WorkContent({
  openModal,
}:
{
  openModal: ({ data }: {
    data: string;
}) => () => void
}) {
  return (
    <li onClick={openModal({ data: 'test' })} className=" cursor-pointer">
      <div className="flex items-center max-w-[399px] p-[20px] border-[2px] border-[#EEEEEE] rounded-[8px] mt-[24px] min-w-fit">
        <PositionTag
          position="진행중"
          propsClassname="bg-[#6457FA] max-w-[56px] font-bold text-[12px] text-white rounded-[4px] px-[12px] py-[6px] whitespace-nowrap"
        />
        <div className="flex-1">
          <div className="flex items-center">
            <p className="mx-[8px] font-bold text-[16px] leading-[19.09px] max-w-[176px] overflow-hidden text-ellipsis whitespace-nowrap">1차 와이어 프레임 제작</p>
            <WorkSpaceTag
              position="개발자"
              propsClassname="bg-[#ffffff] border border-[#333333]  font-medium text-[10px] text-[#333333] rounded-[4px] px-[8px] py-[4px] whitespace-nowrap mx-[8px] leading-[11.93px}"
            />
            <WorkSpaceTag
              position="D-6"
              propsClassname="bg-[#333333]  font-bold text-[12px] text-white rounded-[4px] px-[8px] py-[4px] whitespace-nowrap"
            />
          </div>
          <p className="mx-[8px] font-normal text-[12px] leading-[14.32px] mt-[4px]">1차 와이어 프레임 제작</p>

        </div>

      </div>
    </li>
  );
}
