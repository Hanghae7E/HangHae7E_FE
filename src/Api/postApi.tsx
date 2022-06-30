import baseUrl from './baseUrl';

const getRecruitPosts = async () => {
  const res = await baseUrl.get('/main?_sort=id&_order=DESC');
  return res;
};

export default {
  getRecruitPosts: () => getRecruitPosts(),
};
