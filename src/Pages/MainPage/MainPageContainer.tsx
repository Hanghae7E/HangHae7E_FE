/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useQuery } from 'react-query';
import postApi from '../../Api/postApi';
import MainBody from './Presentaion/MainBody';
import MainHeader from './Presentaion/MainHeader';
import Portal from '../../Components/Portal';
import NickNameModal from '../../Components/NicknameModal';
import userGetUserInfo from '../../Hooks/userGetUserInfo';
import useMainInfiniteScrollQuery from './hooks/useMainInfiniteScrollQuery';

export default function MainPageContainer() {
  const recommendPosts = useQuery('recommend_post', postApi.getRecommendPosts);
  const { data: tagData } = useQuery('tag_list', postApi.getTag);
  const [searchTag, setSearchTag] = useState(0);

  const {
    getBoard, getNextPage,
    getBoardIsSuccess, getNextPageIsPossible,
    refetch,
  } = useMainInfiniteScrollQuery(searchTag);
  const [ref, isView] = useInView();
  useEffect(() => {
    if (isView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [isView, getBoard]);
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const modalClose = () => { setModalOpen(!modalOpen); };

  const userInfo = userGetUserInfo();
  const goSurvey = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeopdWhMbZymQKEZK5CvrQzcZJLo868fXScua22gKZqSFwtPg/viewform';
  };

  return (
    <>
      {userInfo && modalOpen && userInfo.isSuccess && !userInfo.data.data.phone_number && (
        <Portal>
          <NickNameModal
            modalClose={modalClose}
            userInfo={userInfo.data.data}
          />
        </Portal>
      )}
      <MainHeader />
      {
        recommendPosts.isSuccess && getBoardIsSuccess && (
          <div>
            <MainBody
              recruitPost={getBoard?.pages}
              recommendPosts={recommendPosts.data.data.posts}
              tagData={tagData?.data}
              setSearchTag={setSearchTag}
              refetch={refetch}
            />
            <div ref={ref} />
          </div>
        )
      }
      <div onClick={goSurvey} className="w-full cursor-pointer sticky bottom-0 z-50">
        <img src="/survey.svg" alt="설문으로가기" />
      </div>
    </>
  );
}
