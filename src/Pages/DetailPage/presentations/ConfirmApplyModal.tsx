/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React from 'react';
import DetailIcon from './DetailIcon';

interface Props {
    isOpen: boolean
    text?: string
    userId:number
    close: () => void;
    onClickAccept: (userId?:number) => void
  onClickReject: (userId?:number) => void
}

function ConfirmApplyModal({
  isOpen,
  text,
  userId,
  close,
  onClickAccept,
  onClickReject,
}: Props) {
  const acceptApplicant = () => {
    onClickAccept(userId);
    close();
  };
  const rejectApplicant = () => {
    onClickReject(userId);
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
          className="pt-[51px] px-[68px] pb-[50px] text-center bg-white rounded-xl w-[520px] h-[362px] z-10"
        >
          <button
            type="button"
            onClick={close}
            className="absolute grid place-items-center rounded-full top-6 right-6 w-[44px] h-[44px] bg-[#EEEEEE]"
          >
            <DetailIcon.Cancel />
          </button>
          <img className="w-[110px] h-[110px] mx-auto" alt="프로필 이미지" src="/profiledefault.svg" />
          <p className="text-[24px] font-bold mt-[20px] mb-[40px]">
            {text}
            님과 프로젝트를 함께 하시겠어요?
          </p>
          <div>
            <button
              onClick={rejectApplicant}
              className="mr-4 w-[184px] border-[1px] border-solid border-[#6457FA] text-[#6457FA] font-bold rounded-lg py-4"
              type="button"
            >
              아쉽지만, 다음에 할게요.
            </button>
            <button
              onClick={acceptApplicant}
              className="w-[184px] bg-[#6457FA] text-white text-bold rounded-lg py-4"
              type="button"
            >
              좋아요, 함께 할게요!
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

export default React.memo(ConfirmApplyModal);
