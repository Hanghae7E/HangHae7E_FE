import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import tagApi from '../../Api/tagApi';
import userAPi from '../../Api/userAPi';
import { Itag } from '../../TypeInterface/tagType';
import MyPageBody from './Presentation/MyPageBody';

export default function MyPageContainer() {
  const [isLoading, setLoding] = useState<boolean>(false);
  const userProfile = useQuery('user_profile', () => userAPi.getUserProfile('aaa@aaa.aa'));
  const skillTags = useQuery('tag', () => tagApi.getAllTag());

  useEffect(() => {
    if (userProfile.isSuccess && skillTags.isSuccess) {
      setLoding(true);
    }
  }, [isLoading]);

  return (
    <div className="myPageWrapper flex w-full h-full">
      <div className="header flex h-10  bg-slate-800 text-center">
        <div className="m-2 w-20 border-1 border-neutral-300 text-neutral-300">로고</div>
        <div className="m-2 w-20 border-1 border-neutral-300 text-neutral-300">메뉴1</div>
        <div className="m-2 w-20 border-1 border-neutral-300 text-neutral-300">메뉴2</div>
      </div>
      {userProfile.isSuccess && skillTags.isSuccess && (
        <MyPageBody
          profileData={userProfile.data.data[0]}
          skillTags={skillTags.data.data.map((obj: Itag) => obj.body)}
        />
      )}
      {/* <Test/> */}
      <div>푸터</div>
    </div>
  );
}
