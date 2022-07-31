/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import GlobalIcon from '../../../../Components/GlobalIcon';
import PositionTag from '../../../DetailPage/presentations/PositionTag';

interface Props {
    isOpen: boolean;
    data?: string;
    close: () => void;
}

function WorkDetailModal({
  isOpen,
  data,
  close,
}: Props) {
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
          className="pt-[44px] px-[32px] pb-[16px] bg-white rounded-xl w-[628px]  min-h-min z-30"
        >
          <button
            type="button"
            onClick={close}
            className="absolute grid place-items-center rounded-full top-6 right-6 w-[44px] h-[44px] bg-[#EEEEEE]"
          >
            <GlobalIcon.Closed />
          </button>
          <div className="flex items-center mb-6">
            <p className="text-[28px] font-bold">링크모음</p>
            <button
              type="button"
              className="flex border border-[#6457FA] text-[12px] text-[#6457FA] font-bold items-center px-[12px] py-[8px] rounded-[8px] ml-3"
            >
              추가하기
            </button>
          </div>

          <div className="flex items-center my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px]">노션</p>
            <div className="flex items-center">
              <p className="text-sm font-normal">https://...........................</p>
            </div>
          </div>
          <div className="flex items-center my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px]">노션</p>
            <div className="flex items-center">
              <p className="text-sm font-normal">https://...........................</p>
            </div>
          </div>

          <div className="flex items-center my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px]">노션</p>
            <div className="flex items-center">
              <p className="text-sm font-normal">https://...........................</p>
            </div>
          </div>

          <div className="flex items-center my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px]">노션</p>
            <div className="flex items-center">
              <p className="text-sm font-normal">https://...........................</p>
            </div>
          </div>

        </div>
        <div
          role="presentation"
          onClick={close}
          className="fixed w-screen h-screen top-0 left-0 bg-[#555555] opacity-30 z-20"
        />
      </>
    );
  }
  return null;
}

export default React.memo(WorkDetailModal);
