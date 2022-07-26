/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import DetailProjectInfo from './presentations/DetailProjectInfo';
import DetailUserInfo from './presentations/DetailUserInfo';
import {
  getRecruitPostDetails,
  postRecriutDetailPosts,
  postRecruitDetailAccept,
  deleteRecruitDetail,
  postRejectRecruit,
} from '../../Api/postApi';
import userApi from '../../Api/userAPi';
import { DetailProjectData, UserData } from '../../TypeInterface/detailType';

interface ApplyStatus {
  status: boolean
  text: string
}
export default function DetailPageContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const postId = pathname.split('/')[2];
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isApply, setIsApply] = useState<ApplyStatus>({
    status: false,
    text: '',
  });

  const { isLoading, data } = useQuery(
    ['recruit_post_details', postId],
    getRecruitPostDetails({ postId }),
  );
  const query = useQueryClient();

  const postRecruitDetail = useMutation((
    { postId }: {postId: string},
  ) => postRecriutDetailPosts({ postId }), {
    onSuccess: (v) => {
      /**
       * 여기에 백엔드에서 오는 메시지 받아서 상태 업데이트
       * setIsApply()
       */
      query.invalidateQueries('recruit_apply');
    },
  });
  const userId = '3';
  const postAcceptApplicant = useMutation((
    { userId }: {userId: number},
  ) => postRecruitDetailAccept({ postId, userId }), {
    onSuccess: (v) => {
      query.invalidateQueries('recruit_accepct_applicant');
    },
  });

  const postRejectApplicant = useMutation((
    { userId }: {userId: number},
  ) => postRejectRecruit({ postId, userId }), {
    onSuccess: (v) => {
      query.invalidateQueries('recruit_reject_applicant');
    },
  });

  const isCreator = !!data?.applicants;
  const handleApplyProject = useCallback(() => {
    postRecruitDetail.mutate({ postId });
  }, [postId]);

  const handleAcceptApplicant = useCallback((userId?: number) => {
    if (userId && userId !== 0)postAcceptApplicant.mutate({ userId });
  }, [postId]);

  const handleRejectApplicant = useCallback((userId?: number) => {
    if (userId && userId !== 0)postRejectApplicant.mutate({ userId });
  }, []);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  const goToEditPage = useCallback((projectData:DetailProjectData) => {
    if (projectData) { navigate(`/projectupdate/${postId}`, { state: projectData }); }
  }, []);

  const handleDeleteProject = useCallback(() => {
    deleteRecruitDetail({ postId });
  }, []);

  useEffect(() => {
    if (data) {
      userApi.getUserProfile(data?.userId).then((item) => setUserData(item.data));
    }
  }, [data]);

  return (
    <div className="flex flex-row h-screen w-[1260px] mx-auto">
      {!isLoading && (
        <>
          <DetailUserInfo
            data={data}
            isCreator={isCreator}
            userData={userData}
            handleAcceptApplicant={handleAcceptApplicant}
            handleRejectApplicant={handleRejectApplicant}
          />
          <DetailProjectInfo
            data={data}
            isCreator={isCreator}
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
