/* eslint-disable max-len */
import React from 'react';
import { DetailProjectData } from '../../../TypeInterface/detailType';
import DetailIcon from './DetailIcon';

interface Props {
  data: DetailProjectData
  onClickApply: () => void
  goBack: () => void
  goToEditPage: () => void
  handleDeleteProject: () => void

}
function DetailProjectInfo({
  data, onClickApply, goBack, goToEditPage, handleDeleteProject,
}: Props) {
  const {
    title,
    body,
    projectStartTime,
    projectEndTime,
    recruitDueTime,
    tags,
  } = data;

  return (
    <section className="w-full mt-[80px] ml-[63px]">
      <div className="flex justify-between mb-[32px]">
        <div>
          <button
            type="button"
            onClick={goBack}
            className="bg-[#EEEEEE] w-[44px] h-[44px] mr-4 rounded-full grid place-items-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#323232" />
            </svg>
          </button>
          <span>돌아가기</span>
        </div>
        <div>
          <button
            onClick={goToEditPage}
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
      </div>
      <h1 className="text-[36px] font-[600]">{title}</h1>
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
      <ul className="mt-[42px]">
        <li className="flex">
          <DetailIcon.Project />
          <p className="font-bold text-base ml-[11px] mr-5">
            프로젝트 일정
          </p>
          <span>
            {projectStartTime}
            ~
            {projectEndTime}
          </span>
        </li>
        <li className="flex my-[19px]">
          <DetailIcon.User />
          <p className="font-bold text-base ml-[11px] mr-5">
            모집인원
          </p>
          <span>
            개발자 0명 / 디자이너 0 명
          </span>
        </li>
        <li className="flex">
          <DetailIcon.Project />
          <p className="font-bold text-base ml-[11px] mr-5">모집마감</p>
          <span>{recruitDueTime}</span>
        </li>
      </ul>
      <h2 className="font-bold text-[26px] mb-6 mt-[50px]">프로젝트 소개</h2>
      <div className="bg-[#F9F9F9] border-2 border-solid border-[#DFE1E5] rounded-lg p-[28px]">
        <div>
          <span>
            {body}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[60px]">
        <button
          type="button"
          onClick={onClickApply}
          className="w-[290px] font-bold bg-[#6457FA] mx-auto text-white h-[72px] rounded-2xl"
        >
          참여신청하기
        </button>
      </div>
    </section>
  );
}

export default React.memo(DetailProjectInfo);
