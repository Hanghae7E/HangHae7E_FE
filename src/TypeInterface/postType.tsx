/* eslint-disable no-tabs */
export interface IRecruitPost{
	id: number;
	title: string;
	username : string;
	userPosition:string;
	introduce:string;
	authorImage : string;
	projectImage : string;
	projectStartTime : string;
	projectEndTime: string;
	recruitDueTime: string;
	tagList: Array<string>;
	last:boolean

}

export interface IRecruitPages{
	postPage: Array<IRecruitPost>;
	currentPage: number;
}
