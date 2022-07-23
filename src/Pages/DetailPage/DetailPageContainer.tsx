/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
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
import userApi from '../../Api/userAPi';
import { DetailProjectData, UserData } from '../../TypeInterface/detailType';

export default function DetailPageContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const postId = pathname.split('/')[2];
  const [userData, setUserData] = useState<UserData | null>(null);

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

  const goToEditPage = useCallback((allData:DetailProjectData) => {
    navigate(`/projectupdate/${postId}`, { state: allData });
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
