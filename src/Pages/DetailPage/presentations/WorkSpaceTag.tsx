/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
import cn from 'classnames';

interface Props {
    position: any
    propsClassname: string
}

export default function WorkSpaceTag({
  position,
  propsClassname,
}: Props) {
  return (
    <p className={cn(
      propsClassname,

    )}
    >
      {position}
    </p>
  );
}
