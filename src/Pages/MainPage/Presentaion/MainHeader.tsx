import Haederbar from '../../../Components/Haederbar';

export default function MainHeader() {
  return (
    <>
      <Haederbar />
      <div className="box-border bg-[#fbf2d3]">
        <img className="w-full object- max-h-96" src="/mainHeaderImg.svg" alt="default이미지" />
      </div>
    </>
  );
}
