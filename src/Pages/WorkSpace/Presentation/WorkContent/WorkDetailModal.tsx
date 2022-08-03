/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import GlobalIcon from '../../../../Components/GlobalIcon';
import PositionTag from '../../../DetailPage/presentations/PositionTag';
import WorkSpaceTag from '../../../DetailPage/presentations/WorkSpaceTag';

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
          className="pt-[44px] px-[32px] pb-[50px] bg-white rounded-xl w-[628px]  min-h-min z-30"
        >
          <button
            type="button"
            onClick={close}
            className="absolute grid place-items-center rounded-full top-6 right-6 w-[44px] h-[44px] bg-[#EEEEEE]"
          >
            <GlobalIcon.Closed />
          </button>
          <p className="text-[28px] font-bold mb-6">와이어프레임 1차 완료</p>
          <div className="flex items-center my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px]">작업상태</p>
            <div className="flex items-center gap-3">
              <PositionTag position="예정" propsClassname="px-[17.5px] py-[8px] rounded-[4px] bg-[#E8EDF4] text-[12px] font-bold" />
              <PositionTag position="진행중" propsClassname="px-[17.5px] py-[8px] rounded-[4px] bg-[#E8EDF4] text-[12px] font-bold" />
              <PositionTag position="완료" propsClassname="px-[17.5px] py-[8px] rounded-[4px] bg-[#E8EDF4] text-[12px] font-bold" />
            </div>
          </div>
          <div className="flex items-center my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px]">작성자</p>
            <div className="flex items-center gap-[6px]">
              <img className="w-8 h-8" src="/profiledefault.svg" alt="작성자프로필" />
              <p className="text-sm font-normal">룰루랄라조로</p>
              <WorkSpaceTag
                position="개발자"
                propsClassname="bg-[#ffffff] border border-[#333333]  font-medium text-[10px] text-[#333333] rounded-[4px] px-[8px] py-[4px] whitespace-nowrap mx-[8px] leading-[11.93px}"
              />
            </div>
          </div>
          <div className="flex items-center my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px]">담당자</p>
            <div className="flex items-center gap-[6px]">
              <img className="w-8 h-8" src="/profiledefault.svg" alt="작성자프로필" />
              <p className="text-sm font-normal">룰루랄라조로</p>
              <WorkSpaceTag
                position="개발자"
                propsClassname="bg-[#ffffff] border border-[#333333]  font-medium text-[10px] text-[#333333] rounded-[4px] px-[8px] py-[4px] whitespace-nowrap mx-[8px] leading-[11.93px}"
              />
            </div>
          </div>
          <div className="flex items-center my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px]">생성일</p>
            <div className="flex items-center">
              <p className="text-sm font-normal">2022.07.27</p>
            </div>
          </div>
          <div className="flex items-center my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px]">완료예정일</p>
            <div className="flex items-center">
              <p className="text-sm font-normal">2022.08.04</p>
            </div>
          </div>
          <div className="flex flex-col my-6">
            <p className="text-[14px] font-bold  w-full max-w-[93px] mb-5">설명</p>
            <div className="flex items-center border-[2px] p-4 max-w-[564px] rounded-[8px]">
              <p className="text-sm font-normal whitespace-pre-wrap">
                하는 때까지 하였으며, 이것이다. 이상은 살았으며, 그들을 인간에 불어 방황하였으며,
                <br />
                인간의 때에, 바로 이것이다. 발휘하기 것이다.보라, 이상, 구하기 생생하며, 더운지라
                <br />
                구하지 광야에서 듣는다.
                <br />
                그것을 되는 우리는 구할 품으며, 피가 주는 사라지지 것이다.
                <br />
                꽃이 우는 커다란 있는 인간에 뜨고, 구하기 때까지 때문이다.
                <br />
                <br />
                사람은 우리의 청춘의 내는 뿐이다.

              </p>
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
