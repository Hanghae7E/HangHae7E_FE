/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
export default function TagBox({
  tag,
  padding,
  margin,
  onClick,
  isCancled,
  hover,
  selected,
}: {
    tag: string,
    padding?:string,
    margin?: string,
    isCancled?: boolean,
    onClick?: () => void,
    hover?: string,
    selected?:boolean
  }) {
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
  const tagBg = (name:string) => {
    switch (name) {
      case '1':
        return 'bg-[#74EC8B] border-[#74EC8B]';
      case '2':
        return 'bg-[#5177FE] text-white border-[#5177FE]';
      case '3':
        return 'bg-[#FFC700] border-[#FFC700]';
      default:
        return 'bg-[#E8EDF4] border-[#E8EDF4]';
    }
  };
  return (
    <>
      {onClick
        ? (
          <div
            onClick={onClick}
            className={`flex ${selected ? 'bg-white border-[#6457FA] text-[#6457FA]' : tagBg(tag)}  
            border box-border
            ${selected ? 'bg-white' : tagBg(tag)}
            whitespace-nowrap
            ${padding}
            rounded-full
            ${margin}
            ${hover || ''}
            cursor-pointer`}
          >
            {tags(tag)}
            {isCancled && <p className="pl-[11px]">X</p>}
          </div>
        )
        : (
          <div className={`${tagBg(tag)} whitespace-nowrap ${padding} rounded-full ${margin}`}>
            {tags(tag)}
            {isCancled && <p className="pl-[11px]">X</p>}
          </div>
        )}
    </>
  );
}
