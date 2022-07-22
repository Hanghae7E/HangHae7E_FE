import { useQuery } from 'react-query';
import postApi from '../../../Api/postApi';

export default function usePostRecruitQuery(postId: string) {
  const { isSuccess, data } = useQuery('update', postApi.getRecruitPostDetails({ postId }));
  return { isSuccess, data };
}
