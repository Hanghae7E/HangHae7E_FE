import React, { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import DetailProjectInfo from './presentations/DetailProjectInfo';
import DetailUserInfo from './presentations/DetailUserInfo';

export interface DetailProjectData {
  userId: number,
  title: string
  body: string
  projectStartTime: string
  projectEndTime: string
  recruitDueTime: string
  totalHeadCount: number
  tags: string[]
  // (작성자의 경우에만)
  applicants: {
      userId: number
      email: string
      username: string
      position: string
      status:boolean
  }[]
}

const data = {
  userId: 123123123,
  title: '항해 프로젝트 같이 하실분 구합니다',
  body: '프로젝트 내용',
  projectStartTime: '2022.07.08',
  projectEndTime: '2022.08.30',
  recruitDueTime: '2022.07.07',
  totalHeadCount: 123,
  tags: ['라이프스타일', '교육', '외국'],
  // (작성자의 경우에만)
  applicants: [
    {
      userId: 23,
      email: 'aa',
      username: '김일이',
      position: '개발자',
      status: true,
    },
    {
      userId: 24,
      email: 'bb',
      username: '김일삼',
      position: '기획자',
      status: true,
    },
    {
      userId: 24,
      email: 'bb',
      username: '김일사',
      position: '디자이너',
      status: false,
    },
  ],
};

export default function DetailPageContainer() {
  const { pathname } = useLocation();
  console.log(pathname.split('/')[2]);
  const handleApplyProject = useCallback(() => {
    console.log('apply');
  }, []);

  const handleAcceptApplicant = useCallback(() => {
    console.log('accpet');
  }, []);

  const handleAcceptReject = useCallback(() => {
    console.log('reject');
  }, []);

  return (
    <div className="flex flex-row h-screen w-[1260px] mx-auto">
      <DetailUserInfo data={data} />
      <DetailProjectInfo data={data} />
    </div>
  );
}
