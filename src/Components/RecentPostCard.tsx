import { IRecruitPost } from '../TypeInterface/postType';
import SearchTag from './SearchTag';

export default function RecentPostCard({ data }:{data:IRecruitPost}) {
  return (
    <div className="min-w-min sm:w-1/3 hover:p-1 sm:h-min min-h-min p-2  my-auto mx-auto box-border cursor-pointer">

      <img className="w-full h-4/6 object-fill m-0 rounded-3xl" src="/defaulimg.svg" alt="project" />
      <p className="my-3 font-extrabold text-lg ">{data.title}</p>
      <div className="flex justify-between">
        <div className="flex flex-nowrap box-border my-1 overflow-hidden">
          {data.tagList.length >= 1 && data.tagList.map((tag, i) => <SearchTag key={`${tag + i}`} tag={tag} />)}
        </div>
        <div className="flex items-end self-end text-refGray font-semibold text-[8px] justify-end pb-3">
          ~
          {data.recruitDueTime}
        </div>
      </div>
    </div>
  );
}
