import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigation = useNavigate();
  return (
    <>
      <title>Huddle UP | NotFound</title>
      <div className="w-full h-screen fixed z-[9999] bg-[#ffffff] dark:bg-7 flex justify-center items-center flex-col space-y-10">
        <img width={325} height={319} src="../logo.svg" alt="" />
        <span className="text-3xl">잘못된 접근입니다!</span>
        <button
          type="button"
          className="font-pre font-bold text-[22px] leading-[24px] w-40 h-20
        rounded-[15px] bg-[#6457FA] text-white"
          onClick={() => navigation('/')}
        >
          돌아가기
        </button>
      </div>
    </>
  );
}
