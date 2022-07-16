import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import jwtDecode from 'jwt-decode';
import tagApi from '../../Api/tagApi';
import userAPi from '../../Api/userAPi';
import Haederbar from '../../Components/Haederbar';
import { Itag } from '../../TypeInterface/tagType';
import MyPageBody from './Presentation/MyPageBody';
import { auth } from '../../TypeInterface/userType';
import { ITokenDecode } from '../../TypeInterface/tokenType';
import jwtUtils from '../../util/JwtUtil';
import userGetUserInfo from '../../Hooks/userGetUserInfo';

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
      const decode:ITokenDecode = jwtDecode(token);
      userAuth.userId = decode.userId;
    }
    // TODO : 파라미터에서 사용자 아이디 가져오기
    // const getParm = new URL(window.location.href).searchParams.get('jwt');
  }
  const token = localStorage.getItem('token');
  const userId = jwtUtils.getId(token);
  userAuth.token = token;
  userAuth.userId = userId;
  const userInfo = userGetUserInfo();
  const userProfile = useQuery('user_profile', () => userAPi.getUserProfile(userAuth.userId));
  const skillTags = useQuery('tag', () => tagApi.getAllTag());
  useEffect(() => {
    if (userProfile.isSuccess && skillTags.isSuccess) {
      setLoding(true);
    }
  }, [isLoading]);
  return (
    <>
      <Haederbar userInfo={userInfo?.data?.data} />
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
