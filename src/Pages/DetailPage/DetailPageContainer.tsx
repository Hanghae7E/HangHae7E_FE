/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
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
  postRecriutClosedPosts,
} from '../../Api/postApi';
import { DetailProjectData, UserData } from '../../TypeInterface/detailType';
import TextModal from '../../Components/TextModal';
import { ErrorStatusInfo } from '../../TypeInterface/postType';
import userApi from '../../Api/userApi';

interface Props {
  userInfo: UserData
}

export default function DetailPageContainer({ userInfo }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const postId = pathname.split('/')[2];
  const [error, setError] = useState<string>('');
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  const [applyModalOpen, setApplyModalOpen] = useState<boolean>(false);
  const [delModalOpen, setDelModalOpen] = useState<boolean>(false);
  const [closedModalOpen, setClosedDelModalOpen] = useState<boolean>(false);
  const [deleteStatus, setDeleteStatus] = useState<boolean>(false);
  const [creatorInfo, setCreatorInfo] = useState<UserData | null>(null);
  const [isApply, setIsApply] = useState<boolean>(false);

  function applyCheck() {
    if (!userInfo) return false;
    const check = userInfo.applyPosts?.filter(
      ({ id, status }) => id.toString() === postId && status === '대기중',
    );
    return check.length === 1;
  }
  // const [isApply, setIsApply] = useState<boolean>(() => {
  //   const check = userInfo.applyPosts?.filter(
  //     ({ id, status }) => id.toString() === postId && status === '대기중',
  //   );
  //   return check.length === 1;
  // });
  // const [isApply, setIsApply] = useState<boolean>(userInfo.applyPosts ? () => {
  //   const check = userInfo.applyPosts?.filter(
  //     ({ id, status }) => id.toString() === postId && status === '대기중',
  //   );
  //   return check.length === 1;
  // } : false);

  const { isSuccess, data } = useQuery(
    ['recruit_post_details', postId],
    getRecruitPostDetails({ postId }),
  );

  const query = useQueryClient();

  const errorModalClose = () => {
    setErrorModalOpen(!errorModalOpen);
  };

  const applyModalClose = () => {
    setApplyModalOpen(!applyModalOpen);
  };

  const postRecruitDetail = useMutation((
    { postId }: {postId: string},
  ) => postRecriutDetailPosts({ postId }), {
    onSuccess: () => {
      /**
       * 여기에 백엔드에서 오는 메시지 받아서 상태 업데이트
       * setIsApply()
       */
      setIsApply(true);
      applyModalClose();
      query.invalidateQueries('recruit_post_details');
    },
    onError: (msg: ErrorStatusInfo) => {
      if (msg.response.data.message.includes('포지션')) { setError('마이페이지 에서 직무와 직군을 선택해 주세요'); } else {
        setError(msg.response.data.message);
      }
      errorModalClose();
    },
  });
  const postDelete = useMutation((
    { postId }: {postId: string},
  ) => deleteRecruitDetail({ postId }), {
    onSuccess: () => {
      query.invalidateQueries(['recruit_posts', 'recommend_post']);
      setDelModalOpen(!delModalOpen);
      navigate('/');
      setDeleteStatus(false);
    },
    onError: (msg:ErrorStatusInfo) => {
      setError(msg.response.data.message);
      errorModalClose();
    },
  });

  const postClosed = useMutation((
    { postId }: {postId: string},
  ) => postRecriutClosedPosts({ postId }), {
    onSuccess: () => {
      query.invalidateQueries(['recruit_posts', 'recommend_post']);
      setClosedDelModalOpen(!closedModalOpen);
      navigate('/');
      setDeleteStatus(false);
    },
    onError: (msg:ErrorStatusInfo) => {
      setError(msg.response.data.message);
      errorModalClose();
    },
  });

  const delModalClose = () => {
    setDelModalOpen(!delModalOpen);
  };
  const delComplateModal = () => {
    setDeleteStatus(true);
    postDelete.mutate({ postId });
  };

  const closedComplate = () => {
    setDeleteStatus(true);
    postClosed.mutate({ postId });
  };
  const closedModalClose = () => {
    setClosedDelModalOpen(!closedModalOpen);
  };
  const postAcceptApplicant = useMutation((
    { userId }: {userId: number},
  ) => postRecruitDetailAccept({ postId, userId }), {
    onSuccess: () => {
      query.invalidateQueries('recruit_post_details');
    },
    onError: (msg:ErrorStatusInfo) => {
      setError(msg.response.data.message);
      errorModalClose();
    },
  });

  const postRejectApplicant = useMutation((
    { userId }: {userId: number},
  ) => postRejectRecruit({ postId, userId }), {
    onSuccess: () => {
      query.invalidateQueries('recruit_post_details');
    },
    onError: (msg:ErrorStatusInfo) => {
      setError(msg.response.data.message);
      errorModalClose();
    },
  });

  const postApplicantCancel = useMutation((
    { userId }: {userId: number},
  ) => postRejectRecruit({ postId, userId }), {
    onSuccess: () => {
      query.invalidateQueries('recruit_post_details');
    },
    onError: (msg:ErrorStatusInfo) => {
      setError(msg.response.data.message);
      errorModalClose();
    },
  });

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
    delModalClose();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      userApi.getUserProfile(data?.userId).then((item) => setCreatorInfo(item.data));
    }
  }, [data]);

  useEffect(() => {
    setIsApply(applyCheck());
  }, [userInfo]);

  //  isCreator={!!data?.applyPosts} 는 왜 안될까...?
  const isCreator = !!data?.applicants;
  return (
    <>
      {errorModalOpen && <TextModal messages={[error]} modalClose={errorModalClose} />}
      {applyModalOpen && <TextModal messages={['참가신청이 완료 되었습니다.']} modalClose={applyModalClose} />}
      {delModalOpen && <TextModal messages={['게시글을 삭제 하시겠습니까?.']} modalClose={delModalClose} modalClose2={delComplateModal} deleteStatus={deleteStatus} />}
      {closedModalOpen && <TextModal messages={['모집을 마감 하시겠습니까?.']} modalClose={closedModalClose} modalClose2={closedComplate} deleteStatus={deleteStatus} />}

      <div className="flex flex-row h-screen w-[1260px] mx-auto mb-[160px] min-h-screen">
        {isSuccess && (
        <>
          <DetailUserInfo
            data={data}
            isCreator={isCreator}
            userData={creatorInfo}
            handleAcceptApplicant={handleAcceptApplicant}
            handleRejectApplicant={handleRejectApplicant}
            handleCancelApplicant={handleCancelApplicant}
          />
          <DetailProjectInfo
            data={data}
            isCreator={isCreator}
            onClickApply={handleApplyProject}
            onClosed={closedModalClose}
            goBack={goBack}
            goToEditPage={goToEditPage}
            handleDeleteProject={handleDeleteProject}
            isApply={isApply}
          />
        </>
        )}
      </div>
    </>
  );
}
