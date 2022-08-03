/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { IWorkSpace } from '../../../../TypeInterface/workType';
import { dateFormat } from '../../../../util/util';

export default function WorkSpaceCard(
  {
    workSpace,
    setIsEdit,
  }:
  {
    workSpace:IWorkSpace
    setIsEdit:React.Dispatch<SetStateAction<boolean>>

  },
) {
  const nav = useNavigate();
  return (
    <div
      className="wsTeamPosts cursor-pointer relative flex-col mt-5 hover:bg-slate-50 pt-5 pl-[11px] rounded-[8px]"
      onClick={() => {
        setIsEdit(false);
        nav(`/workSpace?page=회의록&workspace=${workSpace.workSpaceId}`);
      }}
    >
      <span className="font-pre font-medium px-[12px] py-[8px]  bg-[#EEEEEE] rounded-lg">{dateFormat(new Date(workSpace.createdAt), 2)}</span>
      <h3 className="block mt-[12px] font-pre font-bold text-xl ">{workSpace.workSpaceTitle}</h3>
      <p className="text-[14px] font-medium absolute top-[19px] right-[22px]">작성자 : 김빵빵</p>
      <hr className="mt-6  border-1 border-[#CCCCCC] mr-[11px]" />
    </div>
  );
}
