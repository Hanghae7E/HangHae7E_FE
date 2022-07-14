/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { SetStateAction, useState } from 'react';
import GlobalIcon from '../../../Components/GlobalIcon';
import PostCard from '../../../Components/PostCard';
import RecentPostCard from '../../../Components/RecentPostCard';
import TagBox from '../../../Components/TagBox';
import { IRecruitPages, IRecruitPost, ITag } from '../../../TypeInterface/postType';

export default function MainBody(
  {
    recruitPost,
    recommendPosts,
    tagList,
    setSearchTag,
    refetch,
  }: {
      recruitPost: Array<IRecruitPages> | undefined,
      recommendPosts: Array<IRecruitPost>,
      tagList: Array<ITag>,
      setSearchTag: React.Dispatch<SetStateAction<number>>,
      refetch: Function,
  },
) {
  const [open, setOpen] = useState(false);
  const [searchTagList, setSearchTagList] = useState<Array<ITag>>([]);

  const adTag = (tag: ITag) => {
    // if (searchTagList.includes(tag)) {
    //   setSearchTagList(searchTagList.filter((data) => data.body !== tag.body));
    // } else if (searchTagList.length < 1) {
    //   setSearchTagList([...searchTagList, tag]);
    // }
    setSearchTagList([tag]);
  };
  const searchTag = async (tag: Array<ITag>) => {
    const tags = tag.map((v) => v.tagId).join();
    setSearchTag(Number(tags));
  };
  return (
    <div className="max-w-[1350px] mx-auto px-2 sm:px-6 lg:px-8 mt-[126px]">
      <div className="pt-1 pb-5 bg-white">
        <p className="font-bold text-2xl mb-[32px]">마감 임박 프로젝트</p>
        <div className="mx-auto items-center gap-[24px] overflow-hidden  flex overflow-x-auto sm:overflow ">
          {recommendPosts && recommendPosts.map(
            (data) => <RecentPostCard key={data.postId} data={data} />,
          )}
        </div>
      </div>
      <div className=" w-full flex pt-5 pb-5 sticky top-0 bg-white py-3">
        <div className="flex flex-1 mr-5 relative items-center">
          <p className="flex font-bold text-2xl mr-5">프로젝트</p>
          <div className="flex items-center justify-center">
            <span className="pr-3">관심분야</span>
            {' | '}
            <div className="flex mx-[12px]">
              {searchTagList.length > 0 ? searchTagList.map((tag) => <TagBox key={tag.tagId} tag={tag.body} padding="text-[14px] py-[8px] px-[12px]" margin="ml-[4px] mr-[4px]" />)
                : <span className="px-3">전체</span>}
            </div>
          </div>
          {!open
            ? <GlobalIcon.DropDown onClick={() => setOpen(!open)} />
            : <GlobalIcon.DropUp onClick={() => setOpen(!open)} />}
          {open && (
            <section className="font-medium w-[1010px] absolute top-16 z-50 bg-white border-[2px] border-inputGray pl-[32px] pt-[32px]">
              <div className="p-[8px] pb-[12px]">관심 붙야를 선택해 주세요. (최대 4개 선택 가능)</div>
              <div className="flex flex-wrap">
                {tagList.map((tag) => <TagBox onClick={() => adTag(tag)} key={tag.tagId} hover="hover:border-developer hover:box-border" selected={searchTagList.includes(tag)} tag={tag.body} padding="text-[14px] py-[8px] px-[12px]" margin="ml-[4px] mr-[4px] mb-[16px]" />)}
              </div>
              <hr className="text-inputGray h-[2px]" />
              <div className="flex justify-end">
                <button onClick={() => setSearchTagList([])} type="button" className="m-[20px] flex justify-center items-center">
                  <GlobalIcon.Refresh />
                  <span className="pl-[8px] text-[14px]">초기화</span>

                </button>
                <button
                  onClick={() => {
                    searchTag(searchTagList).then(async () => {
                      const data = await refetch();
                      setOpen(!open);
                      return data;
                    });
                  }}
                  type="button"
                  className="flex  border box-border border-developer py-[10px] px-[60px] rounded-[16px] justify-center bg-developer text-white text-[20px] font-semibold cursor-pointer m-[20px]"
                >
                  선택 완료

                </button>
              </div>
            </section>
          )}
        </div>
        <div className="flex self-start w-1/3 items-center py-1 px-2 rounded-full border-inputGray border-2 box-border">

          <input className="py-1 px-1 outline-0 flex-1" type="text" name="search" />
          <label className=" box-border" htmlFor="search">
            <GlobalIcon.Search />
          </label>

        </div>

      </div>
      <div className="mx-auto items-center overflow-hidden flex flex-wrap mb-5 mt-[40px] gap-[23px] bg-white">

        {recruitPost && recruitPost.map((pages) => pages.postPage.map((data) => (
          <PostCard
            key={data.postId}
            data={data}
          />
        )))}

      </div>
    </div>
  );
}
