/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import PostCard from '../../../Components/PostCard';
import RecentPostCard from '../../../Components/RecentPostCard';
import SearchClickTag from '../../../Components/SearchClickTag';
import SearchTag from '../../../Components/SearchTag';
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
    <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-10 ">
      <div className="pt-1 pb-5 bg-white">
        <p className="font-bold text-2xl my-5">마감 임박 프로젝트</p>
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
          <div className="flex flex-1 flex-wrap">
            <SearchClickTag tag="ALL" />
            <SearchClickTag tag="Spring" />
            <SearchClickTag tag="React" />
            <SearchClickTag tag="프론트엔드" />
            <SearchClickTag tag="백엔드" />
            <SearchClickTag tag="개발자" />
            <SearchClickTag tag="디자이너" />
            <SearchClickTag tag="백엔드" />
            <SearchClickTag tag="개발자" />
            <SearchClickTag tag="디자이너" />
            <SearchClickTag tag="백엔드" />
            <SearchClickTag tag="개발자" />
            <SearchClickTag tag="디자이너" />
            <SearchClickTag tag="백엔드" />
            <SearchClickTag tag="개발자" />
            <SearchClickTag tag="디자이너" />
            <SearchClickTag tag="백엔드" />
            <SearchClickTag tag="개발자" />
            <SearchClickTag tag="디자이너" />
          </div>
          )}
          <button
            type="button"
            className="text-center py-1 focus:outline-none self-start"
            onClick={() => setOpen(!open)}
          >
            <img src="/dropDownImg.svg" alt="dropdown" />
          </button>
        </div>
        <div className="flex self-start w-1/3 items-center py-1 px-2 rounded-full border-inputGray border-2 box-border">

          <input className="py-1 px-1 outline-0 flex-1" type="text" name="search" />
          <label className=" box-border" htmlFor="search">
            <img src="/searchBtn.svg" alt="search" />
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
