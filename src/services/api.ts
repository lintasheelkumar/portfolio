import { profileData } from '../data/profile';

interface Profile {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  experience: {
    companyTitle: string;
    company: string;
    position: string;
    period: string;
    location: string;
    achievements: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
  };
  certifications: string[];
}



/**
 * Fetch profile data
 * @returns Profile data
 */
export const fetchProfile = async () => {
  return profileData;
};

export type { Profile }; 