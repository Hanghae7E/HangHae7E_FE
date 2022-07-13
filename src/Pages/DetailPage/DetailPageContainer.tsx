import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import DetailProjectInfo from './presentations/DetailProjectInfo';
import DetailUserInfo from './presentations/DetailUserInfo';
import {
  getRecruitPostDetails,
  postRecriutDetailPosts,
  postRecruitDetailAccept,
  deleteRecruitDetail,
} from '../../Api/postApi';

export type Applicant = {
  userId: number
  email: string
  username: string
  position: string
  status: number
}
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
  applicants: Applicant[]
}

// 임시 데이터
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
      status: 0,
    },
    {
      userId: 24,
      email: 'bb',
      username: '김일삼',
      position: '기획자',
      status: 1,
    },
    {
      userId: 24,
      email: 'bb',
      username: '김일사',
      position: '디자이너',
      status: 2,
    },
  ],
};

export default function DetailPageContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const postId = pathname.split('/')[2];

  const recruitPostDetails = useQuery(
    ['recruit_post_details', postId],
    getRecruitPostDetails({ postId }),
  );

  const handleApplyProject = useCallback(() => {
    postRecriutDetailPosts({ postId });
  }, [postId]);

  const handleAcceptApplicant = useCallback(() => {
    postRecruitDetailAccept({ postId });
  }, [postId]);

  const handleRejectApplicant = useCallback(() => {
    console.log('reject');
  }, []);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  const goToEditPage = useCallback(() => {
    navigate('');
  }, []);

  const handleDeleteProject = useCallback(() => {
    deleteRecruitDetail({ postId });
  }, []);

  return (
    <div className="flex flex-row h-screen w-[1260px] mx-auto">
      <DetailUserInfo
        data={data}
        handleAcceptApplicant={handleAcceptApplicant}
        handleRejectApplicant={handleRejectApplicant}
      />
      <DetailProjectInfo
        data={data}
        onClickApply={handleApplyProject}
        goBack={goBack}
        goToEditPage={goToEditPage}
        handleDeleteProject={handleDeleteProject}
      />
    </div>
  );
}
