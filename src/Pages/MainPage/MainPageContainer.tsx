/* eslint-disable no-console */
/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import postApi from '../../Api/postApi';
import MainBody from './Presentaion/MainBody';
import MainFooter from './Presentaion/MainFooter';
import MainHeader from './Presentaion/MainHeader';

export default function MainPageContainer() {
  const recruitPosts = useQuery('recruit_post', () => postApi.getRecruitPosts());
  const recommendPosts = useQuery('recommend_post', () => postApi.getRecommendPosts());
  const [isLoading, setLoding] = useState<boolean>(false);

  useEffect(() => {
    if (recommendPosts.isSuccess && recruitPosts.isSuccess) {
      setLoding(true);
    }
  }, [isLoading]);
  return (
    <>
      <MainHeader />
      {recommendPosts.isSuccess && recruitPosts.isSuccess && (
      <MainBody
        rcruitPost={recruitPosts.data.data}
        recommendPosts={recommendPosts.data.data}
      />
      )}
      <MainFooter />
    </>
  );
}
