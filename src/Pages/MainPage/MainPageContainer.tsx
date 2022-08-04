/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  useEffect, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
import { useQuery } from 'react-query';
import postApi from '../../Api/postApi';
import MainBody from './Presentaion/MainBody';
import MainHeader from './Presentaion/MainHeader';
import Portal from '../../Components/Portal';
import NickNameModal from '../../Components/NicknameModal';
import useMainInfiniteScrollQuery from './hooks/useMainInfiniteScrollQuery';
import { UserData } from '../../TypeInterface/detailType';

interface Props {
  userInfo: UserData
}

export default function MainPageContainer({ userInfo }: Props) {
  const recommendPosts = useQuery('recommend_post', postApi.getRecommendPosts);
  const { data: tagData } = useQuery('tag_list', postApi.getTag);
  const [searchTag, setSearchTag] = useState(0);
  const [isDown, setIsDown] = useState<boolean>(true);
  // eslint-disable-next-line prefer-const
  let lastScrollY = 0;
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

  // const userInfo = userGetUserInfo();
  const goSurvey = () => {
    if (!isDown) { window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeopdWhMbZymQKEZK5CvrQzcZJLo868fXScua22gKZqSFwtPg/viewform'; }
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;

      // 이전의 스크롤 위치와 비교하기
      setIsDown(scrollY > lastScrollY);
      lastScrollY = scrollY;
      // 현재의 스크롤 값을 저장
      // setLastScrollY(scrollY);
    });
  }, []);
  return (
    <div className="opacity-1">
      {userInfo && modalOpen && !userInfo.phone_number && (
        <Portal>
          <NickNameModal
            modalClose={modalClose}
            userInfo={userInfo}
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
      <div onClick={goSurvey} className={`w-full   opacity-0  ${!isDown && 'sticky bottom-0 z-50 cursor-pointer translate-y-0 transition-opacity  opacity-100 duration-700'}`}>
        <img src="/survey.svg" alt="설문으로가기" />
      </div>
    </div>
  );
}
