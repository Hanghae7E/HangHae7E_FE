/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
export default function TagBox({
  tag,
  px,
  py,
  mb,
  mx,
  onClick,
  text,
}: {
    tag: string,
    px: number,
    py: number,
    text: number,
    mb?: number,
    mx?: number,
    onClick?: () => void
  }) {
  const position = (pos: string) => {
    switch (pos) {
      case '디자이너':
        return `bg-designer whitespace-nowrap text-[${text}px] px-[${px}px] py-[${py}px] rounded-full`;
      case '개발자':
        return `bg-developer whitespace-nowrap text-white text-[${text}px] px-[${px}px] py-[${py}px] rounded-full`;
      case '기획자':
        return `bg-pmaster whitespace-nowrap text-[${text}px] px-[${px}px] py-[${py}px] rounded-full`;
      default:
        return `bg-tag-bg whitespace-nowrap text-[${text}px] px-[${px}px] py-[${py}px] rounded-full`;
    }
  };
  const tags = (name:string) => {
    switch (name) {
      case '1':
        return '디자이너';
      case '2':
        return '개발자';
      case '3':
        return '기획자';
      default:
        return name;
    }
  };
  return (
    <div>
      {
    onClick
      ? (
        <div
          onClick={onClick}
          className={`${position(tag)} mx-[${mx}px] my-auto cursor-pointer`}
        >
          {' '}
          { tags(tag) }
        </div>
      )
      : <div className={`${position(tag)} mx-[${mx}px] mb-[${mb}px]`}>{tags(tag)}</div>
      }
    </div>
  );
}
