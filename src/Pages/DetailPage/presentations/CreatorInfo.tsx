/* eslint-disable camelcase */
import React from 'react';
import { UserData } from '../../../TypeInterface/detailType';

interface Props {
  userData: UserData;
}

function CreatorInfo({ userData }: Props) {
  const { username, profile_image_url, position } = userData;

  return (
    <div className="w-[300px] text-center border-2 border-solid border-[#EEEEEE] pt-[46px] pb-[20px] rounded-xl mb-6">
      <img alt="프로필이미지" className="w-[80px] h-[80px] rounded-full mx-auto" src={profile_image_url || '/profiledefault.svg'} />
      <h5 className="my-3">{username}</h5>
      <p className="bg-[#EEEEEE] rounded-xl w-[262px] h-[67px] mx-auto grid place-items-center">
        {position}
      </p>
    </div>
  );
}

export default React.memo(CreatorInfo);
