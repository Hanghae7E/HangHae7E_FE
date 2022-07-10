/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Applicant } from '../DetailPageContainer';
import DetailIcon from './DetailIcon';

interface Props {
  applicantsStanby: Applicant[];
  onClickAccept: () => void
  onClickReject: () => void
}

function ApplicantsInfo({ onClickAccept, onClickReject, applicantsStanby }: Props) {
  return (
    <div className="w-[300px] border-2 border-solid border-[#EEEEEE] py-[32px] rounded-xl mb-6">
      <h2 className="pl-6 font-bold text-[26px]">
        신청자 리스트
      </h2>
      <ul className="w-[300px]">
        {applicantsStanby.map(({ username, userId }) => (
          <li
            key={userId}
            className="flex w-[255px] border-b-[1px] border-b-solid border-b-[#EEEEEE] mx-auto pb-[10px]"
          >
            <img alt="신청자이미지" className="bg-black w-[51px] h-[51px] rounded-full" src="" />
            <h5>{username}</h5>
            <div>
              개발자
            </div>
            <button
              type="button"
            >
              <DetailIcon.Check
                onClick={onClickAccept}
              />
            </button>
            <button
              type="button"
            >
              <DetailIcon.Cancel
                onClick={onClickReject}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ApplicantsInfo);
