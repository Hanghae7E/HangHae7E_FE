import React, { ChangeEvent, useState } from 'react';

export default function TagInput({
  tagData,
  selected,
  placeholder,
}: {
  selected: Array<string>;
  tagData: Array<string>;
  placeholder: string;
}) {
  const [tagList, setTagList] = useState(tagData);
  const [recommends, setRecommends] = useState<string[]>([]);
  const [myTags, setMyTags] = useState([...selected]);
  const [input, setInput] = useState('');

  const recommendsTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);
    let filterData = tagList.filter((tag) => tag.toString().toLowerCase().includes(userInput));
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
    setMyTags(tagCopy);

    setRecommends(['']);

    const newTagList = tagList.filter((tag) => tag !== clickedValue);
    setTagList(newTagList);
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
      <div className="selectSkils">
        <span className="selectSkils text-sm font-bold text-slate-300 ">선택</span>
        {myTags.map((tag) => (
          <button
            className="ml-1 bg-slate-300 rounded-md text-sm"
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
        className="seacrh-bar w-full mt-1 border-[2px]  border-[#CCCCCC] rounded-2xl"
        placeholder={placeholder}
        onChange={recommendsTag}
        value={input}
      />
      <div className="SkilList flex flex-wrap">
        {recommends.map((tag, i) => (
          <button
            className="bg-[#E8EDF4] rounded-[24px] px-[12px] py-[12px] text-[14px] mr-[8px] mt-[8px]"
            type="button"
            value={tag}
            key={tag}
            onClick={selectedTag}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
