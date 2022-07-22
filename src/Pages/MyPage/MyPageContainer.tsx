import { useQuery } from 'react-query';
import tagApi from '../../Api/tagApi';
import MyPageBody from './Presentation/MyPageBody';
import userGetUserInfo from '../../Hooks/userGetUserInfo';

export default function MyPageContainer() {
  // TODO : 파라미터에서 사용자 아이디 가져오기
  const userProfile = userGetUserInfo();
  // 닉네임, 프로필 업데이트 : 바디 ,프로필 폼 업데이트 : 프로필
  // 필요할때마다 조회???? 뭐가 맞는걸까 ?
  const skillTags = useQuery('tag', () => tagApi.getAllTag());

  return (
    <>
      {userProfile?.isSuccess && skillTags.isSuccess
          && (
            <MyPageBody
              profileData={userProfile.data.data}
              tagList={skillTags.data.data}
            />
          )}
      {/* <Test/> */}
      <div>푸터</div>
    </>
  );
}
