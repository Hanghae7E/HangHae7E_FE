import { IRegisteredPosts } from './postType';

export type Applicant = {
    userId: number
    email: string
    username: string
    position: string
    profileImageUrl: string
    status: string
  }
export interface DetailProjectData {
    userId: number;
    title: string;
    body: string;
    projectStartTime: string;
    projectEndTime: string;
    recruitDueTime: string;
    recruitStatus:string;
    requiredDesigners: number;
    requiredDevelopers: number;
    requiredProjectManagers: number;
    tags: {
      tagId: number,
      body: string
    }[]
    applicants?: Applicant[];
  }

export interface UserData {
    userId: string;
    username: string;
    email: string;
    phone_number: string;
    profile_image_url: string;
    residence: string;
    available_period: string;
    available_time: string ;
    position: string ;
    fields: string[];
    face_to_face: boolean;
    skills: string[] ;
    career_period: string ;
    portfolio_url: string ;
    applyPosts: string[] ;
    registeredPosts: IRegisteredPosts[] ;

  }
