/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import userAPi from '../Api/userAPi';
import { Iuser } from '../TypeInterface/userType';
import GlobalIcon from './GlobalIcon';

export default function NickNameModal({
  modalClose,
  userInfo,
}: {
    modalClose: any,
    userInfo: Iuser,
}) {
  const [nicknameCheck, setNicknameCheck] = useState(false);
  const [nicknameMessage, setNicknameMessage] = useState('');
  const [Input, setInput] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNicknameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
      setNicknameCheck(false);
    }
    if (e.target.value.length === 0) {
      setNicknameMessage(`입력하지 않으면 ${userInfo.username}이 닉네임으로 사용됩니다.`);
      setNicknameCheck(false);
    } else {
      setNicknameMessage('환영합니다 :)');
      setNicknameCheck(true);
      setInput(e.target.value);
    }
  };
  const query = useQueryClient();
  const changeNickName = useMutation((username:string) => userAPi.setMyName(username), {
    onSuccess: (v) => {
      console.log(v);
      query.invalidateQueries('get_userInfo');
      modalClose(false);
    },
  });
  async function savebtn() {
    if (Input) { changeNickName.mutate(Input); } else { changeNickName.mutate(userInfo.username); }
  }
  return (
    <div className="flex w-full h-full fixed items-center justify-center bg-black/30 z-10">
      <div className="modal-contents max-w-[410px] max-h-[494px]  px-[24px] py-[26px] bg-white  rounded-[16px]">
        <div className="modal-nav-area flex justify-end">
          <img src="/logo.svg" className="w-[139px] h-[39px] mr-[61px]" alt="logo" />
          <button
            type="button"
            className="w-[44px] h-[44px] m-0 p-0"
            onClick={modalClose}
          >
            <GlobalIcon.Closed2 />
          </button>
        </div>
        <div className="modal-inner flex-col justify-center text-center">
          <img
            className="w-[80px] h-[80px] mx-auto rounded-full"
            src="/profiledefault.svg"
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
            value={Input}
            onChange={handleInput}
          />
          {nicknameCheck === false && (<span>{nicknameMessage}</span>)}

          <button
            type="button"
            value="nickBtn"
            onClick={savebtn}
            className="w-[300px] h-[60px] rounded-[15px] mt-[60px] font-pre font-bold text-[20px] leading-[24px] bg-[#6457FA] text-white hover:bg-white hover:text-[#6457FA]  hover:border-2 hover:border-[#6457FA]"
          >
            이걸로 할께요!
          </button>
        </div>
      </div>
    </div>
  );
}
