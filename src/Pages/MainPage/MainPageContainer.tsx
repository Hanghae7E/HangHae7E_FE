import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useQuery } from 'react-query';
import postApi from '../../Api/postApi';
import useInfiniteScrollQuery from '../../Hooks/useInfiniteScrollQuery';
import MainBody from './Presentaion/MainBody';
import MainFooter from './Presentaion/MainFooter';
import MainHeader from './Presentaion/MainHeader';

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
  return (
    <>
      <MainHeader />
      {recommendPosts.isSuccess && getBoardIsSuccess && (
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
      )}
      <MainFooter />
    </>
  );
}
