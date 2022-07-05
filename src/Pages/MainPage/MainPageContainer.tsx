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
  const testPostNotify = () => {
    Notification.requestPermission().then((status) => {
      if (status === 'denied') {
        alert('Notification 거부됨');
      } else if (navigator.serviceWorker) {
        navigator.serviceWorker
          .register('/worker.js') // serviceworker 등록
          .then((registration) => registration.showNotification('test', {
            body: 'test입니다.',
          }));
      }
    });
  };
  useEffect(() => {
    if (recommendPosts.isSuccess && recruitPosts.isSuccess) {
      setLoding(true);
    }
  }, [isLoading]);
  return (
    <>
      <MainHeader />
      <button type="button" onClick={testPostNotify}>test</button>
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
