import Header from '../../Components/Haeder';

export default function MainPagePresenter() {
  return (
    <div>
      <Header />
      <div className="bg-sky-300 box-border">
        <img className="w-full object-fill max-h-96" src="https://cdn.pixabay.com/photo/2022/06/03/09/25/laptop-7239719__340.jpg" alt="default이미지" />
      </div>
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
        최근 등록한 프로젝트
      </div>
    </div>
  );
}
