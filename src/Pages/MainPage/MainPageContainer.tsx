import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import jwtDecode from 'jwt-decode';
import { useQuery } from 'react-query';
import postApi from '../../Api/postApi';
import userAPi from '../../Api/userAPi';
import useInfiniteScrollQuery from '../../Hooks/useInfiniteScrollQuery';
import MainBody from './Presentaion/MainBody';
import MainFooter from './Presentaion/MainFooter';
import MainHeader from './Presentaion/MainHeader';
import { jwtType } from '../../TypeInterface/jwtType';
import Portal from '../../Components/Portal';
import NickNameModal from '../../Components/NicknameModal';

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
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [userid, setId] = useState('');
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const modalClose = () => { setModalOpen(!modalOpen); };
  const userProfile = useQuery(['get_userInfo', userid], () => userAPi.getMyInfo(userid, token), { enabled: !!userid });
  if (token) {
    const { id }: jwtType = jwtDecode(token);
    setId(id)
  }
  return (
    <>
      {userProfile.isSuccess && userProfile.data.data.phone_number === null && (
        <Portal>
          <NickNameModal modalClose={modalClose} user={userProfile.data.data} />
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
      < MainFooter />
    </>
  );
}
