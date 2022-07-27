import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalIcon from './GlobalIcon';

type textModalType={
    messages :string[],
    messageCSS?: string,
    replace?:string,
    modalClose: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TextModal(ModalData: textModalType) {
  const {
    messages, modalClose, messageCSS, replace,
  } = ModalData;
  const defaultModalCSS = 'w-1/2 h-fit pb-20 bg-white  rounded-[16px]';
  const defaultMessageCSS = messageCSS || 'font-pre font-semibold text-[22px] leading-[30px]';
  const nav = useNavigate();
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
        <button
          type="button"
          className="w-[44px]  h-[44px] float-right mr-3 mt-3"
          onClick={() => {
            modalClose(false);
            if (replace) {
              nav(replace);
            }
          }}
        >
          <GlobalIcon.Closed2 />
        </button>
        <div className="modalNav flex justify-around items-center py-10">

          <img src="/logo.svg" className="w-[139px] h-[39px] ml-[56px]" alt="logo" />
        </div>
        <div className="modalContents flex-col justify-center text-center">
          {messages.map((messge) => (
            <p key={messge} className={defaultMessageCSS}>{messge}</p>
          ))}

        </div>
      </div>
    </div>
  );
}
