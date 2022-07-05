import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import userAPi from '../../Api/userAPi';
import MyPageBody from './Presentation/MyPageBody';

export default function MyPageContainer() {
  const [isLoading, setLoding] = useState<boolean>(false);

  const userProfile = useQuery('user_profile', () => userAPi.getUserProfile('aaa@aaa.aa'));
  // 참여중인 프로젝트 불러오기  crud 구현
  useEffect(() => {
    if (userProfile.isSuccess) {
      setLoding(true);
    }
  }, [isLoading]);
  return (
    <>
      <div className="header flex h-10  bg-slate-800 text-center">
        <div className="m-2 w-20 border-1 border-neutral-300 text-neutral-300">로고</div>
        <div className="m-2 w-20 border-1 border-neutral-300 text-neutral-300">메뉴1</div>
        <div className="m-2 w-20 border-1 border-neutral-300 text-neutral-300">메뉴2</div>
      </div>
      {userProfile.isSuccess && <MyPageBody profileData={userProfile.data.data} />}
      <div>푸터</div>
    </>
  );
}
