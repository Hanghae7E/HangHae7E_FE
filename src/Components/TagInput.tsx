import React, { ChangeEvent, useState } from 'react';

interface tagOptionI {
  tagData: Array<string>;
  selected: Array<string>;
  placeholder: string;
  style?: {
    tag?: {
      width?: number;
      height?: number;
      px?: number;
      py?: number;
      pl?: number;
      mr?: number;
      mt?: number;
      backgroundColor?: string;
      borderPx?: number;
      borderColor?: string;
      rounded?: number;
      textColor?: string;
      textSize?: number;
      lineHeight?: number;
    };
    recommendsTag?: {
      backgroundColor?: string;
      textColor?: string;
    };
  };
}

export default function TagInput(tagOption: tagOptionI) {
  const { tagData, selected, placeholder, style } = tagOption;
  const [tagList, setTagList] = useState(['']);
  const [myTags, setMyTags] = useState(selected);
  const [recommends, setRecommends] = useState<string[]>([]);
  const [input, setInput] = useState('');

  if (selected.length === 0) {
    setTagList(tagData);
  }

  // const filterTagData = (all: string[], select: string[]) => {
  //   const newData = all
  //     .concat(selected)
  //     .filter((item) => !tagData.includes(item) || !selected.includes(item));
  //   return newData;
  // };

  const tagRec =
    'bg-[#6457FA] rounded-[24px] text-white px-[12px] py-[6px] mr-[8px] mt-[8px] font-pre text-[14px] leading-[16.9x]';
  const tagSelct =
    'h-[50px] w-full pl-[10px] border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px] text-[#CCCCCC]';

  const recommendsTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);
    let filterData = tagList.filter((tag: string) =>
      tag.toString().toLowerCase().includes(userInput)
    );
    if (e.target.value.length === 0) {
      filterData = [];
    }
    setRecommends(filterData);
  };

  const selectedTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedValue = e.currentTarget.value;
    const tagCopy = [...myTags];
    tagCopy.push(clickedValue);
    tagCopy.filter((tag) => tag !== clickedValue);

    const newTagList = tagList.filter((tag: string) => tag !== clickedValue);
    setTagList(newTagList);

    setMyTags(tagCopy);
    setRecommends([]);
    setInput('');
  };

  const selectedTagRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedValue = e.currentTarget.value;
    const tagCopy = [...myTags];
    const newMyTags = tagCopy.filter((tag) => tag !== clickedValue);
    setMyTags(newMyTags);

    const tagListCopy = [...tagList];
    tagListCopy.push(clickedValue);
    setTagList(tagListCopy);
  };

  return (
    <div className="search w-full ">
      <div className="selectSkils mb-3">
        {myTags.map((tag, i) => (
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
      <input
        type="text"
        className="h-[50px] w-full pl-[10px] border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px] text-[#CCCCCC]"
        placeholder={placeholder}
        onChange={recommendsTag}
        value={input}
      />
      <div className="SkilList flex flex-wrap">
        {recommends.map((tag, i) => (
          <button className={tagRec} type="button" value={tag} key={tag} onClick={selectedTag}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
