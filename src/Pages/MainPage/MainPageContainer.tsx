import { useQuery } from 'react-query';
import postApi from '../../Api/postApi';
import MainBody from './Presentaion/MainBody';
import MainFooter from './Presentaion/MainFooter';
import MainHeader from './Presentaion/MainHeader';

export default function MainPageContainer() {
  const { data, isSuccess } = useQuery('recruit_post', () => postApi.getRecruitPosts());
  console.log(data);
  return (
    <>
      <MainHeader />
      {isSuccess && <MainBody rcruitPost={data.data} />}
      <MainFooter />
    </>
  );
}
