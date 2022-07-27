/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import GlobalIcon from '../../../Components/GlobalIcon';
import { IapplyPosts } from '../../../TypeInterface/postType';
import StatusTag from './StatusTag';

interface Props {
    projects: IapplyPosts[]
  }
export default function ApplyProject({ projects }:Props) {
  const pass = projects.filter((p) => p.status === '합격');
  const reject = projects.filter((p) => p.status === '불합격');
  const waiting = projects.filter((p) => p.status === '대기중');
  const statusCheck = (status:string) => {
    let change = '';
    if (status === '대기중')change = '지원완료';
    else if (status === '합격')change = '합격';
    else change = '불합격 ';
    return change;
  };
  const nav = useNavigate();
  const goDetail = (id:number) => () => {
    nav(`/detail/${id}`);
  };
  return (
    <div className="projectComponent">
      <div className="projectStatus flex align-middle  bg-white border-2 border-[#EEEEEE] rounded-2xl">
        <div className="flex-col text-center w-1/3 my-5 ">
          <span className="block font-pre text-[32px] font-normal">{waiting.length}</span>
          <span className="block font-pre text-[18px] font-normal">대기중</span>
        </div>
        <div className="flex-col w-1/3  text-center  border-l-[1px] my-5  border-[#CCCCCC] ">
          <span className="block font-pre text-[32px] font-normal">{pass.length}</span>
          <span className="block   font-pre text-[18px] font-normal">합격</span>
        </div>
        <div className="flex-col w-1/3  text-center  border-l-[1px] my-5  border-[#CCCCCC] ">
          <span className="block font-pre text-[32px] font-normal">{reject.length}</span>
          <span className="block font-pre text-[18px] font-normal">불합격</span>
        </div>
      </div>
      <div className="projectContents flex flex-col  mt-5 bg-white px-8  border-2 border-[#EEEEEE] rounded-2xl">
        {(projects.length > 0 && projects.map((prj:IapplyPosts, idx) => (
          <div key={prj.id} onClick={goDetail(prj.id)} className="mt-10 cursor-pointer">
            <div className="flex-row items-start">
              <StatusTag
                status={statusCheck(prj.status)}
                propsClassname=" h-[35px] inline-flex"
              />
              <div className="inline-flex h-[35px] px-2 py-3 ml-2 font-pre
            font-medium text-[16px] rounded-lg bg-[#F0F0F0] items-center justify-center "
              >
                {`${prj.project_start_time}~${prj.project_end_time}`}
              </div>
            </div>
            <h2 className="font-pre
            font-bold text-[24px] leading-[29px] mt-4"
            >
              {prj.title}

            </h2>
            <div className="mt-4 inline-flex mb-7">
              <GlobalIcon.Persons />
              <span className="border-r-[1px] px-3 ml-3  border-[#CCCCCC] font-pre text-base font-medium">
                {' '}
                개발자
                {' '}
                {prj.required_developers}
                명
              </span>
              <span className="border-r-[1px] px-3 ml-3 border-[#CCCCCC] font-pre text-base font-medium">
                {' '}
                디자이너
                {' '}
                {prj.required_designers}
                명
              </span>
              <span className=" px-3 font-pre text-base font-medium">
                {' '}
                기획자
                {' '}
                {prj.required_project_managers}
                명
              </span>
            </div>
            {/* <div className="tags flex items-center">
            {prj.tag.map((tag) => (
              <span className="bg-[#CCCCCC] h-[30px]  rounded-2xl
               text-black px-[12px] py-[2px] mr-[8px] font-pre text-[14px]
               eading-[15x] " key={skil}>{skil}</span>
            ))}
          </div> */}
            {(projects.length > idx + 1) && (
            <hr className="border-1 border-[#CCCCCC] mt-10 " />
            )}
          </div>
        )))}
      </div>
    </div>
  );
}
