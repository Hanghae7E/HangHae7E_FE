import baseUrl from './baseUrl';

const getRecruitPosts = async () => {
  const res = await baseUrl.get('/main');
  return res;
};
const getRecommendPosts = async () => {
  const res = await baseUrl.get('/main?_limit=3&_sort=recruitDueTime&_order=ASC');
  return res;
};

export default {
  getRecruitPosts: () => getRecruitPosts(),
  getRecommendPosts: () => getRecommendPosts(),
};
