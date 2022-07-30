import PositionTag from '../../../DetailPage/presentations/PositionTag';

export default function Member() {
  return (
    <li className="relative flex m-5 items-center">
      <div className="absolute p-[5px] rounded-full bg-green-500 top-0 -left-[6px]" />
      <div className="imgArea mr-2">
        <img alt="신청자이미지" className="w-[44px] h-[44px] rounded-full" src="/profiledefault.svg" />
      </div>
      <div className="flex flex-col">
        <h5 className="w-full font-pre font-bold text-[16px] whitespace-nowrap">닉네임</h5>
        <PositionTag
          position="개발자"
          propsClassname="font font-medium text-[10px] mt-1 rounded-[1px] text-[10px] py-1 px-3 rounded-3xl"
        />
      </div>
    </li>
  );
}
