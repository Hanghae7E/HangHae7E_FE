import PositionTag from '../DetailPage/presentations/PositionTag';

export default function WorkSpaceContainer() {
  return (
    <div className="workSpaceComponent flex flex-col max-w-7xl mx-auto w-full ">
      <nav className="wSBanner flex flex-col w-full h-[214px] bg-[#F5F5F5]">
        <div className="projectTop flex">
          <h1 className="projectTitle">프로젝트 이름</h1>
          <span>d-day</span>
          <div className="projectDropDown" />
        </div>
        <div className="projectTag flex">
          <span>태그</span>
          <span>링크모음</span>
        </div>
      </nav>
      <div className="wSContents flex mt-10 mb-40">
        <section className="leftSide flex-col w-[218px]">
          <img alt="프로젝트이미지" className="w-[217px] h-[127px]" src="/defaulimg.svg" />
          <h2 className="TeamMembers mt-10 font-pre font-bold text-[22px]">팀원 6</h2>
          <ul className="flex mt-6 border-2 rounded-sm border-[#EEEEEE]">
            <li className="flex m-5 items-center">
              <div className="imgArea mr-2">
                <img alt="신청자이미지" className="w-[44px] h-[44px] rounded-full  " src="/profiledefault.svg" />
              </div>
              <div className="flex flex-col ">
                <h5 className="w-full font-pre font-bold text-[16px] whitespace-nowrap">닉네임</h5>
                <PositionTag
                  position="개발자"
                  propsClassname="font font-medium text-[10px] mt-2 rounded-[1px]"
                />
              </div>
            </li>
          </ul>
        </section>
        <div className="wSTeamBoard flex">
          <div className="wsTeamTitle">
            <h2>팀게시판</h2>
            <button type="button">작성하기</button>
          </div>
          <div className="wsTeamPosts flex">
            <span>date</span>
            <h3>title</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
