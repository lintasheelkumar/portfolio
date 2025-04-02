import React, { useEffect } from 'react';
import { useTouchSwipe } from '../../hooks/useTouchSwipe';

interface SkillsCardProps {
  skills: string[];
  skillsImage?: string;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const SkillsCard: React.FC<SkillsCardProps> = ({
  skills,
  skillsImage,
  onSwipeLeft,
  onSwipeRight,
}) => {
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && onSwipeRight) {
        onSwipeRight();
      } else if (e.key === 'ArrowLeft' && onSwipeLeft) {
        onSwipeLeft();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSwipeLeft, onSwipeRight]);

  // Add touch swipe functionality
  useTouchSwipe({
    onSwipeLeft,
    onSwipeRight,
  });

  return (
    <div className="skills-card w-full bg-white rounded-xl shadow-lg overflow-hidden mx-auto card-container">
      <div className="md:flex">
        <div className="md:w-2/5 bg-gray-100 min-h-[300px] md:min-h-[400px]">
          {skillsImage ? (
            <img
              src={skillsImage}
              alt="Skills"
              className="w-full h-full object-contain p-6"
            />
          ) : (
            <div className="h-full bg-bumble-yellow flex items-center justify-center p-6">
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <p className="text-center mt-4 font-bold text-lg">Skills</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-8 md:w-3/5">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-bumble-yellow text-white rounded-full text-md font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={onSwipeRight}
              className="px-8 py-3 bg-bumble-yellow text-white rounded-full hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center"
            >
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={onSwipeLeft}
              className="px-8 py-3 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-colors duration-200 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Previous</span>
            </button>
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-4">
            Use arrow keys ← → to navigate
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard; 