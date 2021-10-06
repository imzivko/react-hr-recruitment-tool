export interface Applicant {
  id: string;
  phaseComplete: {
    interview1: boolean;
    task: boolean;
    interview2: boolean;
  };
  cv: boolean;
  ml: boolean;
  status: string;
  phase: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  seniority: string;
  websiteLink: string;
  date: string;
}
