/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
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
  const [enterPress, setEnterPress] = useState(false);
  const [Input, setInput] = useState('');
  const navigator = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setNicknameMessage(`입력하지 않으면 ${userInfo.username}이(가) 닉네임으로 사용됩니다.`);
      setNicknameCheck(false);
      setInput(e.target.value);
    } else if (e.target.value.length < 2) {
      setNicknameMessage('2글자 이상 6글자 이하으로 입력해주세요.');
      setNicknameCheck(false);
      setInput(e.target.value);
    } else if (e.target.value.length > 6) {
      setNicknameMessage('2글자 이상 6글자 이하으로 입력해주세요.');
      setNicknameCheck(false);
    } else {
      setInput(e.target.value);
      setNicknameMessage(` ${e.target.value}님 환영합니다 :)`);
      setNicknameCheck(true);
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

  const goToProfile = () => {
    navigator('/mypage', { replace: true });
  };
  async function savebtn() {
    if (nicknameCheck) {
      changeNickName.mutate(Input);
    } else if (Input === '') { changeNickName.mutate(userInfo.username); }
  }
  const onKeyUp = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.length === 0) {
        setNicknameMessage(`입력하지 않으면 ${userInfo.username}이(가) 닉네임으로 사용됩니다.`);
        setInput(e.currentTarget.value);
        setEnterPress(true);
        setNicknameCheck(false);
      } else if (e.currentTarget.value.length < 2) {
        setNicknameMessage('2글자 이상 6글자 이하으로 입력해주세요.');
        setNicknameCheck(false);
        setInput(e.currentTarget.value);
      } else if (e.currentTarget.value.length > 6) {
        setNicknameMessage('2글자 이상 6글자 이하으로 입력해주세요.');
        setNicknameCheck(false);
      } else {
        setInput(e.currentTarget.value);
        setNicknameMessage(` ${e.currentTarget.value}님 환영합니다 :)`);
        setNicknameCheck(true);
        setEnterPress(true);
      }
    }
    if (e.key === 'Enter' && enterPress) {
      savebtn();
    }
  };
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return (
    <div className="flex w-full h-full fixed items-center justify-center bg-black/30 z-10">
      <div className="modal-contents max-w-[410px] max-h-[494px]  px-[24px] py-[26px] bg-white  rounded-[16px]">
        <div className="modal-nav-area flex justify-end">
          <div className="w-[139px] h-[39px] mr-[61px] object-fill">
            <img src="logo.svg" alt="logo" />
          </div>
          <button
            type="button"
            className="w-[44px] h-[44px] m-0 p-0"
            onClick={modalClose}
          >
            <GlobalIcon.Closed2 />
          </button>
        </div>
        <div className="modal-inner flex-col justify-center text-center items-center">
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
          <form onSubmit={savebtn}>
            <input
              className="w-[300px] h-[50px]  mt-[12px] pl-[20px] border-2 border-[#EEEEEE] rounded-[8px] font-pre font-normal text-[18px] leading-[21px] placeholder:text-[#CCCCCC] text-black"
              type="text"
              placeholder="ex)룰루랄라조로"
              onKeyUp={onKeyUp}
              value={Input}
              onChange={handleInput}
            />
            <input type="text" hidden />
          </form>
          {nicknameCheck === false && (<span className="text-red-400 text-sm">{nicknameMessage}</span>)}
          <div>
            <button
              type="button"
              value="nickBtn"
              onClick={savebtn}
              className="min-w-[140px] h-[60px] rounded-[15px] w-full pc:mt-5 mt-6 font-pre font-bold text-[20px] leading-[24px]  bg-white text-[#6457FA]  border-2 border-1 border-[#6457FA] hover:bg-[#6457FA] hover:text-white "
            >
              이걸로 할께요!
            </button>
            <button
              type="button"
              onClick={goToProfile}
              className="min-w-[140px] h-[60px] rounded-[15px] w-full pc:mt-2 mt-2 mb-2px font-pre font-bold text-[20px] leading-[24px] bg-[#eeeeee] text-[#cccccc]  hover:bg-[#6457FA] hover:text-white "
            >
              프로필 수정하러 가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
