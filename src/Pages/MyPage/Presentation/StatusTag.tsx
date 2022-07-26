/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
import cn from 'classnames';

export enum Color {
    모집중,
    마감,
    진행중,
    지원완료,
    불합격,
    합격
}

const TAG_COLOR: Record<string, string> = {
  [Color.합격]: 'bg-[#6457FA] text-white',
  [Color.진행중]: 'bg-[#6457FA] text-white',
  [Color.지원완료]: 'bg-[#2F363E] text-white ',
  [Color.모집중]: 'bg-[#2F363E] text-white',
  [Color.마감]: 'bg-[#F0F0F0] text-black',
  [Color.진행중]: 'bg-[#F0F0F0] text-black',
};

interface Props {
    status: any
    propsClassname: string
}

export default function StatusTag({
  status,
  propsClassname,
}: Props) {
  return (
    <p className={cn(
      TAG_COLOR[Color[status]],
      propsClassname,
      'py-2 px-3 pre font-bold rounded-lg text-base items-center justify-center flex',
    )}
    >
      {status}
    </p>
  );
}
