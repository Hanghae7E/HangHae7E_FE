/* eslint-disable no-console */
/* eslint-disable no-alert */
import axios from 'axios';
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
    const token = localStorage.getItem('notification_token');
    if (token) {
      const data = {
        message: {
          token: '<Notification token>',
          notification: {
            title: '안녕하세요',
            body: 'Background message body',
          },
        },

      };
      axios.post('https://fcm.googleapis.com/v1/projects/huddleup-7eaba/messages:send', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer <Server Toekn>',

        },
      }).then((test) => {
        console.log(test);
      });
    }
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
