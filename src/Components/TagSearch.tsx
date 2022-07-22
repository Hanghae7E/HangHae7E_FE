/* eslint-disable no-tabs */
import React, { SetStateAction, useState } from 'react';
import { ITag } from '../TypeInterface/postType';
import GlobalIcon from './GlobalIcon';

import TagBox from './TagBox';

interface tagOptionI {
  tagData: Array<ITag>;
  selected: Array<ITag>;
  placeholder: string;
  setHashTag?: React.Dispatch<SetStateAction<Array<ITag>>>;
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
function TagSearch(tagOption: tagOptionI) {
  const {
    tagData, selected, placeholder, setHashTag,
  } = tagOption;
  const [myTags, setMyTags] = useState<Array<ITag>>(selected);
  const [recommends, setRecommends] = useState<Array<ITag>>([]);
  const [input, setInput] = useState('');
  // if (selected.length === 0) {
  //   setTagList(tagData);
  // }

  // const filterTagData = (all: string[], select: string[]) => {
  //   const newData = all
  //     .concat(selected)
  //     .filter((item) => !tagData.includes(item) || !selected.includes(item));
  //   return newData;
  // };
  const tagSelct = 'h-[50px] text-start  w-full pl-[20px] border-2 border-[#EEEEEE] bg-white float-left  font-pre font-normal text-[18px] leading-[21px] text-black';

  const recommendsTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);
    let filterData = tagData.filter(
      (tag: ITag) => tag.body.toString().toLowerCase().includes(userInput),
    );
    if (e.target.value.length === 0) {
      filterData = [];
    }
    setRecommends(filterData);
  };

  const selectedTag = (tagName:ITag) => {
    const clickedValue = tagName;
    const tagCopy = [...myTags];
    tagCopy.push(clickedValue);
    tagCopy.filter((tag) => tag !== clickedValue);
    setMyTags(tagCopy);
    if (setHashTag)setHashTag(tagCopy);
    setRecommends([]);
    setInput('');
  };

  const selectedTagRemove = (tagName:ITag) => {
    const clickedValue = tagName;
    const tagCopy = [...myTags];
    const newMyTags = tagCopy.filter((tag: ITag) => tag.body !== clickedValue.body);
    const tagListCopy = [...tagData];
    tagListCopy.push(clickedValue);
    setMyTags(newMyTags);
    if (setHashTag)setHashTag(newMyTags);
  };
  return (
    <div className="relative h-[45px] w-full border-none">
      <div className="absolute right-[20px] top-[13px]">
        <GlobalIcon.Search />
      </div>
      <input
        type="search"
        className="h-[50px] w-full pl-[24px] border-2 border-[#DFE1E5] rounded-full font-pre font-normal text-[18px] leading-[21px] text-[#CCCCCC]"
        placeholder={placeholder}
        onChange={recommendsTag}
        value={input}
      />
      {recommends.length > 0
      && (
      <div className="absolute z-30 w-full t-[45px] max-h-[200px] overflow-hidden overflow-y-auto scrollbar-hide">
          {recommends.map((tag, i) => (
            <button className={tagSelct} type="button" value={tag.body} key={`${tag.body + i}`} onClick={() => selectedTag(tag)}>
              {tag.body}
            </button>
          ))}
      </div>
      )}
      <div className="flex flex-wrap gap-2">
        {myTags.map((tag, i) => (
          <TagBox
            tag={`${tag.body}`}
            isCancled
            padding="text-[12px] py-[8px] px-[12px]"
            margin="ml-[5px] mt-[10px]"
            onClick={() => selectedTagRemove(tag)}
            key={`${tag.body + i}`}
          />
        ))}
      </div>
    </div>
  );
}
export default TagSearch;
