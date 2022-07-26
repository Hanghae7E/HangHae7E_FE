import GlobalIcon from '../../../Components/GlobalIcon';
import { IapplyPosts } from '../../../TypeInterface/postType';
import StatusTag from './StatusTag';

interface Props {
    projects: IapplyPosts[]
  }
export default function ApplyProject({ projects }:Props) {
  const statusCheck = (status:string) => {
    let change = '';
    if (status === '대기중')change = '지원완료';
    else if (status === '합격')change = '합격';
    else change = '불합격 ';
    return change;
  };

  return (
    <div className="projectComponent flex flex-col  bg-white px-8  border-2 border-[#EEEEEE] rounded-2xl">
      <div className="flex">
        <div className="flex-col"><span className="">{}</span></div>
        <div className="flex-col"><span className="">{}</span></div>
        <div className="flex-col"><span className="">{}</span></div>
      </div>
      {(projects.length > 0 && projects.map((prj:IapplyPosts, idx) => (
        <div key={prj.id} className="mt-10 ">
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
          <div className="mt-4 inline-flex">
            <GlobalIcon.Persons />
            <span>
              (모집 | 총 인원)
              {' '}
              {prj.capacity}
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
