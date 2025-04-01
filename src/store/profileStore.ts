import { create } from 'zustand';
import { fetchProfile } from '../services/api';
import type { Profile } from '../services/api';

interface ProfileState {
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  currentView: 'profile' | 'experience' | 'skills' | 'education';
  currentExperienceIndex: number;
  fetchProfileData: () => Promise<void>;
  setCurrentView: (view: 'profile' | 'experience' | 'skills' | 'education') => void;
  nextExperience: () => void;
  prevExperience: () => void;
}

export const useProfileStore = create<ProfileState>((set, get) => ({
  profile: null,
  loading: false,
  error: null,
  currentView: 'profile',
  currentExperienceIndex: 0,
  
  fetchProfileData: async () => {
    set({ loading: true, error: null });
    try {
      const profileData = await fetchProfile();
      set({ profile: profileData, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch profile data', 
        loading: false 
      });
    }
  },
  
  setCurrentView: (view) => {
    set({ currentView: view });
  },
  
  nextExperience: () => {
    const { currentExperienceIndex, profile } = get();
    if (!profile) return;
    
    const maxIndex = profile.experience.length - 1;
    if (currentExperienceIndex < maxIndex) {
      set({ currentExperienceIndex: currentExperienceIndex + 1 });
    } else {
      // Cycle to skills view when reaching the end of experiences
      set({ currentView: 'skills', currentExperienceIndex: 0 });
    }
  },
  
  prevExperience: () => {
    const { currentExperienceIndex, profile } = get();
    if (!profile) return;
    
    if (currentExperienceIndex > 0) {
      set({ currentExperienceIndex: currentExperienceIndex - 1 });
    } else {
      // Go back to profile view when at the first experience
      set({ currentView: 'profile' });
    }
  },
})); 