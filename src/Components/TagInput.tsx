/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface tagOptionI {
  tags: Array<string>
  selected: Array<string>|null;
  placeholder: string;
}
// TODO: 아토믹/ 스타일링
// style?: {
//   tag?: {
//     width?: number;
//     height?: number;
//     px?: number;
//     py?: number;
//     pl?: number;
//     mr?: number;
//     mt?: number;
//     backgroundColor?: string;
//     borderPx?: number;
//     borderColor?: string;
//     rounded?: number;
//     textColor?: string;
//     textSize?: number;
//     lineHeight?: number;
//   };
//   recommendsTag?: {
//     backgroundColor?: string;
//     textColor?: string;
//   };
// };
export default function TagInput(tagOption: tagOptionI) {
  const tagRec = 'bg-[#6457FA] rounded-[24px] text-white px-[12px] py-[6px] mr-[8px] mb-[8px] font-pre text-[14px] leading-[16.9x]';
  const tagSelct = 'bg-[#EEEEE]  border-2 border-[#6457FA] rounded-[24px] text-black px-[12px] py-[6px] mr-[8px] mt-[8px] font-pre text-[14px] leading-[16.9x] ';

  const { tags, selected, placeholder } = tagOption;
  const [tagList, setTagList] = useState<string[]>(tags);
  const [myTags, setMyTags] = useState<string[]>([]);
  const [recommends, setRecommends] = useState<string[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (selected) {
      const all = tags.concat(selected);
      const newData = all.filter((item) => !tags.includes(item) || !selected.includes(item));
      setTagList(newData);
      // setRecommends(newData);
      setMyTags(selected);
    } else {
      setTagList(tags);
      setRecommends([]);
    }
  }, []);

  const recommendsTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);

    // console.log(tagList);
    let filterData = tagList.filter(

      (tag: string) => tag.toString().toLowerCase().includes(userInput),
    );
    if (e.target.value.length === 0) {
      filterData = [];
    }
    setRecommends(filterData);
  };
  const selectedTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedValue = e.currentTarget.value;
    const MytagCopy = [...myTags];
    MytagCopy.push(clickedValue);

    MytagCopy.filter((tag) => tag[1] !== clickedValue);

    const newTagList = tagList.filter((tag: string) => tag[1] !== clickedValue);
    setTagList(newTagList);
    setMyTags(MytagCopy);
    setRecommends([]);
    setInput('');
  };
  const selectedTagRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedValue = e.currentTarget.value;
    const tagCopy = [...myTags];
    tagCopy.push();
    const newMyTags = tagCopy.filter((tag) => tag !== clickedValue);
    setMyTags(newMyTags);
    const tagListCopy = [...tagList];
    tagListCopy.push(clickedValue);
    setTagList(tagListCopy);
  };

  const methods = useFormContext();
  return (
    <div>
      <input type="text" value={myTags} className="backbroud-white" {...methods.register('test')} />
      <div className="prev w-full ">
        <div className="SkilList flex flex-wrap ">
          {recommends.map((tag) => (
            <button className={tagRec} type="button" id={tag[0]} value={tag[1]} key={tag[0]} onClick={selectedTag}>{tag[1]}</button>
          ))}
        </div>
      </div>
      <div className="searching">
        <input
          type="text"
          className="h-[50px] w-full pl-[10px] border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px] text-[black]"
          placeholder={placeholder}
          onChange={recommendsTag}
          defaultValue={input}
        />
        <div className="selectSkils mb-3">
          {myTags.map((tag) => (
            <button
              className={tagSelct}
              type="button"
              key={tag}
              value={tag}
              onClick={selectedTagRemove}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
