import PositionTag from '../../../DetailPage/presentations/PositionTag';

export default function WorkContent() {
  return (
    <li>
      <div className="flex items-center max-w-[399px] p-[20px] border-[2px] border-[#EEEEEE] rounded-[8px] mt-[24px] ">
        <PositionTag
          position="진행중"
          propsClassname="bg-[#6457FA] max-w-[56px] font-bold text-[12px] text-white rounded-[4px] px-[12px] py-[6px]"
        />
        <p className="mx-[8px] font-bold text-[16px] leading-[19.09px]">1차 와이어 프레임 제작</p>
        <PositionTag
          position="D-6"
          propsClassname="bg-[#333333] max-w-[38px] font-bold text-[12px] text-white rounded-[4px] px-[8px] py-[4px]"
        />
      </div>
    </li>
  );
}
