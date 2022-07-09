import baseUrl from './baseUrl';

// 모든 태그 조회
const getAllTag = async () => {
  const res = await baseUrl.get(`/tag`);
  return res;
};
const putTag = async () => {
  const res = await baseUrl.put(`/tag`);
  return res;
};

export default {
  getAllTag: () => getAllTag(),
  putTag: () => putTag(),
};
