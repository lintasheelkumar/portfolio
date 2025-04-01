import React, { useEffect } from 'react';

interface ExperienceCardProps {
  companyTitle: string;
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const styles = `
  .achievements-list::-webkit-scrollbar {
    width: 6px;
  }

  .achievements-list::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .achievements-list::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 20px;
  }

  .achievements-list::-webkit-scrollbar-thumb:hover {
    background-color: #c1c1c1;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyTitle,
  company,
  position,
  period,
  location,
  achievements,
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

  const renderLogo = () => {
    if (company.toLowerCase().includes('jpmorgan')) {
      return (
        <div className="flex flex-col items-center">
          <img 
            src="/portfolio/images/stock-logo.svg" 
            alt="JPMorgan Logo" 
            className="h-20 w-20 mb-4 invert brightness-0 filter"
          />
        </div>
      );
    } else if (company.toLowerCase().includes('global')) {
      return (
        <div className="flex flex-col items-center">
          <img 
            src="/portfolio/images/video-logo.svg" 
            alt="Global Logo" 
            className="h-20 w-20 mb-4 invert brightness-0 filter"
          />
        </div>
      );
    } else if (company.toLowerCase().includes('travelup')) {
      return (
        <div className="flex flex-col items-center">
          <img 
            src="/portfolio/images/travel-logo.svg" 
            alt="TravelUp Logo" 
            className="h-20 w-20 mb-4 invert brightness-0 filter"
          />
        </div>
      );
    }
    else if (company.toLowerCase().includes('blueteq')) {
      return (
        <div className="flex flex-col items-center">
          <img 
            src="/portfolio/images/hospital-logo.svg" 
            alt="Blueteq Logo" 
            className="h-20 w-20 mb-4 invert brightness-0 filter"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex h-full">
        <div className="md:w-2/5 bg-gray-100 flex items-center justify-center">
          <div className="h-full w-full bg-bumble-yellow flex items-center justify-center p-6">
            <div className="text-white text-center flex flex-col items-center justify-center">
              {renderLogo()}
              <div className="text-5xl font-bold">{companyTitle}</div>
              <div className="mt-2">{company}</div>
            </div>
          </div>
        </div>
        
        <div className="p-8 md:w-3/5">
          <div className="flex justify-between items-start">
          <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-800">{company}</h2>
              <h3 className="text-xl text-bumble-yellow mt-2">{position}</h3>
            </div>
            <div className="text-right">
              <p className="text-gray-500 font-medium">{period}</p>
              <p className="text-gray-500">{location}</p>
            </div>
          </div>
          
          <div className="mt-6">
            {/* <h4 className="text-xl font-semibold mb-3">Key Achievements</h4> */}
            <ul className="list-disc list-outside text-left space-y-2 max-h-48 overflow-y-auto text-gray-600 achievements-list" style={{ paddingInlineStart: '20px' }}>
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-600 text-left">
                  {achievement}
                </li>
              ))}
            </ul>
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

export default ExperienceCard; 