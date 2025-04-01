import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/api/profile', (_req: Request, res: Response) => {
  const profileData = {
    name: 'Linta Sheel Kumar',
    title: 'Senior Software Engineer',
    summary: 'Passionate and performance-driven software engineer with experience building responsive and scalable applications. Specializes in modern frontend technologies with a solid foundation in backend systems.',
    skills: [
      'React', 'Angular', 'TypeScript', 'Node.js', 'JavaScript',
      'HTML', 'CSS', 'Zustand', 'Redux', 'React Query',
      'Tailwind', 'Vite', 'Cypress', 'Jest'
    ],
    experience: [
      {
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
      degree: 'Bachelor of Technology in Computer Science',
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

  res.json(profileData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 