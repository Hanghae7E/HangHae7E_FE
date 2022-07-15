import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import jwtDecode from 'jwt-decode';
import tagApi from '../../Api/tagApi';
import userAPi from '../../Api/userAPi';
import Header from '../../Components/Haeder';
import { Itag } from '../../TypeInterface/tagType';
import { jwtType } from '../../TypeInterface/jwtType';
import MyPageBody from './Presentation/MyPageBody';
import { auth } from '../../TypeInterface/userType';

export default function MyPageContainer() {
  const [isLoading, setLoding] = useState<boolean>(false);
  const dev = true;
  const userAuth:auth = {
    userId: '',
    username: '',
    token: '',
  };
  if (!dev) {
    const token = localStorage.getItem('token');
    userAuth.token = token as string;
    if (token) {
      const decode:jwtType = jwtDecode(token);
      userAuth.userId = decode.userId;
    }
    // TODO : 파라미터에서 사용자 아이디 가져오기
    // const getParm = new URL(window.location.href).searchParams.get('jwt');
  }
  userAuth.token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIyIiwiZW1haWwiOiJoYXJwZXI5ODA4QGdtYWlsLmNvbSIsInNvY2lhbC10eXBlIjoiZ29vZ2xlIiwiaWF0IjoxNjU3OTIyOTUzLCJleHAiOjE2NTgwMDkzNTN9.005Qlf4pWpx0DvnOo23uL1KaVdJhn_m02AxfyyCxzk4';
  userAuth.userId = '2';

  const userProfile = useQuery('user_profile', () => userAPi.getUserProfile(userAuth.userId));
  const skillTags = useQuery('tag', () => tagApi.getAllTag());
  useEffect(() => {
    if (userProfile.isSuccess && skillTags.isSuccess) {
      setLoding(true);
    }
  }, [isLoading]);
  return (
    <>
      <Header />
      {userProfile.isSuccess && skillTags.isSuccess
        && (
          <MyPageBody
            Auth={userAuth}
            profileData={userProfile.data.data}
            tagList={skillTags.data.data.map((obj: Itag) => [obj.tagId, obj.body])}
          />
        )}
      {/* <Test/> */}
      <div>푸터</div>
    </>
  );
}
