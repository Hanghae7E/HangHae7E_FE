import React, { SetStateAction } from 'react';
import GlobalIcon from '../../../../Components/GlobalIcon';
import TagBox from '../../../../Components/TagBox';
import TeamMembers from './TeamMembers';
import WorkContent from './WorkContent';
import WorkSpaceCard from './WorkSpaceCard';

export default function WorkSpaceMain({
  setPage,
} : {
    setPage :React.Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="relative">
      <nav className="wSBanner flex flex-col w-full h-[214px] bg-[#F5F5F5] pt-20 pl-10">
        <div className="projectTop flex ">
          <h1 className="projectTitle  font-pre font-bold text-4xl ">프로젝트 이름</h1>
          <span className="ml-3 py-2 px-3 font-pre font-bold text-[20px] rounded-lg text-white bg-[#333333] leading-none">d-day</span>
          <div className="projectDropDown" />
        </div>
        <div className="projectTag flex ">
          <div className="flex gap-[8px] mt-[16px]">
            <TagBox tag="라이프스타일" padding="px-[12px] py-[6px]" />
            <TagBox tag="교육" padding="px-[12px] py-[6px]" />
            <TagBox tag="약국" padding="px-[12px] py-[6px]" />
            <div className="bg-[#494A4D] border-[#E8EDF4] whitespace-nowrap px-[12px] py-[6px] rounded-full flex items-center text-[#FFC700] gap-[2px]">
              <GlobalIcon.Linker width={16} height={17} color="#FFC700" />
              링크모음
            </div>
          </div>

        </div>
      </nav>
      <div className="wSContents flex sticky top-0 py-3 mt-10 z-20 bg-white h-[60px]">
        <TeamMembers />
        <div className="wSTeamBoard w-full min-w-[288px] max-w-[588px] ml-10 mr-6 ">
          <div className="wsTeamTitle flex flex-row justify-between">
            <h2 className="flex font-pre font-bold text-[22px]">팀게시판</h2>
            <button type="button" className="flex border border-[#6457FA] text-[12px] text-[#6457FA] font-bold items-center px-[12px] py-[0px] rounded-[8px]" onClick={() => setPage('회의록')}>작성하기</button>
          </div>

        </div>
        <div className="wSTeamBoard w-full min-w-[299px] max-w-[399px] ml-10 mr-6">
          <div className="wsTeamTitle flex flex-row justify-between">
            <h2 className="flex font-pre font-bold text-[22px]">작업 내용</h2>
            <button type="button" className="flex border border-[#6457FA] text-[12px] text-[#6457FA] font-bold items-center px-[12px] py-[0px] rounded-[8px]" onClick={() => setPage('작업')}>작성하기</button>
          </div>
          <section className="mt-[8px]">
            <div className="flex gap-[5px]">
              <TagBox tag="전체" padding="px-[12px] py-[6px]" />
              <TagBox tag="개발자" padding="px-[12px] py-[6px]" />
              <TagBox tag="기획자" padding="px-[12px] py-[6px]" />
              <TagBox tag="디자이너" padding="px-[12px] py-[6px]" />
            </div>
          </section>
          <ul>

            <WorkContent />
            <WorkContent />
            <WorkContent />
            <WorkContent />
            <WorkContent />
            <WorkContent />
          </ul>
        </div>
      </div>
      <div className="min-w-[288px] max-w-[588px] ml-[241px] -z-10 mb-[160px]">
        <WorkSpaceCard />
        <WorkSpaceCard />
        <WorkSpaceCard />
        <WorkSpaceCard />
        <WorkSpaceCard />
        <WorkSpaceCard />
        <WorkSpaceCard />
        <WorkSpaceCard />
        <WorkSpaceCard />
        <WorkSpaceCard />
      </div>
    </div>
  );
}
