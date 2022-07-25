import { IRecruitPost, ITag } from '../TypeInterface/postType';
import TagBox from './TagBox';

export default function RecentPostCard({ data }: { data: IRecruitPost }) {
  const recruitDueDate = () => {
    const result = data.recruitDueTime.split('-');
    return `${result[1]}/${result[2]}마감`;
  };
  return (
    <div className="w-[33%] min-w-[200px] lg:w-[411px] h-[207px] lg:h-[367px] rounded-[8px] lg:rounded-[24px]  overflow-hidden box-border relative cursor-pointer">
      <div className="flex w-[64px] h-[24px] lg:w-[100px] lg:h-[44px] text-white bg-black font-medium text-[12px] lg:text-[14px] absolute justify-center items-center">
        <p className="justify-center items-center">{data.recruitDueTime && recruitDueDate()}</p>
      </div>
      <img className="w-full min-w-[200px] lg:w-[410px] h-[117px] lg:h-[240px] rounded-[8px] lg:rounded-[24px] object-fill md:object-cover lg:object-fill m-0" src={data.projectImage ? data.projectImage : '/defaulimg.svg'} alt="project" />
      <p className="my-[12px] lg:my-[16px] font-bold text-[14px] lg:text-[24px]">{data.title}</p>
      <div className="flex justify-between">
        <div className="flex flex-nowrap box-border my-1 overflow-hidden  font-medium">
          {data.tags.length >= 1 && data.tags.map((pos:ITag, i:number) => i < 3 && <TagBox key={pos.tagId} tag={pos.body} padding="text-[12px] lg:text-[14px] px-[8px] lg:px-[12px] py-[6px] lg:py-[8px]" margin="mx-[4px]" />)}
        </div>
      </div>
    </div>
  );
}
