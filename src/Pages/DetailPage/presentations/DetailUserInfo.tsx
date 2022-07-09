import React from 'react';
import { DetailProjectData } from '../DetailPageContainer';
import ApplicantsInfo from './ApplicantsInfo';
import ConfirmedApplicants from './ConfirmedApplicants';
import CreatorInfo from './CreatorInfo';

export interface Props {
  data: DetailProjectData
}
function DetailUserInfo({ data }: Props) {
  return (
    <aside className="w-[300px] mt-[30px]">
      <CreatorInfo />
      <ApplicantsInfo />
      <ConfirmedApplicants />
    </aside>
  );
}

export default React.memo(DetailUserInfo);
