import baseUrl from './baseUrl';

const getRecruitPosts = async () => {
  const res = await baseUrl.get('/main');
  return res;
};
const getRecommendPosts = async () => {
  const res = await baseUrl.get('/main?_limit=3&_sort=recruitDueTime&_order=ASC');
  return res;
};

// 상세페이지 데이터
export const getRecruitPostDetails = ({ postId }: {postId: string}) => () => {
  const res = baseUrl.get(`/recruitPost/${postId}`);
  return res;
};

// 프로젝트 신청
export const postRecriutDetailPosts = async ({ postId }: {postId: string}) => {
  const res = await baseUrl.post(`/recruitPost/${postId}/application`);
  return res;
};

export const postRecruitDetailAccept = async ({ postId }: {postId: string}) => {
  const res = await baseUrl.post(`/recruitAccept/${postId}`);
  return res;
};

export default {
  getRecruitPosts: () => getRecruitPosts(),
  getRecommendPosts: () => getRecommendPosts(),
};
