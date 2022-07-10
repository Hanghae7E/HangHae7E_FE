import React from 'react';
import { DetailProjectData } from '../DetailPageContainer';
import ApplicantsInfo from './ApplicantsInfo';
import ConfirmedApplicants from './ConfirmedApplicants';
import CreatorInfo from './CreatorInfo';

export interface Props {
  data: DetailProjectData
  handleAcceptApplicant: () => void;
  handleRejectApplicant: () => void;
}

function DetailUserInfo({ data, handleAcceptApplicant, handleRejectApplicant }: Props) {
  const getStanbyApplicants = () => data.applicants.filter(({ status }) => status !== 2);

  const getAcceptApplicants = () => data.applicants.filter(({ status }) => status === 0);

  return (
    <aside className="w-[300px] mt-[30px]">
      <CreatorInfo />
      <ApplicantsInfo
        applicantsStanby={getStanbyApplicants()}
        onClickAccept={handleAcceptApplicant}
        onClickReject={handleRejectApplicant}
      />
      <ConfirmedApplicants
        applicantsAccept={getAcceptApplicants()}
      />
    </aside>
  );
}

export default React.memo(DetailUserInfo);
