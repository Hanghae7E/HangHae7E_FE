/* eslint-disable no-tabs */
export interface ITag {
	body: string;
	tagId: number
}
export interface IRecruitPost{
	postId: number;
	username : string;
	userPosition:string;
	introduce:string;
	authorImage : string;
	title: string;
	projectImage : string;
	projectStartTime : string;
	projectEndTime: string;
	recruitDueTime: string;
	requiredDevelopers:number,
	requiredDesigners:number,
	requiredProjectManagers:number,
	tags: Array<ITag>;
	last:boolean

}

export interface IRecruitPages{
	postPage: Array<IRecruitPost>;
	currentPage: number;
}
