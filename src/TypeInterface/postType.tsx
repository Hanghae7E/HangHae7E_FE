/* eslint-disable no-tabs */
export interface ITag {
	body: string;
	tagId: number
}

export interface IRecruitPost{
	postId: number;
	username : string;
	userPosition:string;
	authorFields:Array<ITag>;
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
	required_developers:string;
	required_project_managers:string;
	required_designers:string;
}
export interface IApplyPosts{
	id: number;
	project_start_time : string;
	project_end_time:string;
	recruit_status:string;
	title: string;
	recruit_due_time : string;
	capacity : string;
	status: string;
	required_developers:string;
	required_project_managers:string;
	required_designers:string;
}
export interface ErrorStatusInfo {
  response: {
    data: {
      message: string,
      status:string
    }
  }
}
