export interface Iprofile {
    id: number;
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
  }
export interface auth {
    userId: string;
    username: string;
    token:string;
  }
export interface IProfileFormData {
    id:number;
    username: string;
    email: string;
    phone_number: string;
    profile_image_url:string;
    residence: Array<string>;
    available_period: string ;
    workDay: string ;
    time: string ;
    available_time: string ;
    startDate: string;
    endDate: string;
    position: string ;
    fields: Array<string>;
    face_to_face: boolean ;
    skills: Array<string> ;
    career_period: string ;
    portfolio_url: string ;
  }
