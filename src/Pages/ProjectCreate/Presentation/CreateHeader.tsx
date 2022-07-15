import Haederbar from '../../../Components/Haederbar';
import { Iprofile } from '../../../TypeInterface/userType';

export default function CreateHeader({ userInfo }:{ userInfo: Iprofile }) {
  return (
    <>
      <Haederbar userInfo={userInfo} />
      <div className="box-border bg-[#fbf2d3]">
        <img className="w-full object-fill max-h-72" src="headerImg.svg" alt="default이미지" />
      </div>
    </>
  );
}
