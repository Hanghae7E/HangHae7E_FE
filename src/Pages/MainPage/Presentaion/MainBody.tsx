import PostCard from '../../../Components/PostCard';
import RecentPostCard from '../../../Components/RecentPostCard';

export default function MainBody() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
      <div className=" sticky top-0 bg-white -z-10">
        <p className="font-bold text-2xl my-5">최근 등록한 프로젝트</p>
        <div className="mx-auto items-center sm:justify-center border overflow-hidden flex overflow-x-auto sm:overflow">
          <RecentPostCard />
          <RecentPostCard />
          <RecentPostCard />
        </div>
      </div>
      <div className="flex pt-10 pb-5 items-center sticky top-0 bg-white py-3">
        <p className="flex font-bold text-2xl">프로젝트</p>
        <div className="flex flex-1 ml-5">
          <div className="hidden sm:flex py-1 w-20 items-center justify-center  border mx-2">ALL</div>
          <div className="hidden sm:flex py-1 w-20 items-center justify-center  border mx-2">Spring</div>
          <div className="hidden sm:flex py-1 w-20 items-center justify-center  border mx-2">React</div>
        </div>
        <div className="flex border ">
          <label htmlFor="search">
            검색
            <input className="ml-1 py-1 px-1" type="text" name="search" />
          </label>
        </div>

      </div>
      <div className="mx-auto items-center border overflow-hidden flex flex-wrap mb-5 bg-white">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />

      </div>
    </div>
  );
}
