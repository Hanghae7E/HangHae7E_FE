/* eslint-disable camelcase */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../../../TypeInterface/detailType';

interface Props {
  userData: UserData;
  creatorId :number;
}

function CreatorInfo({ userData, creatorId }: Props) {
  const { username, profile_image_url, position } = userData;
  const navigate = useNavigate();
  const goToUserPage = () => {
    navigate(`/mypage/${creatorId}`);
  };
  return (
    <div className="w-[300px] text-center border-2 border-solid border-[#EEEEEE] pt-[46px] pb-[20px] rounded-xl mb-6">
      <input
        type="image"
        alt="프로필이미지"
        className="w-[80px] h-[80px] rounded-full mx-auto"
        src={profile_image_url || '/profiledefault.svg'}
        onClick={goToUserPage}
      />
      <h5 className="my-[12px] py-0 md:text-[22px] font-semibold">{username}</h5>
      <p className="mx-auto grid place-items-center md:text-[16px] font-normal">
        {position}
      </p>
    </div>
  );
}

export default React.memo(CreatorInfo);
