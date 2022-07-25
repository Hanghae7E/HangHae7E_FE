export interface userType {
    id: string
    email: string
    password: string,
    username: string,
    phoneNumber: string,
    socialName: string,
  }
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
export interface jwtType {
    userId: string
    email: string
  }
