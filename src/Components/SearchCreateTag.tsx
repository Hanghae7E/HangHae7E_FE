/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { SetStateAction } from 'react';

export default function SearchCreateTag({
  tag,
  hashTag,
  setHashTag,
  add,
}:
  {
    tag: string,
    hashTag: Array<string>,
    setHashTag: React.Dispatch<SetStateAction<Array<string>>>,
    add:boolean
  }) {
  const onRemove = (removeTag:string) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setHashTag(hashTag.filter((tags:string) => tags !== removeTag));
  };
  const addHash = () => {
    if (add) {
      if (hashTag.length < 4) {
        if (!hashTag.includes(tag)) {
          setHashTag([...hashTag, tag]);
        }
      }
    } else {
      onRemove(tag);
    }
  };

  return <div onClick={addHash} className="box-border whitespace-nowrap rounded-full text-sm py-1.5 px-3 mx-1 font-semibold bg-tag-bg my-2 cursor-pointer">{tag}</div>;
}
