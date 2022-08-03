import { useInfiniteQuery } from 'react-query';
import workSpaceApi from '../../../Api/workSpaceApi';

export default function useWorkInfiniteScrollQuery(projectId: number) {
  const getWorkSapace = async ({ pageParam = 1 }) => {
    const res = await workSpaceApi.getWorkSpace(pageParam, projectId);
    return {
      // 실제 데이터
      workPage: res.data.workSpaces,
      // 반환 값에 현재 페이지를 넘겨주자
      currentPage: pageParam,
      isLast: res.data.isLast,
    };
  };

  const {
    data: getWork,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
    refetch,
  } = useInfiniteQuery(['workSpace'], getWorkSapace, {
    getNextPageParam: (lastPage) => {
      // lastPage와 pages는 콜백함수에서 리턴한 값을 의미한다!!
      // lastPage: 직전에 반환된 리턴값, pages: 여태 받아온 전체 페이지
      if (!lastPage.isLast) {
        return lastPage.currentPage + 1;
      }
      // 마지막 페이지면 undefined가 리턴되어서 hasNextPage는 false가 됨!
      return undefined;
    },
  });

  return {
    getWork,
    getNextPage,
    getBoardIsSuccess,
    getNextPageIsPossible,
    refetch,
  };
}
