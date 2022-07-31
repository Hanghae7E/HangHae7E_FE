/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { SetStateAction } from 'react';

export default function WorkSpaceCard(
  {
    setPage,
    setWorkSpaceId,
    setIsEdit,
  }:
  {
    setPage:React.Dispatch<SetStateAction<string>>,
    setWorkSpaceId:React.Dispatch<SetStateAction<number>>,
    setIsEdit:React.Dispatch<SetStateAction<boolean>>

  },
) {
  return (
    <div
      className="wsTeamPosts cursor-pointer relative flex-col mt-5 hover:bg-slate-50 pt-5 pl-[11px] rounded-[8px]"
      onClick={() => {
        setIsEdit(false);
        setWorkSpaceId(4);
        setPage('회의록');
      }}
    >
      <span className="font-pre font-medium px-[12px] py-[8px]  bg-[#EEEEEE] rounded-lg">2022.07.29 17:30</span>
      <h3 className="block mt-[12px] font-pre font-bold text-xl ">팀 게시판 글 제목 </h3>
      <p className="text-[14px] font-medium absolute top-[19px] right-[22px]">작성자 : 김빵빵</p>
      <hr className="mt-6  border-1 border-[#CCCCCC] mr-[11px]" />
    </div>
  );
}
