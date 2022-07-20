import close from '../img/close.png';
import logo from '../img/logo.png';
import GlobalIcon from './GlobalIcon';

type textModalType={
  titles?:string[],
  messages?:string[],
  closeModal: () => void
}
export default function Login(data:textModalType) {
  const { titles, messages, closeModal } = data;
  const kakaoClick = () => {
    const KAKAO_AUTH_URL = 'http://huddledown.link/oauth2/authorization/kakao';
    window.location.replace(KAKAO_AUTH_URL);
  };
  const googleClick = () => {
    const GOOGLE_AUTH_URL = 'http://huddledown.link/oauth2/authorization/google';
    window.location.replace(GOOGLE_AUTH_URL);
  };
  return (
    <div className="flex w-full h-full fixed items-center justify-center bg-black/30 z-10">
      <div className="max-w-[410px] max-h-[370px] w-full h-full  bg-white  rounded-[16px]">
        <div className="modal-nav-area flex justify-end p-[24px]">
          <img src={logo} className="w-[139px] h-[39px] mr-[61px]" alt="logo" />
          <button
            type="button"
            className="w-[44px] h-[44px] m-0 p-0"
            onClick={closeModal}
          >
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="title-area flex flex-col items-center text-center pt-[9px]">
          {titles && titles.length > 1 && (
            titles.map((title) => (
              <p key={title} className="font-pre font-bold text-[20px] leading-[30px] ">{title}</p>
            ))
          )}
          {messages && messages.length > 1 && (
            messages.map((message) => (
              <p
                key={message}
                className="font-pre font-bold text-[20px]
              leading-[30px] "
              >
                {message}

              </p>
            ))
          )}
          <div className="flex align-middle items-center pt-[40px]">
            <hr className="h-[1px]  w-[80px]  flex-auto border-none  bg-[#CCCCCC] " />
            <p className="font-pre font-bold text-[16px] mx-4">
              회원가입
            </p>
            <hr className="h-[1px]  w-[80px] flex-auto border-none  bg-[#CCCCCC]" />
          </div>
        </div>
        <div className="flex flex-col items-center text-center pt-[18px] pb-[36px]">
          <button
            type="button"
            name="KAKAO"
            onClick={kakaoClick}
            className="flex px-4 items-center w-[300px] h-[45px] rounded-[4px]  ring-1 ring-yellow-500 bg-yellow-500 drop-shadow-xl"
          >
            <GlobalIcon.Kakao />
            <p className="w-full pr-[24px] font-pre font-normal text-[18]">
              카카오로 시작하기
            </p>
          </button>
          <button
            type="button"
            name="GOOGLE"
            onClick={googleClick}
            className="flex mt-[13px] px-4 items-center w-[300px] h-[45px] rounded-[4px] bg-white  ring-1 ring-[#CCCCCC] hover:ring-2 drop-shadow-xl"
          >
            <GlobalIcon.Google />
            <p className="w-full pr-[24px] font-pre font-normal text-[18]">
              구글로 시작하기
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
