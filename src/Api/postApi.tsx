import baseUrl from './baseUrl';

const getRecruitPosts = async (pageParam: number) => {
  let pass = pageParam;
  if (pass === 0) {
    pass = 1;
  }

  const res = await baseUrl.get(`/recruitPost?_limit=3&_page=${pageParam}`);

  return res;
};
const getRecommendPosts = async () => {
  const res = await baseUrl.get('/api/main?_limit=3&_sort=recruitDueTime&_order=ASC');
  return res;
};

export default {
  getRecruitPosts: (pageParam:number) => getRecruitPosts(pageParam),
  getRecommendPosts,
};
