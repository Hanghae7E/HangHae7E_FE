import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import tagApi from '../../Api/tagApi';
import userAPi from '../../Api/userAPi';
import Header from '../../Components/Haeder';
import { Itag } from '../../TypeInterface/tagType';
import MyPageBody from './Presentation/MyPageBody';

export default function MyPageContainer() {
  const [isLoading, setLoding] = useState<boolean>(false);
  const userProfile = useQuery('user_profile', () => userAPi.getUserProfile('ddd@ddd.ddd'));
  const skillTags = useQuery('tag', () => tagApi.getAllTag());

  useEffect(() => {
    if (userProfile.isSuccess && skillTags.isSuccess) {
      setLoding(true);
    }
  }, [isLoading]);

  return (
    <>
      <Header />
      {userProfile.isSuccess && skillTags.isSuccess && (
        <div>
          <MyPageBody
            profileData={userProfile.data.data[0]}
            skillTags={skillTags.data.data.map((obj: Itag) => obj.body)}
          />
        </div>
      )}
      {/* <Test/> */}
      <div>푸터</div>
    </>
  );
}
