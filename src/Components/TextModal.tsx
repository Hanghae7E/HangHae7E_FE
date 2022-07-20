import logo from '../img/logo.png';
import close from '../img/close.png';

interface IModalData{
    messages :string[],
    messageCSS?:string,
    modalClose: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TextModal(ModalData: IModalData) {
  const {
    messages, modalClose, messageCSS,
  } = ModalData;
  const defaultModalCSS = 'w-1/2 h-fit pb-20 bg-white  rounded-[16px]';
  const defaultMessageCSS = messageCSS || 'font-pre font-semibold text-[22px] leading-[30px]';
  return (
    <div className="modalBackground flex w-full h-full fixed items-center justify-center bg-black/30 z-10">
      <div className={defaultModalCSS}>
        <button
          type="button"
          className="w-[44px]  h-[44px] float-right mr-3 mt-3"
          onClick={() => (modalClose)}
        >
          <img src={close} className="rounded-full" alt="close" />
        </button>
        <div className="modalNav flex justify-around items-center py-10">
          <img src={logo} className="w-[139px] h-[39px] ml-[56px]" alt="logo" />
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
