import React, { useEffect } from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  image?: string;
  summary: string;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  image,
  summary,
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
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex h-full">
        <div className="md:w-2/5 bg-gray-100 flex items-center justify-center">
          <div className="h-full w-full flex items-center justify-center p-6">
            <img
              src={image}
              alt={name}
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
        
        <div className="p-8 md:w-3/5">
          <h2 className="text-4xl font-bold text-gray-800">{name}</h2>
          <h3 className="text-2xl text-bumble-yellow mt-2">{title}</h3>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">{summary}</p>
          
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={onSwipeRight}
              className="px-8 py-4 bg-bumble-yellow text-white rounded-full hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center text-lg"
            >
              <span>View Experience</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            {onSwipeLeft && (
              <button
                onClick={onSwipeLeft}
                className="px-8 py-4 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-colors duration-200 text-lg"
              >
                Skip
              </button>
            )}
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-6">
            Use arrow keys ← → to navigate
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 