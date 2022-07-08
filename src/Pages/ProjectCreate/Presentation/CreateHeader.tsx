import Haederbar from '../../../Components/Haederbar';

export default function CreateHeader() {
  return (
    <>
      <Haederbar />
      <div className="bg-sky-300 box-border">
        <img className="w-full object-fill max-h-72" src="https://cdn.pixabay.com/photo/2016/05/03/09/40/thunder-1368797__340.jpg" alt="default이미지" />
      </div>
    </>
  );
}
