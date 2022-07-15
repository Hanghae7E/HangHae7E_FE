import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useQuery } from 'react-query';
import postApi from '../../Api/postApi';
import userAPi from '../../Api/userAPi';
import useInfiniteScrollQuery from '../../Hooks/useInfiniteScrollQuery';
import MainBody from './Presentaion/MainBody';
import MainFooter from './Presentaion/MainFooter';
import MainHeader from './Presentaion/MainHeader';
import Portal from '../../Components/Portal';
import NickNameModal from '../../Components/NicknameModal';
import { Iprofile } from '../../TypeInterface/userType';
import jwtUtils from '../../util/JwtUtil';

export default function MainPageContainer() {
  const recommendPosts = useQuery('recommend_post', postApi.getRecommendPosts);
  const tagList = useQuery('tag_list', postApi.getTag);
  const [searchTag, setSearchTag] = useState(0);

  const {
    getBoard, getNextPage,
    getBoardIsSuccess, getNextPageIsPossible,
    refetch,
  } = useInfiniteScrollQuery(searchTag);
  const [ref, isView] = useInView();
  useEffect(() => {
    if (isView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [isView, getBoard]);
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIzIiwiZW1haWwiOiJoYXJwZXI5ODA4QGdtYWlsLmNvbSIsInNvY2lhbC10eXBlIjoiZ29vZ2xlIiwiaWF0IjoxNjU3ODYxMDIzLCJleHAiOjE2NTc5NDc0MjN9.cFY6nqu9vkYQaPNEi1xoP8RP2Ai_F0qT4gUl1m08daE';
  const [userid, setId] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<Iprofile>();
  const modalClose = () => { setModalOpen(!modalOpen); };
  const userProfile = useQuery(['get_userInfo', userid], () => userAPi.getMyInfo('3', token), {
    onSuccess: (data) => {
      setUserInfo(data.data);
    },
    enabled: !!3,
  });
  if (token) {
    const id = jwtUtils.getId(token);
    console.log(id);
  }
  return (
    <>
      {modalOpen && userProfile.isSuccess && userInfo && (
        <Portal>
          <NickNameModal modalClose={modalClose} userInfo={userInfo} setUserInfo={setUserInfo} />
        </Portal>
      )}
      <MainHeader />
      {
        recommendPosts.isSuccess && getBoardIsSuccess && (
          <div>
            <MainBody
              recruitPost={getBoard?.pages}
              recommendPosts={recommendPosts.data.data.posts}
              tagList={tagList.data?.data}
              setSearchTag={setSearchTag}
              refetch={refetch}
            />
            <div ref={ref} />
          </div>
        )
      }
      <MainFooter />
    </>
  );
}
