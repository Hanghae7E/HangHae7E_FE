/* eslint-disable implicit-arrow-linebreak */
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
          .then((registration) =>
          // const subscribeOptions = {
          //   userVisibleOnly: true,
          //   // push subscription이 유저에게 항상 보이는지 여부.
          //   // 알림을 숨기는 등 작업이 들어가지는에 대한 여부인데, 크롬에서는 true 밖에 지원안한다.
          //   // https://developers.google.com/web/fundamentals/push-notifications/subscribing-a-user
          //   applicationServerKey: process.env.REACT_APP_PUSH_PUB_KEY, // 발급받은 vapid public key
          // };

            registration.showNotification('test', {
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
