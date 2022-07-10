import { IRecruitPost } from '../TypeInterface/postType';

export default function RecentPostCard({ data }:{data:IRecruitPost}) {
  return (
    <div className="min-w-min sm:w-1/3 hover:p-1 sm:h-min min-h-min p-3  my-auto mx-auto box-border cursor-pointer">
      <div className="w-full flex items-end self-end font-semibold text-sm justify-end p-1 bg-blue-200">
        마감일
        {' : '}
        {data.recruitDueTime}
      </div>
      <img className="w-full h-4/6 object-fill" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826__340.jpg" alt="project" />
      <h4 className="my-1 font-semibold">{data.title}</h4>
      <div className="flex flex-wrap box-border my-1">
        {data.tagList.length >= 1 && data.tagList.map((tag, i) => <div key={`${tag + i}`} className="px-2 box-border border mr-3 my-1">{tag}</div>)}
      </div>
    </div>
  );
}
