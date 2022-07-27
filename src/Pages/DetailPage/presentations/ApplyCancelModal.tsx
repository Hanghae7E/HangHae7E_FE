/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React from 'react';
import DetailIcon from './DetailIcon';

interface Props {
    isOpen: boolean;
    text?: string;
    userId:number;
    userImg:string;
    close: () => void;
    onClickCancle: (userId?:number) => void
}

function ApplyCancelModal({
  isOpen,
  text,
  userId,
  userImg,
  close,
  onClickCancle,
}: Props) {
  const ApplyCancelApplicant = () => {
    onClickCancle(userId);
    close();
  };
  if (isOpen) {
    return (
      <>
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          className="pt-[51px] px-[68px] pb-[50px] text-center bg-white rounded-xl w-[520px] h-[400px] z-10"
        >
          <button
            type="button"
            onClick={close}
            className="absolute grid place-items-center rounded-full top-6 right-6 w-[44px] h-[44px] bg-[#EEEEEE]"
          >
            <DetailIcon.Cancel />
          </button>
          <img className="w-[110px] h-[110px] mx-auto rounded-full " alt="프로필 이미지" src={userImg || '/profiledefault.svg'} />
          <p className="text-[24px] font-bold mt-5 mb-5">
            함께 하기로 한
            <br />
            {text}
            님을 취소 하시겠어요?
          </p>
          <p className="text-[12px] font-bold my-5 text-red-500"> 거절된 신청자는 다시 신청 할 수 없습니다 </p>
          <div>
            <button
              onClick={ApplyCancelApplicant}
              className="mr-4 w-[184px] border-[1px] border-solid border-[#6457FA] text-[#6457FA] font-bold rounded-lg py-4"
              type="button"
            >
              네 아쉽지만, 취소 할게요.
            </button>
          </div>
        </div>
        <div
          role="presentation"
          onClick={close}
          className="fixed w-screen h-screen top-0 left-0 bg-[#555555] opacity-30"
        />
      </>
    );
  }
  return null;
}

export default React.memo(ApplyCancelModal);
