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
  const newTagData = tagData
    .concat(selected)
    .filter((item) => !tagData.includes(item) || !selected.includes(item));

  const [tagList, setTagList] = useState(newTagData);
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

    const newTagList = tagList.filter((tag) => tag !== clickedValue);
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
        {myTags.map((tag) => (
          <button
            className="bg-[#6457FA] rounded-[24px] text-white px-[12px] py-[6px] mr-[8px] mt-[8px] font-pre text-[14px] leading-[16.9x]"
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
          <button
            className="bg-[#EEEEEE] rounded-[24px] px-[12px] py-[6px] mr-[8px] mt-[8px] font-pre text-[14px] leading-[16.9x]"
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
