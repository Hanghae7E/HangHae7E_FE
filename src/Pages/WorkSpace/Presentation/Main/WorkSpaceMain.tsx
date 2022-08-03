/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-alert */
import { Client } from '@stomp/stompjs';
import { AxiosResponse } from 'axios';
import React, { SetStateAction } from 'react';
import { UseMutationResult } from 'react-query';
import { NavigateFunction } from 'react-router-dom';
import GlobalIcon from '../../../../Components/GlobalIcon';
import TagBox from '../../../../Components/TagBox';
import { IWorkSpaceInfo, IWorkSpacePages } from '../../../../TypeInterface/workType';
import TeamMembers from './TeamMembers';
import WorkContent from './WorkContent';
import WorkSpaceCard from './WorkSpaceCard';

export default function WorkSpaceMain({
  workSpaceInfo,
  getWorkSpace,
  createWorkSpace,
  client,
  setIsEdit,
  nav,
  openDetailModal,
  openLinkModal,
} : {
    workSpaceInfo:IWorkSpaceInfo,
    getWorkSpace:Array<IWorkSpacePages>| null,
    createWorkSpace:UseMutationResult<AxiosResponse<any, any>, unknown, number, unknown>
    client:Client | null,
    setIsEdit:React.Dispatch<SetStateAction<boolean>>
    nav:NavigateFunction
    openDetailModal: ({ data }: {
      data: string;
  }) => () => void
    openLinkModal: ({ data }: {
      data: string;
  }) => () => void
}) {
  return (
    <div className="">
      <nav className="wSBanner flex flex-col w-full h-[214px] bg-[#F5F5F5] pt-20 pl-10 -z-10 ">
        <div className="projectTop flex ">
          <h1 className="projectTitle  font-pre font-bold text-4xl ">{workSpaceInfo.projectName}</h1>
          <span className="ml-3 py-2 px-3 font-pre font-bold text-[20px] rounded-lg text-white bg-[#333333] leading-none">d-day</span>
          <div className="projectDropDown" />
        </div>
        <div className="projectTag flex ">
          <div className="flex gap-[8px] mt-[16px]">
            <TagBox tag="라이프스타일" padding="px-[12px] py-[6px]" />
            <TagBox tag="교육" padding="px-[12px] py-[6px]" />
            <TagBox tag="약국" padding="px-[12px] py-[6px]" />
            <div
              onClick={openLinkModal({ data: 'test' })}
              className="bg-[#494A4D] border-[#E8EDF4] cursor-pointer
              whitespace-nowrap px-[12px] py-[6px] rounded-full flex items-center text-[#FFC700] gap-[2px]"
            >
              <GlobalIcon.Linker width={16} height={17} color="#FFC700" />
              링크모음
            </div>
          </div>

        </div>
      </nav>
      <div className="wSContents flex py-3 mt-10  bg-white">
        <TeamMembers team={workSpaceInfo.team} />
        <div className="wSTeamBoard w-full min-w-[288px] max-w-[588px] ml-10 bg-white">
          <div className="wsTeamTitle flex flex-row justify-between w-full min-w-[288px] max-w-[588px] sticky top-0 z-10 bg-white">
            <h2 className="flex font-pre font-bold text-[22px]">팀게시판</h2>
            <button
              type="button"
              className="flex border border-[#6457FA] text-[12px] text-[#6457FA] font-bold items-center px-[12px] py-[0px] rounded-[8px]"
              onClick={() => {
                if (client !== null) {
                  createWorkSpace.mutate(1);

                  // setIsEdit(true);
                  // setWorkSpaceId(3);
                  // setPage('회의록');
                } else {
                  alert('소켓이 없습니다.');
                }
              }}
            >
              작성하기
            </button>
          </div>
          <div className="min-w-[288px] w-full max-w-[588px] mb-[160px]">
            {getWorkSpace !== null && getWorkSpace.map((page) => page.workPage.map((workSpace) => (
              <WorkSpaceCard
                key={workSpace.workSpaceId}
                workSpace={workSpace}
                setIsEdit={setIsEdit}
              />
            )))}

          </div>

        </div>
        <div className="wSTeamBoard w-full min-w-[299px] max-w-[399px] ml-10 mr-6">
          <div className="sticky top-0 bg-white">
            <div className="wsTeamTitle flex flex-row justify-between">
              <h2 className="flex font-pre font-bold text-[22px]">작업 내용</h2>
              <button
                type="button"
                className="flex border border-[#6457FA] text-[12px] text-[#6457FA] font-bold items-center px-[12px] py-[0px] rounded-[8px]"
                onClick={() => {
                  if (client !== null) {
                    nav('/workSpace?page=작업');
                  } else {
                    alert('소켓이 없습니다.');
                  }
                }}
              >
                작성하기

              </button>

            </div>
            <section className="mt-[8px]">
              <div className="flex gap-[5px]">
                <TagBox tag="전체" padding="px-[12px] py-[6px]" />
                <TagBox tag="개발자" padding="px-[12px] py-[6px]" />
                <TagBox tag="기획자" padding="px-[12px] py-[6px]" />
                <TagBox tag="디자이너" padding="px-[12px] py-[6px]" />
              </div>
            </section>
          </div>
          <ul className=" h-[652px]">

            <WorkContent openModal={openDetailModal} />
            <WorkContent openModal={openDetailModal} />
            <WorkContent openModal={openDetailModal} />
            <WorkContent openModal={openDetailModal} />
            <WorkContent openModal={openDetailModal} />
            <WorkContent openModal={openDetailModal} />
          </ul>
        </div>
      </div>
      <div className="flex z-10">

        <div className="wSTeamBoard w-full min-w-[299px] max-w-[399px] ml-10 mr-6 h-2" />
      </div>
    </div>
  );
}
