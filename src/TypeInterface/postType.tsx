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

export interface IRegisteredPosts{
	id: number;
	project_start_time : string;
	project_end_time:string;
	recruit_status:string;
	title: string;
	recruit_due_time : string;
	capacity : string;
	status: string;
}
export interface IapplyPosts{
	id: number;
	project_start_time : string;
	project_end_time:string;
	recruit_status:string;
	title: string;
	recruit_due_time : string;
	capacity : string;
	status: string;
}
