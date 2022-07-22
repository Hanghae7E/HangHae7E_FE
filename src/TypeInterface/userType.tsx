import { IapplyPosts, IRegisteredPosts } from './postType';

export interface Iuser {
  id: string;
  username: string;
  email: string;
  phone_number:string;
  profile_image_url: string,
  socialType: string,
}

export interface IsideProfile {
  userId?: string|false;
  username: string;
  file?:File;
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
