import baseUrl from './baseUrl';

const geTeamPageInfo = async (postId: number) => {
  const res = await baseUrl.get(`/project/${postId}`);
  return res;
};
const postWorkSpace = async (projectId: number) => {
  const res = await baseUrl.post(`/project/${projectId}/workSpace`);
  return res;
};
const getWorkSpace = async (pageParam: number, projectId: number) => {
  const res = await baseUrl.get(`/project/${projectId}/workSpace?page=${pageParam}`);
  return res;
};
const putWorkSpaceDetail = async (
  projectId: number,
  workSpaceId: number,
  title:string,
  content:string,
) => {
  const res = await baseUrl.put(`/project/${projectId}/workSpace/${workSpaceId}`, {
    title,
    content,
  });
  return res;
};
const getWorkSpaceDetail = async (projectId: number, workSpaceId: number) => {
  if (workSpaceId !== 0) {
    const res = await baseUrl.get(`/project/${projectId}/workSpace/${workSpaceId}`);
    return res;
  }
  return null;
};
const delWorkSpace = async (projectId: number, workSpaceId: number) => {
  const res = await baseUrl.delete(`/project/${projectId}/workSpace/${workSpaceId}`);
  return res;
};

export default {
  geTeamPageInfo: (postId: number) => geTeamPageInfo(postId),
  postWorkSpace: (projectId: number) => postWorkSpace(projectId),
  getWorkSpace: (pageParam: number, projectId: number) => getWorkSpace(pageParam, projectId),
  getWorkSpaceDetail: (
    projectId: number,
    workSpaceId: number,
  ) => getWorkSpaceDetail(projectId, workSpaceId),
  delWorkSpace: (
    projectId: number,
    workSpaceId: number,
  ) => delWorkSpace(projectId, workSpaceId),
  putWorkSpaceDetail: (
    projectId: number,
    workSpaceId: number,
    title:string,
    content:string,
  ) => putWorkSpaceDetail(projectId, workSpaceId, title, content),
};
