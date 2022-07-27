/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
import React, { SetStateAction, useEffect, useState } from 'react';

interface tagOptionI {
  tags: string[];
  selected: Array<string>|null;
  placeholder: string;
  setSelected:React.Dispatch<SetStateAction<string[]>>;
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

  const {
    tags, selected, placeholder, setSelected,
  } = tagOption;
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
    }
  }, []);

  const recommendsTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);

    let filterData = tagList.filter((tag) => tag.toLowerCase().includes(userInput));
    if (e.target.value.length === 0) {
      filterData = [];
    }
    setRecommends(filterData);
  };
  const selectedTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedValue = e.currentTarget.value;
    const MytagCopy = [...myTags];
    MytagCopy.push(clickedValue);

    MytagCopy.filter((tag) => tag !== clickedValue);

    const newTagList = tagList.filter((tag: string) => tag !== clickedValue);
    setTagList(newTagList);
    setMyTags(MytagCopy);
    setRecommends([]);
    setInput('');
    setSelected(MytagCopy);
  };
  const selectedTagRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedValue = e.currentTarget.value;
    const tagCopy = [...myTags];
    const newMyTags = tagCopy.filter((tag) => tag !== clickedValue);
    setMyTags(newMyTags);
    const tagListCopy = [...tagList];
    tagListCopy.push(clickedValue);
    setTagList(tagListCopy);
    setSelected(newMyTags);
  };
  return (
    <div className="flex flex-col">
      <div className="prev w-full ">
        <div className="SkilList flex flex-wrap ">
          {recommends.map((tag) => (
            <button className={tagRec} type="button" id={tag} value={tag} key={tag} onClick={selectedTag}>{tag}</button>
          ))}
        </div>
      </div>
      <div className="searching w-full">
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
