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
  const [recommends, setRecommends] = useState(['']);
  const [myTags, setMyTags] = useState([...selected]);
  const [input, setInput] = useState('');

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
    <div className="search w-full">
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
        className="seacrh-bar w-full mt-1 border  border-slate-200"
        placeholder={placeholder}
        onChange={recommendsTag}
        value={input}
      />
      <div className="SkilList">
        <ul>
          {recommends.map((tag, i) => (
            <li key={tag}>
              <button
                className="bg-slate-400 rounded-md mt-1"
                type="button"
                value={tag}
                onClick={selectedTag}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//   <div className="warpper">
//     <div className="tagArea">
//       <img>아이콘</img>
//       <span>기술명</span>
//       <button className="delete">x</button>
//     </div>
//     <div className="inputArea"></div>

//     <input type="text" placeholder="ex) javascript" autoComplete="off" value=""></input>
//     <button type="button"></button>
//     <ul>
//       <li>
//         <img className="teq"></img>
//         <span className="teqName"></span>
//         <button className="warpper"></button>
//       </li>
//     </ul>
//   </div>;
