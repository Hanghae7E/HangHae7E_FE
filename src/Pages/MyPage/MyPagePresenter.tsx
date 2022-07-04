import { useState } from 'react';
import Calendar from '../../Components/Calendar';

export default function MyPagePresenter() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="pagewraper  h-full w-full ">
      <div className="header flex h-10  bg-slate-800 text-center">
        <div className="m-2 w-20 border-1 border-neutral-300 text-neutral-300">로고</div>
        <div className="m-2 w-20 border-1 border-neutral-300 text-neutral-300">메뉴1</div>
        <div className="m-2 w-20 border-1 border-neutral-300 text-neutral-300">메뉴2</div>
      </div>
      <div className="myPage w-full h-full bg-white">
        <div className="myPageBanner  bg-cover bg-center">
          <img className="w-full h-40 object-cover" alt="backgroundImage" />
        </div>
        <div className="myPageContents flex w-full h-full  bg-red-300">
          <div className="sideWrapper p-20 w-20 relative">
            <div className="side absolute -top-10 w-48">
              <div className="sideInner p-5 bg-slate-400 rounded-xl text-center">
                <div className="userImg relative">
                  <img className="h-20 w-20 rounded-full inline-block" alt="userImage" />
                  <div className="absolute w-6 h4 right-1/4 -bottom-1 rounded-full  bg-slate-800 text-slate-800">ED</div>
                </div>
                <div className="userName p-2">닉네임</div>
                <div className="userEmail pb-2">aaa@gmail.com</div>
                <button type="button" className="w-32 h-6  bg-slate-yu500 rounded-lg text-center text-xs">
                  내 정보 수정하기
                </button>
              </div>
            </div>
          </div>
          <div className="contentsArea w-full  flex flex-col pl-32  bg-slate-300 ">
            <div className="tab flex m-3 p-4 bg-slate-500">
              <div className="profile mr-2 text-start inline-block">
                <h1>프로필</h1>
              </div>
              <div className="reqProject">
                <h1>진행중인 프로젝트</h1>
              </div>
              <div className="appProject">
                <h1>참여 신청 한 프로젝트</h1>
              </div>
            </div>
            <div className="profileComponent flex flex-col m-3 p-4 bg-white ">
              <div className="text-2xl">
                <h2>안녕하세요 프로덕트 디자이너 장원영 입니다.</h2>
              </div>
              <div className="w-full -4">
                <h2>직군</h2>
                <input type="text" placeholder="직군" />
                <h2>직무</h2>
                <input type="text" placeholder="직무" />
                <h2>포트폴리오</h2>
                <input type="text" placeholder="포트폴리오 URL" />
                <h2>연락처</h2>
                <input type="url" placeholder="연락처" />
                <h2>협업사항</h2>
                <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} isRange={false} />
                <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} isRange />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
