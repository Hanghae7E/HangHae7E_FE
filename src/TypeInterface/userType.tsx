import { IapplyPosts, IRegisteredPosts } from './postType';

export interface userType {
  id: string
  email: string
  password: string,
  username: string,
  phoneNumber: string,
  socialName: string,
}
export interface Iprofile {
  userId: number;
  username: string;
  email: string;
  phone_number: string;
  profile_image_url: string;
  residence: string;
  available_period: string;
  available_time: string;
  position: string;
  fields: Array<string>;
  face_to_face: boolean;
  skills: Array<string>;
  career_period: string;
  portfolio_url: string;
  file:File;
}

export interface auth {
    userId: number | false;
    username: string | null;
    token:string | null;
  }
export interface IProfileFormData {
  userId:number;
  username: string;
  file:File;
  profile_image_url:string;
  position: string ;
  fields: Array<string>;
  career_period: string ;
  skills: Array<string> ;
  portfolio_url: string ;
  phone_number: string;
  email: string;
  residence: string;
  face_to_face: boolean ;
  available_period: string ;
  startDate: string;
  endDate: string;
  available_time: string ;
  workDay: string ;
  time: string ;
  test : string ;
  registeredPosts: Array<IRegisteredPosts>;
  applyPosts:Array<IapplyPosts>;
  }
