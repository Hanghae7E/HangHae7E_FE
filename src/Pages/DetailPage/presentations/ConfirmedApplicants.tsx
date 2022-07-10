import React from 'react';
import { Applicant } from '../DetailPageContainer';

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
            className="flex w-[255px] border-b-[1px] border-b-solid border-b-[#EEEEEE] mx-auto pb-[10px]"
          >
            <img alt="신청자이미지" className="bg-black w-[51px] h-[51px] rounded-full" src="" />
            <h5>{username}</h5>
            <div>
              {position}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ConfirmedApplicants);
