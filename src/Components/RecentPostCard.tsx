import { IRecruitPost } from '../TypeInterface/postType';
import TagBox from './TagBox';

export default function RecentPostCard({ data }: { data: IRecruitPost }) {
  const recruitDueDate = () => {
    const result = data.recruitDueTime.split('-');
    return `${result[1]}/${result[2]}마감`;
  };
  return (
    <div className="min-w-min sm:w-[411px] sm:h-[333px] min-h-min my-auto mx-auto box-border cursor-pointer">

      <img className="w-full h-[228px] object-fill m-0 rounded-3xl" src="/defaulimg.svg" alt="project" />
      <p className="my-[19px] font-semibold text-[20px] ">{data.title}</p>
      <div className="flex justify-between">
        <div className="flex flex-nowrap box-border my-1 overflow-hidden  font-medium">
          {data.tags.length >= 1 && data.tags.map((tag, i) => i < 3 && <TagBox key={`${tag + i}`} tag={tag} padding="text-[14px] px-[12px] py-[8px]" margin="mx-[4px]" />)}
        </div>
        <div className="flex items-end self-end text-refGray font-semibold text-[16px] justify-end pb-3">
          <p>{data.recruitDueTime && recruitDueDate()}</p>
        </div>
      </div>
    </div>
  );
}
