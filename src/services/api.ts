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

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Mock data for fallback when API is unavailable
const MOCK_PROFILE: Profile = {
  name: 'Linta Sheel Kumar',
  title: 'Senior Software Engineer',
  summary: 'Passionate and performance-driven software engineer with experience building responsive and scalable applications. Specializes in modern frontend technologies with a solid foundation in backend systems.',
  skills: [
    'React', 'Angular', 'TypeScript', 'Node.js', 'JavaScript',
    'HTML', 'CSS', 'Zustand', 'Redux', 'React Query',
    'Tailwind', 'Vite', 'Cypress', 'Jest', 'C#', '.NET', 'Spring Boot', 'Java', 'SQL', 'Python', 'Docker', 'AWS', 
    'Python', 'Scikit Learn', 'TensorFlow', 'Keras', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Scikit-learn'
  ],
  experience: [
    {
      companyTitle: 'JP',
      company: 'JPMorgan Chase & Co.',
      position: 'Senior Software Engineer',
      period: '08/2021 - Present',
      location: 'London',
      achievements: [
        'Led the design and creation of new portfolio management screens',
        'Refactoring of reusable React components across trade and portfolio management platforms',
        'Reduced application bugs by 30% through proactive UI testing and legacy code clean-up',
        'Collaborated closely with Portfolio managers to gather and analyse requirements',
        'Developed and optimized reporting capabilities, enhancing portfolio management insights',
        'Upgraded authentication frameworks and Spring Boot microservices to improve performance and security',
        'Designed and implemented scalable database architectures, driving efficient data management'
      ]
    },
    {
      companyTitle: 'GM&E',
      company: 'Global Media & Entertainment',
      position: 'Software Engineer',
      period: '04/2019 - 05/2021',
      location: 'Reading',
      achievements: [
        'Built and deployed modern, dockerized frontend apps (React, Angular) integrated with .NET Core APIs',
        'Created a modular component library improving code reuse across teams',
        'Debugged and enhanced performance of user dashboards with App Insights monitoring'
      ]
    },
    {
      companyTitle: 'TU',
      company: 'TravelUp',
      position: 'Software Engineer',
      period: '11/2017 - 04/2019',
      location: 'Reading',
      achievements: [
        'Developed features like seat map booking, flight upgrades, and car rentals using C#, JavaScript and HTML and CSS',
        'Increased data processing efficiency by 25% by optimizing SQL queries for report generation and analysis'
      ]
    }
  ],
  education: {
    degree: 'BTech',
    institution: 'Government Model Engineering College',
    location: 'India',
    period: ''
  },
  certifications: [
    'Machine Learning - Stanford Online taught by Andrew Ng',
    'Advanced SQL for Data Scientists - LinkedIn Learning by Dan Sullivan',
    'AWS cloud practitioner by Amazon'
  ]
};

/**
 * Fetch profile data from the API
 */
export const fetchProfile = async (): Promise<Profile> => {
  try {
    const response = await fetch(`${API_URL}/profile`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching profile data:', error);
    console.log('Using mock data as fallback');
    return MOCK_PROFILE;
  }
};

export type { Profile }; 