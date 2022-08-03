import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { ITag } from '@/TypeInterface/postType';
import { IProfileFormData } from '@/TypeInterface/userType';

import tagApi from '../../Api/tagApi';
import userApi from '../../Api/userApi';
import jwtUtils from '../../util/JwtUtil';
import MyPageBody from './Presentation/MyPageBody';

export default function MyPageContainer({ userInfo }: {userInfo: IProfileFormData}) {
  const { id } = useParams();
  const currentUserId = jwtUtils.getId(localStorage.getItem('token'));

  const profileId = id || currentUserId;
  const { isSuccess: skillSuccess, data: skillTags } = useQuery('tag', () => tagApi.getAllTag());
  const userProfile = useQuery('get_profile_info', () => userApi.getUserProfile(profileId));

  return (
    <div>
      {userProfile?.isSuccess && skillSuccess
          && (
            <MyPageBody
              profileData={userProfile.data.data}
              currentUser={typeof id === 'undefined' || currentUserId === id}
              tagList={skillTags?.data}
            />
          )}
    </div>
  );
}
