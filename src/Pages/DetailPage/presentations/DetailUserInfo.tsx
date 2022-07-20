import React from 'react';
import { DetailProjectData, UserData } from '../interface';
import ApplicantsInfo from './ApplicantsInfo';
import ConfirmedApplicants from './ConfirmedApplicants';
import CreatorInfo from './CreatorInfo';

export interface Props {
  data: DetailProjectData
  userData: UserData | null
  handleAcceptApplicant: () => void;
  handleRejectApplicant: () => void;
}

function DetailUserInfo({
  data, userData, handleAcceptApplicant, handleRejectApplicant,
}: Props) {
  const getStanbyApplicants = () => data.applicants?.filter(({ status }) => status !== 2);

  const getAcceptApplicants = () => data.applicants?.filter(({ status }) => status === 0);

  if (userData === null) return null;

  return (
    <aside className="w-[300px] mt-[30px]">
      <CreatorInfo
        userData={userData}
      />
      {getStanbyApplicants() && (
        <>
          <ApplicantsInfo
            applicantsStanby={getStanbyApplicants()}
            onClickAccept={handleAcceptApplicant}
            onClickReject={handleRejectApplicant}
          />
          <ConfirmedApplicants
            applicantsAccept={getAcceptApplicants()}
          />
        </>
      )}
    </aside>
  );
}

export default React.memo(DetailUserInfo);
