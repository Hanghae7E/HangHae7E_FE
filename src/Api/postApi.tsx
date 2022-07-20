import { FieldValues } from 'react-hook-form';
import baseUrl from './baseUrl';

const getRecruitPosts = async (pageParam: number, tag:number) => {
  const res = await baseUrl.get(`/main?size=3&sort=new&page=${pageParam}&tags=${tag !== 0 ? tag : ''}`);
  return res;
};

const getRecommendPosts = async () => {
  const res = await baseUrl.get('/main?size=3&sort=due&page=0');
  return res;
};

const postRecruitPost = async (
  datas: FieldValues,
  hashTagId?: string,
  startDate?: string,
  endDate?: string,
  dueDate?: string,
  imgName?: File,
) => {
  const forms = new FormData();

  if (datas.title) forms.append('title', datas.title);
  if (datas.designer)forms.append('requiredDesigners', datas.designer);
  if (datas.developer)forms.append('requiredDevelopers', datas.developer);
  if (datas.pmaster) forms.append('requiredProjectManagers', datas.pmaster);
  if (startDate)forms.append('projectStartTime', startDate);
  if (endDate) forms.append('projectEndTime', endDate);
  if (dueDate)forms.append('recruitDueTime', dueDate);
  if (hashTagId)forms.append('tags', hashTagId);
  if (imgName) forms.append('img', imgName);
  if (datas.body) forms.append('body', datas.body);
  const res = await baseUrl.post('/recruitPost', forms, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

const getTag = async () => {
  const res = await baseUrl.get('/tag');
  return res;
};

// 상세페이지 데이터
export const getRecruitPostDetails = ({ postId }: {postId: string}) => async () => {
  const { data } = await baseUrl.get(`/recruitPost/${postId}`);
  return data;
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

export const deleteRecruitDetail = async ({ postId }: {postId: string}) => {
  const res = await baseUrl.delete(`/recruitAccept/${postId}`);
  return res;
};

export const postRejectRecruit = async ({ postId }: {postId: string}) => {
  const res = await baseUrl.post(`/recruitPost/${postId}/application/denied`);
  return res;
};

export default {
  getRecruitPosts: (pageParam: number, tag:number) => getRecruitPosts(pageParam, tag),
  postRecruitPost: (
    form: FieldValues,
    hashTagId?: string,
    startDate?: string,
    endDate?: string,
    dueDate?: string,
    imgName?: File,
  ) => postRecruitPost(
    form,
    hashTagId,
    startDate,
    endDate,
    dueDate,
    imgName,
  ),
  getTag,
  getRecommendPosts,
};
