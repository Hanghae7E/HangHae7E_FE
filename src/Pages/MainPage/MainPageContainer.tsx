
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useQuery } from 'react-query';
import postApi from '../../Api/postApi';
import useInfiniteScrollQuery from '../../Hooks/useInfiniteScrollQuery';
import MainBody from './Presentaion/MainBody';
import MainFooter from './Presentaion/MainFooter';
import MainHeader from './Presentaion/MainHeader';

export default function MainPageContainer() {
  const recommendPosts = useQuery('recommend_post', () => postApi.getRecommendPosts());
  const {
    getBoard, getNextPage,
    getBoardIsSuccess, getNextPageIsPossible,
  } = useInfiniteScrollQuery();
  const [ref, isView] = useInView();
  useEffect(() => {
    if (isView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [isView, getBoard]);
  return (
    <>
      <MainHeader />
      {recommendPosts.isSuccess && getBoardIsSuccess && (
        <div>
          <MainBody
            recruitPost={getBoard?.pages}
            recommendPosts={recommendPosts.data.data}
          />
          <div ref={ref} />
        </div>
      )}
      <MainFooter />
    </>
  );
}
