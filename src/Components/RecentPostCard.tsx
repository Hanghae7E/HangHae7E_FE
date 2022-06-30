export default function RecentPostCard() {
  return (
    <div className="min-w-fit sm:w-1/3 hover:p-1 sm:h-56 min-h-min p-3  my-auto mx-auto box-border cursor-pointer">
      <img className="w-full h-4/6 object-fill" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826__340.jpg" alt="project" />
      <h4 className="my-1 font-semibold">프로젝트 제목</h4>
      <div className="flex box-border my-1">
        <div className="px-2 box-border border mr-2 my-1">Java</div>
        <div className="px-2 box-border border mr-2 my-1">Spring</div>
        <div className="px-2 box-border border mr-2 my-1">React</div>
      </div>
    </div>
  );
}
