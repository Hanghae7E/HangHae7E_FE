export type Applicant = {
    userId: number
    email: string
    username: string
    position: string
    profileImageUrl: string
    status: string
  }
export interface DetailProjectData {
    userId: number, //
    title: string //
    body: string //
    projectStartTime: string //
    projectEndTime: string //
    recruitDueTime: string //
    recruitStatus:string;
    requiredDesigners: number; //
    requiredDevelopers: number; //
    requiredProjectManagers: number; //
    tags: {
      tagId: number,
      body: string
    }[] //
    // (작성자의 경우에만)
    applicants?: Applicant[]
  }

export interface RegisteredPost {
    capacity: string;
    id: string;
    project_end_time: string;
    project_start_time: string;
    recruit_due_time: string;
    recruit_status: string;
    status: string;
    title: string
  }

export interface UserData {
    username: string, //
    email: string, //
    phone_number: string, //
    profile_image_url: string,
    residence: string, //
    available_period: string //
    available_time: string //
    position: string // [개발자.디자이너.기획자]
    fields: string[] //
    face_to_face: boolean, //
    skills: string[] //
    career_period: string //
    portfolio_url: string //
    applyPosts: string[] //
    registeredPosts: RegisteredPost[] //

  }
