/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
import cn from 'classnames';

export enum Color {
    개발자,
    기획자,
    디자이너,
}

const TAG_COLOR: Record<string, string> = {
  [Color.개발자]: 'bg-[#5177FE] text-white',
  [Color.기획자]: 'bg-[#FFC700]',
  [Color.디자이너]: 'bg-[#74EC8B]',
};

interface Props {
    position: any
    propsClassname: string
}

export default function PositionTag({
  position,
  propsClassname,
}: Props) {
  return (
    <p className={cn(
      TAG_COLOR[Color[position]],
      'py-1 px-3 rounded-3xl text-[10px]',
      propsClassname,

    )}
    >
      {position}
    </p>
  );
}
