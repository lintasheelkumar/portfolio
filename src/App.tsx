import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import ProfileCard from './components/cards/ProfileCard';
import ExperienceCard from './components/cards/ExperienceCard';
import SkillsCard from './components/cards/SkillsCard';
import EducationCard from './components/cards/EducationCard';
import { useProfileStore } from './store/profileStore';

// Create a client
const queryClient = new QueryClient();

// Placeholder images
const PROFILE_IMAGE = '../public/images/Linta.jpeg';

const MainContent: React.FC = () => {
  const { 
    profile, 
    loading, 
    error, 
    currentView, 
    currentExperienceIndex, 
    fetchProfileData, 
    setCurrentView, 
    nextExperience, 
    prevExperience 
  } = useProfileStore();

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  if (loading) {
    return <div className="text-center py-10">Loading profile data...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  if (!profile) {
    return <div className="text-center py-10">No profile data available</div>;
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const renderCard = () => {
    switch (currentView) {
      case 'profile':
        return (
          <motion.div
            key="profile"
            custom={-1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <ProfileCard
              name={profile.name}
              title={profile.title}
              summary={profile.summary}
              image={PROFILE_IMAGE}
              onSwipeRight={() => setCurrentView('experience')}
            />
          </motion.div>
        );
      
      case 'experience':
        const experience = profile.experience[currentExperienceIndex];
        return (
          <motion.div
            key={`experience-${currentExperienceIndex}`}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <ExperienceCard
              companyTitle={experience.companyTitle}
              company={experience.company}
              position={experience.position}
              period={experience.period}
              location={experience.location}
              achievements={experience.achievements}
              onSwipeLeft={prevExperience}
              onSwipeRight={nextExperience}
            />
          </motion.div>
        );
      
      case 'skills':
        return (
          <motion.div
            key="skills"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <SkillsCard
              skills={profile.skills}
              skillsImage="https://cdn-icons-png.flaticon.com/512/4481/4481239.png"
              onSwipeLeft={() => setCurrentView('experience')}
              onSwipeRight={() => setCurrentView('education')}
            />
          </motion.div>
        );
      
      case 'education':
        return (
          <motion.div
            key="education"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <EducationCard
              education={profile.education}
              certifications={profile.certifications}
              onSwipeLeft={() => setCurrentView('skills')}
              onSwipeRight={() => setCurrentView('profile')}
            />
          </motion.div>
        );
      
      default:
        return <div>Unknown view</div>;
    }
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        {renderCard()}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app min-h-screen bg-bumble-dark flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-12xxl">
          <header className="mb-10 text-white text-center">
            <h1 className="text-4xl font-bold text-center">
              Linta Sheel Kumar <span className="text-bumble-yellow">Portfolio</span>
            </h1>
            <p className="text-gray-300 mt-2">
              Navigate through to learn more about me
            </p>
          </header>
          
          <main className="w-full mb-12">
            <MainContent />
          </main>
          
          <footer className="text-center text-gray-400 text-sm py-4">
            <div className="flex items-center justify-center space-x-4">
              <span>© {new Date().getFullYear()} Linta Sheel Kumar</span>
              <a 
                href="https://www.linkedin.com/in/linta-sheel-kumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-bumble-yellow transition-colors duration-200 flex items-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:lintasheelkumar@gmail.com"
                className="text-gray-400 hover:text-bumble-yellow transition-colors duration-200 flex items-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App; 