import baseUrl from './baseUrl';

// 유저 추가
const postUser = async () => {
  const res = await baseUrl.put(`/user`);
  return res;
};
// 모든 유저 조회
const getAllUser = async () => {
  const res = await baseUrl.get(`/user`);
  return res;
};

// 회원 탈퇴(유저 정보 삭제)
const deleteUser = async (email: string) => {
  const res = await baseUrl.delete(`/user/${email}`);
  return res;
};
// 유저 프로필 조회
const getUserProfile = async (email: string) => {
  const res = await baseUrl.get(`/user/${email}`);
  return res;
};
// 유저 프로필 수정
const putUserProfile = async (email: string) => {
  const res = await baseUrl.put(`/user/${email}`);
  return res;
};

export default {
  getAllUser: () => getAllUser(),
  postUser: () => postUser(),
  getUserProfile: (email: string) => getUserProfile(email),
  putUserProfile: (email: string) => putUserProfile(email),
};
