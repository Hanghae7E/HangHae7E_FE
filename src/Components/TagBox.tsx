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
        return 'bg-designer border-designer';
      case '2':
        return 'bg-developer text-white border-developer';
      case '3':
        return 'bg-pmaster border-pmaster';
      default:
        return 'bg-tag-bg border-tag-bg';
    }
  };
  return (
    <>
      {onClick
        ? (
          <div
            onClick={onClick}
            className={`flex ${selected ? 'bg-white border-developer text-developer' : tagBg(tag)}  
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
          <div className={`${tagBg(tag)} whitespace-nowrap  ${padding} rounded-full ${margin}`}>
            {tags(tag)}
            {isCancled && <p className="pl-[11px]">X</p>}
          </div>
        )}
    </>
  );
}
