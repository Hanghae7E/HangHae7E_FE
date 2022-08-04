import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import GlobalIcon from './GlobalIcon';

type textModalType={
    messages :string[],
    messageCSS?: string,
    replace?:string,
    modalClose: React.Dispatch<React.SetStateAction<boolean | number>>
  modalClose2?: React.Dispatch<React.SetStateAction<boolean | number>>
    deleteStatus?:boolean
}

export default function TextModal(ModalData: textModalType) {
  const {
    messages, modalClose, messageCSS, replace, modalClose2, deleteStatus,
  } = ModalData;
  const defaultModalCSS = 'w-1/2 h-fit pb-[50px] bg-white  rounded-[16px]';
  const defaultMessageCSS = messageCSS || 'font-pre font-semibold text-[22px] leading-[30px]';
  const nav = useNavigate();
  const goMypage = () => {
    nav('/mypage');
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
    <div className="modalBackground flex w-full h-full fixed bottom-0  items-center justify-center bg-black/30 z-10">
      <div className={defaultModalCSS}>
        {!messages[0].includes('작성') && (
          <button
            type="button"
            className="w-[44px]  h-[44px] float-right mr-3 mt-3"
            onClick={() => {
              modalClose(false);
              if (replace) {
                window.location.replace(replace);
              }
            }}
          >
            <GlobalIcon.Closed2 />
          </button>
        )}
        <div className="modalNav flex justify-center items-center py-10">

          <img src="/logo.svg" className={`w-[139px] h-[39px] ${!messages[0].includes('삭제') && !messages[0].includes('작성') && 'ml-[56px]'}`} alt="logo" />
        </div>
        <div className="modalContents flex-col justify-center text-center">
          {messages.map((messge) => (
            <p key={messge} className={defaultMessageCSS}>{messge}</p>
          ))}

        </div>
        {messages[0].includes('마이페이지') && (
        <div className="w-full mt-[50px] flex justify-end items-end">
          <button type="button" onClick={goMypage} className="flex w-60 border-[2px] text-[#6457FA] border-[#6457FA] py-5 rounded-xl justify-center bg-white font-semibold cursor-pointer  mr-4">이동하기</button>

        </div>
        )}
        {messages[0].includes('삭제') && (
        <div className="w-full mt-[50px] flex justify-center items-end">
          <button
            type="button"
            onClick={() => {
              if (modalClose2) {
                modalClose2(false);
                if (replace) {
                  window.location.replace(replace);
                }
              }
            }}
            className={`flex w-60 border-[2px] text-white ${deleteStatus ? 'border-[#cccccc]  bg-[#cccccc]' : 'border-[#6457FA]  bg-[#6457FA]'} py-5 rounded-xl justify-center font-semibold cursor-pointer  self-center`}
          >
            {deleteStatus ? '삭제중.. ' : '확인'}
          </button>
        </div>
        )}
        {messages[0].includes('작성') && (
        <div className="w-full mt-[50px] flex justify-center items-end">
          <button
            type="button"
            onClick={() => {
              modalClose(false);
              if (replace) {
                window.location.replace(replace);
              }
            }}
            className="flex w-60 border-[2px] text-white border-[#6457FA]  bg-[#6457FA] py-5 rounded-xl justify-center font-semibold cursor-pointer  self-center"
          >
            확인
          </button>
        </div>
        )}
        {messages[0].includes('마감') && (
        <div className="w-full mt-[50px] flex justify-center items-end">
          <button
            type="button"
            onClick={() => {
              if (modalClose2) {
                modalClose2(false);
                if (replace) {
                  window.location.replace(replace);
                }
              }
            }}
            className="flex w-60 border-[2px] text-white border-[#6457FA]  bg-[#6457FA] py-5 rounded-xl justify-center font-semibold cursor-pointer  self-center"
          >
            확인
          </button>
        </div>
        )}
      </div>
    </div>
  );
}
