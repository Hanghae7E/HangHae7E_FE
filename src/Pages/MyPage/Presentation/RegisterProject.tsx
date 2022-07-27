/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import GlobalIcon from '../../../Components/GlobalIcon';
import { IRegisteredPosts } from '../../../TypeInterface/postType';
import { dateFormat } from '../../../util/util';
import StatusTag from './StatusTag';

interface Props {
    projects: IRegisteredPosts[]
  }
export default function RegisterProject({ projects }:Props) {
  const Today = dateFormat(new Date());
  const nav = useNavigate();
  const goDetail = (id:number) => () => {
    nav(`/detail/${id}`);
  };
  return (
    <div className="projectComponent flex flex-col  bg-white px-8  border-2 border-[#EEEEEE] rounded-2xl">
      {(projects.length > 0 && projects.map((prj:IRegisteredPosts, idx) => (
        <div key={prj.id} onClick={goDetail(prj.id)} className="mt-10 cursor-pointer">
          <div className="flex-row items-start">
            <StatusTag
              status={
                !prj.status && '마감' && prj.recruit_due_time < Today ? '진행중' : '모집중'
            }
              propsClassname=" h-[35px] inline-flex"
            />
            <div className="inline-flex h-[35px] px-2 py-3 ml-2 font-pre
            font-medium text-[16px] rounded-lg bg-[#F0F0F0] items-center justify-center "
            >
              {`${prj.project_start_time}~${prj.project_end_time}`}
            </div>
          </div>
          <h2 className="mt-4 font-pre font-bold text-[24px] ">{prj.title}</h2>
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
  );
}
