/* eslint-disable max-len */
import React from 'react';
import { DetailProjectData } from '../DetailPageContainer';
import DetailIcon from './DetailIcon';

interface Props {
  data: DetailProjectData
}
function DetailProjectInfo({ data }: Props) {
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
      <div className="flex items-center mb-[32px]">
        <div className="bg-[#EEEEEE] w-[44px] h-[44px] rounded-full grid place-items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#323232" />
          </svg>
        </div>
        <span>돌아가기</span>
      </div>
      <h1 className="text-[36px] font-[600]">프로젝트 팀원 구합니다</h1>
      <ul className="flex flex-row mt-3">
        {tags.map((item) => (
          <li
            key={item}
            className="bg-[#E8EDF4] rounded-3xl py-2 px-3 mr-2"
          >
            {item}
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
        <button className="w-[290px] font-bold bg-[#6457FA] mx-auto text-white h-[72px] rounded-2xl" type="button">
          참여신청하기
        </button>
      </div>
    </section>
  );
}

export default React.memo(DetailProjectInfo);
