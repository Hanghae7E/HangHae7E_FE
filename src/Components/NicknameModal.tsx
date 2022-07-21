/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import userAPi from '../Api/userAPi';
import { Iprofile } from '../TypeInterface/userType';
import close from '../img/close.png';
import logo from '../img/logo.png';
import profile from '../img/profile.png';

export default function NickNameModal({
  modalClose,
  userInfo,
}: {
  modalClose: any,
  userInfo: Iprofile,
}) {
  const token = localStorage.getItem('token');

  const [users, setUsers] = useState<Iprofile>(userInfo);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setUsers({
      ...userInfo,
      username: input,
      phone_number: '010-0000-0000',
    });
    // 유효성검사
  };
  const query = useQueryClient();
  const changeNickName = useMutation((user:Iprofile) => userAPi.setMyName(user), {
    onSuccess: (v) => {
      console.log(v);
      query.invalidateQueries('get_userInfo');
      modalClose(false);
    },
  });
  async function savebtn() {
    if (users?.username) {
      changeNickName.mutate(users);
    }
  }
  return (
    <div className="flex w-full h-full fixed items-center justify-center bg-black/30 z-10">
      <div className="nickNameModal pc:max-w-[386px] pc:max-h-[494px]  max-w-[336px] pc:pt-6 pc:pb-10 px-3 pt-4 pb-10  bg-white  rounded-[16px]">
        <button
          type="button"
          className="w-9 h-9 pc:w-[44px] pc:h-[44px] float-right"
        >
          <img src={close} className="rounded-full" alt="close" />
        </button>
        <div className="ml-4 pc:ml-[44px]">
          <img src={logo} className="w-[86px] h-[19px] pc:w-[139px] pc:h-[39px] mx-auto pc:mt-6 mt-6" alt="logo" />
        </div>

        <div className="modal-inner flex-col justify-center text-center  pc:px-[24px] mt-6 pc:mt-[30px]">
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
            value={users?.username}
            onChange={handleInput}
          />
          <button
            type="button"
            value="nickBtn"
            onClick={savebtn}
            className="w-[300px] h-[60px] rounded-[15px] pc:mt-[60px] mt-[28px] font-pre font-bold text-[20px] leading-[24px] bg-[#6457FA] text-white hover:bg-white hover:text-[#6457FA]  hover:border-2 hover:border-[#6457FA]"
          >
            이걸로 할께요!
          </button>
        </div>
      </div>
    </div>
  );
}
