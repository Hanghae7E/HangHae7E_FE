/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

import GlobalIcon from '../../../Components/GlobalIcon';
import { IApplyPosts, IRegisteredPosts } from '../../../TypeInterface/postType';
import { dateFormat } from '../../../util/util';
import StatusTag from './StatusTag';

interface Props {
    applyPojects: IApplyPosts[],
    registerProjects: IRegisteredPosts[],
  }
export default function OnGoingPorject({ applyPojects, registerProjects }:Props) {
  const nav = useNavigate();
  const Today = dateFormat(new Date());
  const goDetail = (id:number) => () => {
    nav(`/detail/${id}`);
  };
  const pass = applyPojects.filter((p) => p.status === '합격');
  const going = registerProjects.filter((
    { status, recruit_due_time },
  ) => status === 'true' && recruit_due_time < Today);

  return (
    <div className="projectComponent mb-[160px]">
      <div className="onGoingProjectContents flex flex-col  mt-5 bg-white px-8 pc:border-2 pc:border-[#EEEEEE] pc:rounded-2xl">
        {pass.length === 0 && going.length === 0 && (<div className="my-5"> 진행중인 프로젝트가 없습니다. </div>)}
        {(pass.length > 0 && pass.map((prj:IApplyPosts) => (
          <div key={prj.id} onClick={goDetail(prj.id)} className="mt-10 cursor-pointer">
            <div className="flex-col sm:flex-row items-start">
              <StatusTag
                status="진행중"
                propsClassname="h-[35px] inline-flex"
              />
              <span className="mt-2 ml-0 flex w-fit items-center sm:inline-flex h-[35px] px-2 py-3 sm:ml-2 font-pre
            font-medium text-[16px] rounded-lg bg-[#F0F0F0] r sm:justify-center"
              >
                {`${prj.project_start_time}~${prj.project_end_time}`}
              </span>
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
            {(pass.length > 0) && (
            <hr className="border-1 border-[#CCCCCC] mt-10 " />
            )}
          </div>
        )))}
        {(going.length > 0 && going.map((prj:IApplyPosts, idx) => (
          <div key={prj.id} onClick={goDetail(prj.id)} className="mt-10 cursor-pointer">
            <div className="flex-row items-start">
              <StatusTag
                status="진행중"
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
            {(going.length > idx + 1) && (
            <hr className="border-1 border-[#CCCCCC] mt-10 " />
            )}
          </div>
        )))}
      </div>
    </div>
  );
}
