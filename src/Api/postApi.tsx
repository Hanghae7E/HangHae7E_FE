/* eslint-disable no-console */
import { FieldValues } from 'react-hook-form';
import { ITag } from '../TypeInterface/postType';
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
  hashTag?: Array<ITag>,
  startDate?: string,
  endDate?: string,
  dueDate?: string,
  imgName?: File,
) => {
  const forms = new FormData();

  if (datas.title) forms.append('title', datas.title);
  if (datas.designer)forms.append('requiredDesigners', datas.designer);
  if (datas.developer)forms.append('requiredDevelopers', datas.developer);
  if (datas.pmanager) forms.append('requiredProjectManagers', datas.pmanager);
  if (startDate)forms.append('projectStartTime', startDate);
  if (endDate) forms.append('projectEndTime', endDate);
  if (dueDate)forms.append('recruitDueTime', dueDate);
  if (hashTag)forms.append('tags', hashTag.map((v) => v.tagId).join(','));
  if (imgName) forms.append('img', imgName);
  if (datas.body) forms.append('body', datas.body);

  const res = await baseUrl.post('/recruitPost', forms, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

const updateRecruitPost = async (
  datas: FieldValues,
  postId:string | undefined,
  hashTag?: Array<ITag>,
  startDate?: string,
  endDate?: string,
  dueDate?: string,
  imgName?: File,
) => {
  const forms = new FormData();

  if (datas.title) forms.append('title', datas.title);
  if (datas.designer)forms.append('requiredDesigners', datas.designer);
  if (datas.developer)forms.append('requiredDevelopers', datas.developer);
  if (datas.pmanager) forms.append('requiredProjectManagers', datas.pmanager);
  if (startDate)forms.append('projectStartTime', startDate);
  if (endDate) forms.append('projectEndTime', endDate);
  if (dueDate)forms.append('recruitDueTime', dueDate);
  if (hashTag)forms.append('tags', hashTag.map((v) => v.tagId).join(','));
  if (imgName) forms.append('img', imgName);
  if (datas.body) forms.append('body', datas.body);
  // console.log(forms.get('title'));
  // console.log(forms.get('requiredDesigners'));
  // console.log(forms.get('requiredDevelopers'));
  // console.log(forms.get('requiredProjectManagers'));
  // console.log(forms.get('projectStartTime'));
  // console.log(forms.get('projectEndTime'));
  // console.log(forms.get('recruitDueTime'));
  // console.log(forms.get('tags'));
  // console.log(forms.get('body'));
  const res = await baseUrl.put(`/recruitPost/${postId}`, forms, {
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
  const res = await baseUrl.post(`/recruitPost/${postId}/application`, {});
  return res;
};

export const postRecruitDetailAccept = async (
  { postId, userId }: {
    postId: string,
    userId: number
  },
) => {
  const res = await baseUrl.post(`/recruitPost/${postId}/application/accepted`, {
    userId,
  });
  return res;
};

export const deleteRecruitDetail = async ({ postId }: {postId: string}) => {
  const res = await baseUrl.delete(`/recruitPost/${postId}`);
  return res;
};

export const postRejectRecruit = async (
  { postId, userId }: {
    postId: string,
    userId: number
  },
) => {
  console.log(userId);
  const res = await baseUrl.post(`/recruitPost/${postId}/application/denied`, {
    userId,
  });
  return res;
};

export default {
  getRecruitPosts: (pageParam: number, tag:number) => getRecruitPosts(pageParam, tag),
  postRecruitPost: (
    form: FieldValues,
    hashTag?: Array<ITag>,
    startDate?: string,
    endDate?: string,
    dueDate?: string,
    imgName?: File,
  ) => postRecruitPost(
    form,
    hashTag,
    startDate,
    endDate,
    dueDate,
    imgName,
  ),
  updateRecruitPost: (
    form: FieldValues,
    postId:string | undefined,
    hashTag?: Array<ITag>,
    startDate?: string,
    endDate?: string,
    dueDate?: string,
    imgName?: File,
  ) => updateRecruitPost(
    form,
    postId,
    hashTag,
    startDate,
    endDate,
    dueDate,
    imgName,
  ),
  getTag,
  getRecommendPosts,
  getRecruitPostDetails: ({ postId }: { postId: string }) => getRecruitPostDetails({ postId }),
};
