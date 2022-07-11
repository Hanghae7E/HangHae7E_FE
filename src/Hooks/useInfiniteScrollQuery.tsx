import { useInfiniteQuery } from 'react-query';
import postApi from '../Api/postApi';

export default function useInfiniteScrollQuery() {
  const getPageBoard = async ({ pageParam = 0 }) => {
    const res = await postApi.getRecruitPosts(pageParam);
    return {
      // 실제 데이터
      postPage: res.data,
      // 반환 값에 현재 페이지를 넘겨주자
      currentPage: pageParam,
    };
  };

  const {
    data: getBoard,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
  } = useInfiniteQuery(['recruit_posts'], getPageBoard, {
    getNextPageParam: (lastPage) => {
      // lastPage와 pages는 콜백함수에서 리턴한 값을 의미한다!!
      // lastPage: 직전에 반환된 리턴값, pages: 여태 받아온 전체 페이지
      if (!lastPage.postPage[lastPage.postPage.length - 1].last) {
        return lastPage.currentPage + 1;
      }
      // 마지막 페이지면 undefined가 리턴되어서 hasNextPage는 false가 됨!
      return undefined;
    },
  });

  return {
    getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible,
  };
}
