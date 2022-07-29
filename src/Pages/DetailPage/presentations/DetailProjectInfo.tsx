/* eslint-disable max-len */
import React from 'react';
import { DetailProjectData } from '../../../TypeInterface/detailType';
import DetailIcon from './DetailIcon';

interface Props {
  data: DetailProjectData
  isCreator: boolean
  onClickApply: () => void
  onClosed:()=>void
  goBack: () => void
  goToEditPage: (projectData:DetailProjectData) => void
  handleDeleteProject: () => void
}
function DetailProjectInfo({
  data,
  isCreator,
  onClickApply,
  onClosed,
  goBack,
  goToEditPage,
  handleDeleteProject,
}: Props) {
  const {
    title,
    body,
    projectStartTime,
    projectEndTime,
    recruitDueTime,
    recruitStatus,
    requiredDevelopers,
    requiredDesigners,
    requiredProjectManagers,
    tags,
  } = data;

  return (
    <section className="w-full mt-[50px] ml-[63px]">
      <div className="flex justify-between mb-[32px]">
        <div className="flex items-center">
          <button
            type="button"
            onClick={goBack}
            className="bg-[#EEEEEE] w-[44px] h-[44px] mr-4 rounded-full grid place-items-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#323232" />
            </svg>
          </button>
          <span className="font-pre text-base font-normal ">돌아가기</span>
        </div>
        {isCreator && (
          <div>
            <button
              onClick={() => goToEditPage(data)}
              className="underline mr-4"
              type="button"
            >
              수정하기
            </button>
            <button
              onClick={handleDeleteProject}
              className="underline text-red-500"
              type="button"
            >
              삭제하기
            </button>
          </div>
        )}
      </div>
      <h1 className="font-pre text-[36px] font-[600] leading-[56px]">{title}</h1>
      <ul className="flex flex-row mt-3">
        {tags.map((item) => (
          <li
            key={item.tagId}
            className="bg-[#E8EDF4] rounded-3xl py-2 px-3 mr-2"
          >
            {item.body}
          </li>
        ))}
      </ul>
      <ul className="mt-[40px]">
        <li className="flex items-center ">
          <DetailIcon.Project />
          <p className="font-bold min-w-[87px] text-base ml-[11px] mr-5">
            프로젝트 일정
          </p>
          <span>
            {projectStartTime}
            ~
            {projectEndTime}
          </span>
        </li>
        <li className="flex my-[19px] items-center">
          <DetailIcon.User />
          <p className="font-pre font-bold min-w-[87px] text-base ml-[11px] mr-5">
            모집인원
          </p>
          <span className="border-r-[1px] my-[4px] pr-3  border-[#CCCCCC]">
            개발자
            {' '}
            {requiredDevelopers}
            명
          </span>
          <span className="border-r-[1px] my-[4px] px-3 border-[#CCCCCC]">
            디자이너
            {' '}
            {requiredDesigners}
            명
          </span>
          <span className="my-[4px] pl-3">
            기획자
            {' '}
            {requiredProjectManagers}
            명
          </span>
        </li>
        <li className="flex items-center">
          <DetailIcon.Project />
          <p className="font-pre font-bold min-w-[87px] text-base ml-[11px] mr-5">모집마감</p>
          <span>{recruitDueTime}</span>
        </li>
      </ul>
      <h2 className="font-pre font-bold text-[28px] mb-6 mt-[48px]">프로젝트 소개</h2>
      <div className="bg-[#F9F9F9] border-2 border-solid border-[#DFE1E5] rounded-lg p-[28px]">
        <div>
          <span>
            {body}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[60px]">
        {!isCreator ? (
          <button
            type="button"
            onClick={onClickApply}
            className="w-[290px] font-bold bg-[#6457FA] mx-auto text-white h-[72px] rounded-2xl"
          >
            참여신청하기
          </button>
        )
          : (
            <button
              type="button"
              onClick={() => onClosed()}
              disabled={!recruitStatus}
              className="w-[290px] font-bold bg-[#6457FA] disabled:bg-[#cccccc] mx-auto text-white h-[72px] rounded-2xl"
            >
              {recruitStatus ? '모집마감하기' : '마감되었습니다.'}
            </button>
          )}
      </div>
    </section>
  );
}

export default React.memo(DetailProjectInfo);
