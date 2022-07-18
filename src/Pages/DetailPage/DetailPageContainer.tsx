/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
  postRejectRecruit,
} from '../../Api/postApi';

export type Applicant = {
  userId: number
  email: string
  username: string
  position: string
  profile_image_url: string
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
  applicants?: Applicant[]
}

export interface UserData {
  username: string,
  email: string,
  phone_number: string,
  profile_image_url: string,
  residence: string,
  available_period: string // 작업 가능 기간
  available_time: string // 작업 가능 시간
  position: string // [개발자.디자이너.기획자]
  fields: string[]
  face_to_face: boolean, // ture,false, 모두 원하는경우 true
  skills: string[]
  career_period: string
  portfolio_url: string
}

const userData = {
  username: '박봉팔',
  email: '123@456',
  phone_number: '010-1111-1111',
  profile_image_url: '',
  residence: '서울',
  available_period: '2022-07-01,2022-07-04', // 작업 가능 기간
  available_time: '주4일,주말 포함', // 작업 가능 시간
  position: '개발자', // [개발자.디자이너.기획자]
  fields: ['프론트', '백엔드'],
  face_to_face: true, // ture,false, 모두 원하는경우 true
  skills: [
    '리엑트',
    '자바스크립트', // 리액트, 자바스크립트
  ],
  career_period: '1년 미만',
  portfolio_url: '',

};

export default function DetailPageContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const postId = pathname.split('/')[2];

  const { isLoading, data } = useQuery(
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
    postRejectRecruit({ postId });
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
      {isLoading && data && (
        <>
          <DetailUserInfo
            data={data}
            userData={userData}
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
        </>
      )}
    </div>
  );
}
