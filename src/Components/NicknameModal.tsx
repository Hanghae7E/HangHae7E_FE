import { ChangeEventHandler, useState } from 'react';
import { useQuery } from 'react-query';
import userAPi from '../Api/userAPi';
import { Iprofile } from '../TypeInterface/userType';
import close from '../img/close.png';
import logo from '../img/logo.png';
import profile from '../img/profile.png';
import { useNavigate } from 'react-router-dom';

export default function NickNameModal({ modalClose, user }: { modalClose: any, user: Iprofile }) {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [username, setUsername] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setUsername(input)
    //유효성검사
  };
  function savebtn() {
    user.username = username
    user.phone_number = "010-0000-0000"
    userAPi.setMyInfo(user, token).then((res) => {
      navigate('/')
    })
  }
  return (
    <div className="flex w-full h-full fixed items-center justify-center bg-black/30 z-10">
      <div className="modal-contents max-w-[410px] max-h-[494px]  px-[24px] py-[26px] bg-white  rounded-[16px]">
        <div className="modal-nav-area flex justify-end">
          <img src={logo} className="w-[139px] h-[39px] mr-[61px]" alt="logo" />
          <button
            type="button"
            className="w-[44px] h-[44px] m-0 p-0"
            onClick={modalClose}>
            <img src={close} className="rounded-full" alt="close" />
          </button>
        </div>
        <div className="modal-inner flex-col justify-center text-center">
          <img
            className="w-[80px] h-[80px] mx-auto rounded-full"
            src={profile}
            alt="userImage"
          />
          <p className="font-pre font-bold text-[16px] leading-[19px] pt-[15px] ">
            환영합니다.
          </p>
          <p className="font-pre font-normal text-[18px] leading-[21px] pt-[40px] ">
            허들업에서 사용할 닉네임을 알려주세요.
          </p>
          <input
            className="w-[300px] h-[50px] mt-[12px] pl-[20px] border-2 border-[#EEEEEE] rounded-[8px] font-pre font-normal text-[18px] leading-[21px] placeholder:text-[#CCCCCC] text-black"
            type="text"
            placeholder="ex)룰루랄라조로"
            value={username}
            onChange={handleInput}
          />
          <button
            type="button"
            value="nickBtn"
            onClick={savebtn}
            className="w-[300px] h-[60px] rounded-[15px] mt-[60px] font-pre font-bold text-[20px] leading-[24px] bg-[#6457FA] text-white hover:bg-white hover:text-[#6457FA]  hover:border-2 hover:border-[#6457FA]">
            이걸로 할께요!
          </button>
        </div>
      </div>
    </div>
  );
}
