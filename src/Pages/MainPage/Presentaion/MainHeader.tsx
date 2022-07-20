import Haederbar from '../../../Components/Haederbar';
import { Iuser } from '../../../TypeInterface/userType';

export default function MainHeader({ userInfo }:{ userInfo: Iuser }) {
  return (
    <>
      <Haederbar userInfo={userInfo} />
      <div className="box-border bg-[#fbf2d3]">
        <img className="w-full object- max-h-96" src="/mainHeaderImg.svg" alt="default이미지" />
      </div>
    </>
  );
}
