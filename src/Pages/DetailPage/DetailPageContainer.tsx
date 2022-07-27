/* eslint-disable no-shadow */
/* eslint-disable no-console */
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
import TextModal from '../../Components/TextModal';

interface ApplyStatusInfo {
  response: {
    data: {
      message: string,
      status:string
    }
  }
}
export default function DetailPageContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const postId = pathname.split('/')[2];
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const modalClose2 = () => { setModalOpen2(!modalOpen2); };
  const { isLoading, data } = useQuery(
    ['recruit_post_details', postId],
    getRecruitPostDetails({ postId }),
  );
  const query = useQueryClient();

  const postRecruitDetail = useMutation((
    { postId }: {postId: string},
  ) => postRecriutDetailPosts({ postId }), {
    onSuccess: () => {
      /**
       * 여기에 백엔드에서 오는 메시지 받아서 상태 업데이트
       * setIsApply()
       */
      modalClose2();
      query.invalidateQueries('recruit_post_details');
    },
    onError: (msg: ApplyStatusInfo) => {
      if (msg.response.data.message.includes('포지션')) { setError('마이페이지 에서 직무와 직군을 선택해 주세요'); } else {
        setError(msg.response.data.message);
      }
      modalClose();
    },
  });

  const postAcceptApplicant = useMutation((
    { userId }: {userId: number},
  ) => postRecruitDetailAccept({ postId, userId }), {
    onSuccess: () => {
      query.invalidateQueries('recruit_post_details');
    },
    onError: (msg:ApplyStatusInfo) => {
      setError(msg.response.data.message);
      modalClose();
    },
  });

  const postRejectApplicant = useMutation((
    { userId }: {userId: number},
  ) => postRejectRecruit({ postId, userId }), {
    onSuccess: () => {
      query.invalidateQueries('recruit_post_details');
    },
    onError: (msg:ApplyStatusInfo) => {
      setError(msg.response.data.message);
      modalClose();
    },
  });

  const postApplicantCancel = useMutation((
    { userId }: {userId: number},
  ) => postRejectRecruit({ postId, userId }), {
    onSuccess: () => {
      query.invalidateQueries('recruit_post_details');
    },
    onError: (msg:ApplyStatusInfo) => {
      setError(msg.response.data.message);
      modalClose();
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

  const handleCancelApplicant = useCallback((userId?: number) => {
    if (userId && userId !== 0)postApplicantCancel.mutate({ userId });
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
    <>
      {modalOpen && <TextModal messages={[error]} modalClose={modalClose} />}
      {modalOpen2 && <TextModal messages={['참가신청이 완료 되었습니다.']} modalClose={modalClose2} />}

      <div className="flex flex-row h-screen w-[1260px] mx-auto">
        {!isLoading && (
        <>
          <DetailUserInfo
            data={data}
            isCreator={isCreator}
            userData={userData}
            handleAcceptApplicant={handleAcceptApplicant}
            handleRejectApplicant={handleRejectApplicant}
            handleCancelApplicant={handleCancelApplicant}
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
    </>
  );
}
