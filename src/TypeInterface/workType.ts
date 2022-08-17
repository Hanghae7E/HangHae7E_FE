/* eslint-disable no-tabs */
import { ITag } from './postType';

export interface IWorkSpace{
  createdAt: string
  workSpaceId: number
  workSpaceTitle: string
}

export interface ITeam{
  userId: number,
  username: string,
  position: string,
  profileImageUrl: string
}
export interface IUserStatus{
  userId: number
  workSpaceId: number
}
export interface IWorkSpaceInfo {
  imgUrl: string
  projectName: string
  tags: Array<ITag>
  team: Array<ITeam>
  uuid: string
  workSpaces:Array<IWorkSpace>
  userStatus:Array<IUserStatus>
}

export interface IWorkSpacePages{
	workPage: Array<IWorkSpace>;
	currentPage: number;
}

export interface IWorkSpaceDetail{
  workSpaceId: number,
  title: string,
  content: string,
  createdAt: string
}
