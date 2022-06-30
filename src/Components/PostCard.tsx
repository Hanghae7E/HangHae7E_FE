export default function PostCard() {
  return (
    <div className="min-w-full sm:min-w-min w-1/3 h-min min-h-min border p-3 my-3 box-border hover:p-1 cursor-pointer">
      <div className="flex border p-2">
        <div className="flex items-center mb-1">
          <img className="w-9 h-9 rounded-3xl object-fill" src="https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708__340.jpg" alt="project" />
          <div className="ml-2">
            <p className="my-0 py-0 font-semibold">유저네임</p>
            <span className="my-0 py-0 font-light text-xs text-gray-400">자기소개</span>
          </div>
        </div>
      </div>
      <img className="w-full h-4/6 object-fill" src="https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708__340.jpg" alt="project" />
      <h4 className="my-3 font-semibold">프로젝트 제목</h4>
      <div className="flex box-border my-1">
        <div className="px-2 box-border border mr-2 my-1">Java</div>
        <div className="px-2 box-border border mr-2 my-1">Spring</div>
        <div className="px-2 box-border border mr-2 my-1">React</div>
      </div>
    </div>
  );
}
