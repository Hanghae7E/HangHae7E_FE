/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import GlobalIcon from '../../../Components/GlobalIcon';
import PostCard from '../../../Components/PostCard';
import RecentPostCard from '../../../Components/RecentPostCard';
import TagBox from '../../../Components/TagBox';
import { IRecruitPages, IRecruitPost } from '../../../TypeInterface/postType';

export default function MainBody(
  {
    recruitPost,
    recommendPosts,
  }: {
      recruitPost: Array<IRecruitPages> | undefined,
      recommendPosts: Array<IRecruitPost>
  },
) {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-[1300px] mx-auto px-2 sm:px-6 lg:px-8 mt-[126px]">
      <div className="pt-1 pb-5 bg-white">
        <p className="font-bold text-2xl mb-[32px]">마감 임박 프로젝트</p>
        <div className="mx-auto items-center sm:justify-center overflow-hidden  flex overflow-x-auto sm:overflow ">
          {recommendPosts && recommendPosts.map(
            (data) => <RecentPostCard key={data.id} data={data} />,
          )}
        </div>
      </div>
      <div className=" w-full flex pt-5 pb-5 sticky top-0 bg-white py-3">
        <div className="flex flex-1 mr-5">
          <p className="flex font-bold text-2xl mr-5">프로젝트</p>
          {open && (
          <div className="flex flex-1 flex-wrap font-medium">
            <TagBox tag="ALL" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="Spring" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="1" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="2" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="백엔드" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="1" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="2" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="백엔드" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="1" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="2" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="백엔드" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="1" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="2" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="백엔드" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="1" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="2" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="백엔드" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="프론트엔드" text={14} py={8} px={12} mx={4} mb={16} />
            <TagBox tag="React" text={14} py={8} px={12} mx={4} mb={16} />
          </div>
          )}

          <GlobalIcon.DropDown onClick={() => setOpen(!open)} />
        </div>
        <div className="flex self-start w-1/3 items-center py-1 px-2 rounded-full border-inputGray border-2 box-border">

          <input className="py-1 px-1 outline-0 flex-1" type="text" name="search" />
          <label className=" box-border" htmlFor="search">
            <GlobalIcon.Search />
          </label>

        </div>

      </div>
      <div className="mx-auto items-center overflow-hidden flex flex-wrap mb-5 bg-white">

        {recruitPost && recruitPost.map((pages) => pages.postPage.map((data) => (
          <PostCard
            key={data.id}
            data={data}
          />
        )))}

      </div>
    </div>
  );
}
