import Haederbar from '../../../Components/Haederbar';

export default function CreateHeader() {
  return (
    <>
      <Haederbar />
      <div className="box-border bg-[#fbf2d3]">
        <img className="w-full object-fill max-h-72" src="headerImg.svg" alt="default이미지" />
      </div>
    </>
  );
}
