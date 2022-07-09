import React from 'react';
import DetailIcon from './DetailIcon';

function ApplicantsInfo() {
  return (
    <div className="w-[300px] border-2 border-solid border-[#EEEEEE] py-[32px] rounded-xl mb-6">
      <h2 className="pl-6 font-bold text-[26px]">
        신청자 리스트
      </h2>
      <ul className="w-[300px]">
        <li className="flex w-[255px] border-b-[1px] border-b-solid border-b-[#EEEEEE] mx-auto pb-[10px]">
          <img alt="신청자이미지" className="bg-black w-[51px] h-[51px] rounded-full" src="" />
          <h5>김일이</h5>
          <div>
            개발자
          </div>
          <button type="button">
            <DetailIcon.Check />
          </button>
          <button type="button">
            <DetailIcon.Cancel />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default React.memo(ApplicantsInfo);
