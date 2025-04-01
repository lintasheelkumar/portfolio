import React, { useEffect } from 'react';

interface EducationCardProps {
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
  };
  certifications: string[];
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const EducationCard: React.FC<EducationCardProps> = ({
  education,
  certifications,
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

  return (
    <div className="education-card w-full bg-white rounded-xl shadow-lg overflow-hidden mx-auto">
      <div className="md:flex h-full">
        <div className="md:w-2/5 bg-gray-100 flex items-center justify-center">
          <div className="h-full w-full bg-bumble-yellow flex items-center justify-center p-6">
            <div className="text-white text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5m-9 5v9m-9-5h18" />
              </svg>
              <p className="text-center mt-4 font-bold text-lg">Education</p>
            </div>
          </div>
        </div>
        
        <div className="p-8 md:w-3/5">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Education & Certifications</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-bumble-yellow">{education.degree}</h3>
            <p className="text-gray-600">{education.institution}</p>
            <p className="text-gray-500">{education.location}</p>
          </div>
          
          <div>
            <h3 className="text-xl text-bumble-yellow font-semibold  mb-3">Certifications</h3>
            <ul className="list-disc pl-5 space-y-2 max-h-48 overflow-y-auto text-gray-600 " style={{ paddingInlineStart: '20px' }}>
              {certifications.map((cert, index) => (
                <li key={index} className="text-gray-600">{cert}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => onSwipeRight && onSwipeRight()}
              className="px-8 py-3 bg-bumble-yellow text-white rounded-full hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center"
            >
              <span>Back to Profile</span>
            </button>
            <button
              onClick={() => onSwipeLeft && onSwipeLeft()}
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

export default EducationCard; 