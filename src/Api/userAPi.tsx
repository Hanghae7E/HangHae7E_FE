/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Iprofile, auth, IProfileFormData } from '../TypeInterface/userType';
import jwtUtils from '../util/JwtUtil';
import baseUrl from './baseUrl';

export const getMyInfo = (id: string| false) => {
  const res = baseUrl.get(`/user/${id}`);
  return res;
};
export const setMyName = (userInfo: Iprofile) => {
  const form = new FormData();
  const token = localStorage.getItem('token');
  const userId = jwtUtils.getId(token || '');
  form.append('username', userInfo.username);
  form.append('phone_number', userInfo.phone_number);
  const res = baseUrl.put(`/user/${userId}`, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};
// 유저 추가
const postUser = async () => {
  const res = await baseUrl.put('/user');
  return res;
};
// 모든 유저 조회
const getAllUser = async () => {
  const res = await baseUrl.get('/user');
  return res;
};

// 회원 탈퇴(유저 정보 삭제)
const deleteUser = async (email: string) => {
  const res = await baseUrl.delete(`/user/${email}`);
  return res;
};
// 유저 프로필 조회
const getUserProfile = async (id: string | false) => {
  const res = await baseUrl.get(`/user/${id}`);
  return res;
};

// 유저 프로필 수정
const putUserProfile = async (profile: IProfileFormData, Auth : auth) => {
  // console.log('리퀘스트 전 데이터', profile);
  const forms = new FormData();
  const availableTime = `${profile.workDay},${profile.time}`;
  const availablePeriod = `${profile.startDate},${profile.endDate}`;
  if (profile.username) forms.append('username', profile.username);
  if (profile.email)forms.append('email', profile.email);
  if (profile.phone_number)forms.append('phone_number', profile.phone_number);
  if (profile.startDate || profile.endDate)forms.append('available_period', availablePeriod);
  if (profile.workDay || profile.time)forms.append('available_time', availableTime);
  if (profile.skills)forms.append('skills', profile.skills.toString());
  if (profile.position) forms.append('fields', profile.position);
  if (profile.face_to_face) forms.append('face_to_face', profile.face_to_face.toString());
  if (profile.career_period) forms.append('career_period', profile.career_period);
  if (profile.portfolio_url) forms.append('portfolio_url', profile.portfolio_url);
  const res = await baseUrl.put(`/user/${Auth.userId}`, forms, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};
const putImageProfile = async (file: File, username:string) => {
  const forms = new FormData();
  const token = localStorage.getItem('token');
  const userId = jwtUtils.getId(token || '');
  console.log(username, file);
  if (username) forms.append('username', username);
  if (file) forms.append('files', file);
  const res = await baseUrl.put(`/user/${userId}`, forms, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

export default {
  getMyInfo: (id: string |false) => getMyInfo(id),
  setMyName: (userInfo: Iprofile) => setMyName(userInfo),
  getAllUser: () => getAllUser(),
  postUser: () => postUser(),
  getUserProfile: (id: string | false) => getUserProfile(id),
  putUserProfile: (data: IProfileFormData, Auth: auth) => putUserProfile(data, Auth),
  putImageProfile: (file: File, username:string) => putImageProfile(file, username),
};
