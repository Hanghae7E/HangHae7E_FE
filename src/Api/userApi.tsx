/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITag } from '../TypeInterface/postType';
import { IProfileFormData, ISideProfile } from '../TypeInterface/userType';
import jwtUtils from '../util/JwtUtil';
import baseUrl from './baseUrl';

export const getMyInfo = async (id: string| false) => {
  const res = await baseUrl.get(`/user/${id}`);
  return res;
};

// 신규회원 닉네임 변경.
// (구분할 수 있는 값이 없어, 핸드폰 번호가 없는 경우 신규 회원으로 간주. 핸드폰 번호 초기화 )
export const setMyName = (username: string) => {
  const form = new FormData();
  const token = localStorage.getItem('token');
  const userId = jwtUtils.getId(token || '');
  form.append('username', username);
  form.append('phone_number', '010-0000-0000');
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
export const getUserProfile = async (id: string | false) => {
  const res = await baseUrl.get(`/user/${id}`);
  return res;
};

// 프로필 사이드 데이터 변경
export const setSideProfile = async (userInfo: ISideProfile) => {
  console.log('사이드 프로필 수정', userInfo);
  const form = new FormData();
  const token = localStorage.getItem('token') as string;
  const userId = jwtUtils.getId(token || '');
  if (userInfo.username) form.append('username', userInfo.username);
  if (userInfo.file) form.append('files', userInfo.file);
  if (userInfo.skills) form.append('skills', userInfo.skills.toString());
  if (userInfo.fields) form.append('fields', userInfo.fields.toString());
  const res = await baseUrl.put(`/user/${userId}`, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    },
  });
  return res;
};

// 유저 프로필 수정
const putUserProfile = async (
  profile: IProfileFormData,
  selected:Array<ITag>,
  startDate:string,
  endDate:string,
) => {
  const token = localStorage.getItem('token') as string;
  const userId = jwtUtils.getId(token || '');
  const forms = new FormData();
  const availableTime = `${profile.workDay},${profile.time}`;
  const availablePeriod = `${startDate},${endDate}`;
  if (profile.position) forms.append('position', profile.position);
  if (profile.fields) forms.append('fields', profile.fields.toString());
  if (selected)forms.append('skills', selected.map((v) => v.body).toString());
  if (profile.username) forms.append('username', profile.username);
  if (profile.career_period) forms.append('career_period', profile.career_period);
  if (profile.portfolio_url) forms.append('portfolio_url', profile.portfolio_url);
  if (profile.email)forms.append('email', profile.email);
  if (profile.phone_number)forms.append('phone_number', profile.phone_number);
  if (profile.residence) forms.append('residence', profile.residence);
  if (profile.face_to_face) forms.append('face_to_face', profile.face_to_face.toString());
  if (startDate || endDate)forms.append('available_period', availablePeriod);
  if (profile.workDay || profile.time)forms.append('available_time', availableTime);
  if (profile.file) forms.append('files', profile.file);

  const res = await baseUrl.put(`/user/${userId}`, forms, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    },
  });
  return res;
};

export default {
  getMyInfo: (id: string |false) => getMyInfo(id),
  setMyName: (username: string) => setMyName(username),
  setSideProfile: (userInfo: ISideProfile) => setSideProfile(userInfo),
  getAllUser: () => getAllUser(),
  postUser: () => postUser(),
  getUserProfile: (id: string | false) => getUserProfile(id),
  putUserProfile: (
    profile: IProfileFormData,
    selected:Array<ITag>,
    startDate:string,
    endDate:string,

  ) => putUserProfile(profile, selected, startDate, endDate),
};
