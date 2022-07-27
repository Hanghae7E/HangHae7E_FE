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
  // 다시 신청 안됨 -> 데이터 남아있어서 '이미 신청한 프로젝트 입니다'
  // 불합격한 신청자인경우 마이페이지에서 신청 여부 삭제하도록 하고, 다시 신청하면 대기중으로 ?
  // const getRejectApplicants = () => data.applicants?.filter(({ status }) => status === '불합격');
  const getAcceptApplicants = () => data.applicants?.filter(({ status }) => status === '합격');

  if (userData === null) return null;

  return (
    <aside className="w-[300px] mt-[30px]">
      <CreatorInfo
        userData={userData}
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
