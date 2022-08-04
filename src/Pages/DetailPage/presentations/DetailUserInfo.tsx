import React from 'react';

import { DetailProjectData, UserData } from '../../../TypeInterface/detailType';
import ApplicantsInfo from './ApplicantsInfo';
import ConfirmedApplicants from './ConfirmedApplicants';
import CreatorInfo from './CreatorInfo';

export interface Props {
  data: DetailProjectData
  isCreator: boolean
  userData: UserData | null
  handleAcceptApplicant: (userId?: number) => void;
  handleRejectApplicant: (userId?: number) => void;
  handleCancelApplicant: (userId?: number) => void;
}

function DetailUserInfo({
  data,
  isCreator,
  userData,
  handleAcceptApplicant,
  handleRejectApplicant,
  handleCancelApplicant,
}: Props) {
  const getStanbyApplicants = () => data.applicants?.filter(({ status }) => status === '대기중');
  const getAcceptApplicants = () => data.applicants?.filter(({ status }) => status === '합격');
  if (userData === null) return null;
  return (
    <aside className="w-[300px] mt-[30px]">
      <CreatorInfo
        userData={userData}
        creatorId={data.userId}
      />
      {(isCreator && getStanbyApplicants()) && (
        <>
          <ApplicantsInfo
            applicantsStanby={getStanbyApplicants()}
            onClickAccept={handleAcceptApplicant}
            onClickReject={handleRejectApplicant}
          />
          <ConfirmedApplicants
            applicantsAccept={getAcceptApplicants()}
            onClickCancle={handleCancelApplicant}
          />
        </>
      )}
    </aside>
  );
}

export default React.memo(DetailUserInfo);
