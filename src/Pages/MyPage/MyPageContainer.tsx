import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import tagApi from '../../Api/tagApi';
import MyPageBody from './Presentation/MyPageBody';
import userAPi from '../../Api/userAPi';
import jwtUtils from '../../util/JwtUtil';

export default function MyPageContainer() {
  const { id } = useParams();
  const currentUserId = jwtUtils.getId(localStorage.getItem('token'));

  const profileId = id || currentUserId;
  const skillTags = useQuery('tag', () => tagApi.getAllTag());
  const userProfile = useQuery('get_profile_info', () => userAPi.getUserProfile(profileId));

  return (
    <div>
      {userProfile?.isSuccess && skillTags.isSuccess
          && (
            <MyPageBody
              profileData={userProfile.data.data}
              currentUser={typeof id === 'undefined' || currentUserId === id}
              tagList={skillTags.data.data}
            />
          )}
    </div>
  );
}
