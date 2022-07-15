import { IRecruitPost, ITag } from '../TypeInterface/postType';
import TagBox from './TagBox';

export default function RecentPostCard({ data }: { data: IRecruitPost }) {
  const recruitDueDate = () => {
    const result = data.recruitDueTime.split('-');
    return `${result[1]}/${result[2]}마감`;
  };
  return (
    <div className="min-w-min sm:w-[411px] sm:h-[367px] rounded-[24px]  overflow-hidden min-h-min my-auto mx-auto box-border relative cursor-pointer">
      <div className="flex w-[100px] h-[44px] text-white bg-black font-medium text-[14px] absolute justify-center items-center">
        <p className="justify-center items-center">{data.recruitDueTime && recruitDueDate()}</p>
      </div>
      <img className="w-[410px] h-[240px] rounded-[24px] object-fit m-0" src={data.projectImage ? data.projectImage : '/defaulimg.svg'} alt="project" />
      <p className="my-[16px] font-bold text-[24px]">{data.title}</p>
      <div className="flex justify-between">
        <div className="flex flex-nowrap box-border my-1 overflow-hidden  font-medium">
          {data.tags.length >= 1 && data.tags.map((pos:ITag, i:number) => i < 3 && <TagBox key={pos.tagId} tag={pos.body} padding="text-[14px] px-[12px] py-[8px]" margin="mx-[4px]" />)}
        </div>
      </div>
    </div>
  );
}
