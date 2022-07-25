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
      <div className="max-w-[336px] max-h-[347px] rounded-lg sm:max-w-[410px] sm:max-h-[370px] w-full h-full bg-white sm:rounded-[16px]">
        <button
          type="button"
          className="w-9 h-9 sm:w-[44px] sm:h-[44px] float-right mr-4 mt-4"
          onClick={closeModal}
        >
          <GlobalIcon.Closed2 />
        </button>
        <div className="modalNav flex justify-around items-center p-[24px]">
          <img src="/logo.svg" className="w-[86px] h-[19px] ml-[52px] sm:w-[139px] sm:h-[39px] sm:ml-[68px]" alt="logo" />
        </div>
        <div className="title-area flex flex-col items-center text-center pt-[9px]">
          {titles && titles.length >= 1 && (
            titles.map((title) => (
              <p key={title} className="font-pre font-bold text-[20px] leading-[30px] ">{title}</p>
            ))
          )}
          {messages && messages.length >= 1 && (
            messages.map((message) => (
              <p
                key={message}
                className="font-pre font-normal text-[20px]
              leading-[30px] "
              >
                {message}

              </p>
            ))
          )}
          <div className="flex align-middle items-center mt-7 sm:mt-[40px]">
            <hr className="h-[1px]  w-[110px]  flex-auto border-none  bg-[#CCCCCC] " />
            <p className="font-pre font-bold text-[16px] mx-[18px] sm:mx-3 ">
              시작하기
            </p>
            <hr className="h-[1px]  w-[110px] flex-auto border-none  bg-[#CCCCCC]" />
          </div>
        </div>
        <div className="flex flex-col items-center text-center sm:mb-10 mb-10">
          <button
            type="button"
            name="KAKAO"
            onClick={kakaoClick}
            className="flex sm:mt-[18px] mt-5  px-4 items-center w-80 sm:w-[300px] h-[45px] rounded-[4px]  ring-1 ring-yellow-500 bg-yellow-500 drop-shadow-xl"
          >
            <GlobalIcon.Kakao />
            <p className="w-full pr-[24px] font-pre font-normal text-[18px]">
              카카오로 시작하기
            </p>
          </button>
          <button
            type="button"
            name="GOOGLE"
            onClick={googleClick}
            className="flex mt-3 px-4 items-center w-80 sm:w-[300px] h-[45px] rounded-[4px] bg-white  ring-1 ring-[#CCCCCC] hover:ring-2 drop-shadow-xl"
          >
            <GlobalIcon.Google />
            <p className="w-full pr-[24px] font-pre font-normal text-[18px]">
              구글로 시작하기
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
