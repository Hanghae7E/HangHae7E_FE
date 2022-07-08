import baseUrl from './baseUrl';

const getRecruitPosts = async (pageParam: number) => {
  const res = await baseUrl.get(`/recruitPost?_page=${pageParam}&_limit=3`);

  return res;
};
const getRecommendPosts = async () => {
  const res = await baseUrl.get('/api/main?_limit=3&_sort=recruitDueTime&_order=ASC');
  return res;
};

export default {
  getRecruitPosts: (pageParam:number) => getRecruitPosts(pageParam),
  getRecommendPosts: () => getRecommendPosts(),
};
