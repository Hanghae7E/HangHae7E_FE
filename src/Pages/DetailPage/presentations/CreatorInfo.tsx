import React from 'react';

function CreatorInfo() {
  return (
    <div className="w-[300px] text-center border-2 border-solid border-[#EEEEEE] pt-[46px] pb-[20px] rounded-xl mb-6">
      <img alt="프로필이미지" className="w-[80px] h-[80px] rounded-full mx-auto" src="" />
      <h5 className="my-3">유저이름</h5>
      <p className="bg-[#EEEEEE] rounded-xl w-[262px] h-[67px] mx-auto grid place-items-center">
        항해 99 개발자
      </p>
    </div>
  );
}

export default React.memo(CreatorInfo);
