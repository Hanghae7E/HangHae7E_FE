/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { IRecruitPost, ITag } from '../TypeInterface/postType';
import TagBox from './TagBox';

export default function RecentPostCard({ data }: { data: IRecruitPost }) {
  const nav = useNavigate();
  const recruitDueDate = () => {
    const result = data.recruitDueTime.split('-');
    return `${result[1]}/${result[2]}마감`;
  };
  const goCardDetail = () => {
    nav(`/detail/${data.postId}`);
    // nav(`/projectupdate/${data.postId}`, {
    //   state: {
    //     body: 'adsadasds',
    //     imageUrl: 'https://huddle-up-image.s3.ap-northeast-2.amazonaws.com/images/recruitPosts/1.jpg',
    //     postId: 1,
    //     projectEndTime: '2022-08-25',
    //     projectStartTime: '2022-08-09',
    //     recruitDueTime: '2022-07-20',
    //     requiredDesigners: 2,
    //     requiredDevelopers: 2,
    //     requiredProjectManagers: 2,
    //     tags: [
    //       { tagId: 13, body: 'spring' },
    //       { tagId: 27, body: 'react' },
    //       { tagId: 10, body: 'aws' },
    //     ],
    //     title: 'testestestet',
    //     userId: 3,
    //   },
    // });
  };
  return (
    <div className="w-[33%] min-w-[200px] lg:w-[411px] h-[207px] lg:h-[367px] rounded-[8px] lg:rounded-[24px]  overflow-hidden box-border relative cursor-pointer" onClick={goCardDetail}>
      <div className="flex w-[64px] h-[24px] lg:w-[100px] lg:h-[44px] text-white bg-black font-medium text-[12px] lg:text-[14px] absolute justify-center items-center">
        <p className="justify-center items-center">{data.recruitDueTime && recruitDueDate()}</p>
      </div>
      <img className="w-full min-w-[200px] lg:w-[410px] h-[117px] lg:h-[240px] rounded-[8px] lg:rounded-[24px] object-fill md:object-cover lg:object-fill m-0" src={data.projectImage ? `${data.projectImage}?${Math.random()}` : '/defaulimg.svg'} alt="project" />
      <p className="my-[12px] lg:my-[16px] font-bold text-[14px] lg:text-[24px]">{data.title}</p>
      <div className="flex justify-between">
        <div className="flex flex-nowrap box-border my-1 overflow-hidden  font-medium">
          {data.tags.length >= 1 && data.tags.map((pos:ITag, i:number) => i < 3 && <TagBox key={pos.tagId} tag={pos.body} padding="text-[12px] lg:text-[14px] px-[8px] lg:px-[12px] py-[6px] lg:py-[8px]" margin="mx-[4px]" />)}
        </div>
      </div>
    </div>
  );
}
