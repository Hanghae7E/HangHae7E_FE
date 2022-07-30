import PositionTag from '../DetailPage/presentations/PositionTag';

export default function WorkSpaceContainer() {
  return (
    <div className="workSpaceComponent flex flex-col max-w-7xl mx-auto w-full ">
      <nav className="wSBanner flex flex-col w-full h-[214px] bg-[#F5F5F5] pt-20 pl-10">
        <div className="projectTop flex ">
          <h1 className="projectTitle  font-pre font-bold text-4xl ">프로젝트 이름</h1>
          <span className="ml-3 py-2 px-3 font-pre font-bold text-[20px] rounded-lg text-white bg-[#333333] leading-none">d-day</span>
          <div className="projectDropDown" />
        </div>
        <div className="projectTag flex">
          <span>태그</span>
          <span>링크모음</span>
        </div>
      </nav>
      <div className="wSContents flex mt-10 mb-40">
        <section className="leftSide flex-col w-[218px]">
          <img alt="프로젝트이미지" className="w-[217px] h-[127px] object-cover " src="/defaulimg.svg" />
          <h2 className="TeamMembers mt-10 font-pre font-bold text-[22px]">팀원 6</h2>
          <ul className="flex mt-6 border-2 rounded-sm border-[#EEEEEE]">
            <li className="flex m-5 items-center">
              <div className="imgArea mr-2">
                <img alt="신청자이미지" className="w-[44px] h-[44px] rounded-full" src="/profiledefault.svg" />
              </div>
              <div className="flex flex-col">
                <h5 className="w-full font-pre font-bold text-[16px] whitespace-nowrap">닉네임</h5>
                <PositionTag
                  position="개발자"
                  propsClassname="font font-medium text-[10px] mt-1 rounded-[1px]"
                />
              </div>
            </li>
          </ul>
        </section>
        <div className="wSTeamBoard w-full ml-10 mr-6">
          <div className="wsTeamTitle flex flex-row justify-between">
            <h2 className="flex font-pre font-bold text-[22px]">팀게시판</h2>
            <button type="button" className="flex">작성하기</button>
          </div>
          <div className="wsTeamPosts flex-col mt-10">
            <span className="font-pre font-medium px-3 py-2 bg-[#EEEEEE] rounded-lg">2022.07.29</span>
            <h3 className="block mt-3 font-pre font-bold text-xl ">팀 게시판 글 제목 </h3>
            <hr className="mt-6  border-1 border-[#CCCCCC]" />
          </div>
          <div className="wsTeamPosts flex-col mt-10">
            <span className="font-pre font-medium px-3 py-2 bg-[#EEEEEE] rounded-lg">2022.07.29</span>
            <h3 className="block mt-3 font-pre font-bold text-xl ">팀 게시판 글 제목 </h3>
            <hr className="mt-6  border-1 border-[#CCCCCC]" />
          </div>
        </div>
      </div>
    </div>
  );
}
