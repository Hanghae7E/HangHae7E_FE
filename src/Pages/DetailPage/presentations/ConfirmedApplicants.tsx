import React from 'react';
import { Applicant } from '../DetailPageContainer';
import PositionTag from './PositionTag';

interface Props {
  applicantsAccept: Applicant[]
}
function ConfirmedApplicants({ applicantsAccept }: Props) {
  return (
    <div className="w-[300px] border-2 border-solid border-[#EEEEEE] py-[32px] rounded-xl mb-6">
      <h2 className="pl-6 font-bold text-[26px]">
        확정된 팀원
      </h2>
      <ul className="w-[300px]">
        {applicantsAccept.map(({ userId, username, position }) => (
          <li
            key={userId}
            className="flex items-center w-[255px] border-b-[1px] border-b-solid border-b-[#EEEEEE] mx-auto pb-[10px]"
          >
            <img alt="신청자이미지" className="bg-black w-[51px] h-[51px] rounded-full" src="" />
            <h5 className="ml-[10px] text-xl font-bold">{username}</h5>
            <PositionTag
              position={position}
              propsClassname="ml-2 mr-10"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ConfirmedApplicants);