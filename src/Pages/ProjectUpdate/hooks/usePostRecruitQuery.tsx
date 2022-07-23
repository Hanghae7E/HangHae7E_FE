import { useQuery } from 'react-query';
import postApi from '../../../Api/postApi';

export default function usePostRecruitQuery(postId: string) {
  const {
    isSuccess, data, isError, isLoading,
  } = useQuery('update', postApi.getRecruitPostDetails({ postId }), {
    enabled: postId !== '0',
    retry: 1,
  });
  return {
    isSuccess, data, isError, isLoading,
  };
}
