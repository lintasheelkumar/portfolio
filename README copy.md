# Linta Sheel Kumar Portfolio

An interactive portfolio website inspired by the Bumble dating app UI/UX, showcasing professional experience and skills in a swipeable card format.

## Tech Stack

### Frontend
- React 18.x
- TypeScript 5.x
- TailwindCSS 3.x
- React Query 5.x
- Zustand 4.x
- Storybook 7.x
- Vite (for build tooling)

### Backend
- Express.js 4.x
- Node.js 18.x+

## Features

- **Card Swiping**: Smooth swiping animations for card navigation
- **Page Transitions**: Subtle page transition effects
- **Responsive Design**: Mobile-first approach with tablet and desktop support
- **Storybook Integration**: Component documentation and testing

## Project Structure

```
portfolio-app/
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── assets/              # Static assets
│   │   ├── components/          # Reusable UI components
│   │   │   ├── common/          # Common components
│   │   │   ├── cards/           # Card components
│   │   │   ├── layout/          # Layout components
│   │   │   └── animations/      # Animation components
│   │   ├── pages/               # Page components
│   │   ├── store/               # Zustand store
│   │   ├── hooks/               # Custom hooks
│   │   ├── services/            # API services
│   │   ├── types/               # TypeScript type definitions
│   │   ├── utils/               # Utility functions
│   │   ├── App.tsx              # Main App component
│   │   └── main.tsx             # Entry point
│   ├── .storybook/              # Storybook configuration
│   ├── stories/                 # Storybook stories
│   ├── package.json
│   └── tsconfig.json
├── server/                      # Backend Express application
│   ├── src/
│   │   ├── controllers/         # Route controllers
│   │   ├── models/              # Data models
│   │   ├── routes/              # API routes
│   │   ├── config/              # Configuration files
│   │   └── index.js             # Server entry point
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── package.json                 # Root package.json
```

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 8.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
# Client setup
cd client
npm install

# Server setup
cd ../server
npm install
```

3. Run in development mode:
```bash
# Start server (in server directory)
npm run dev

# Start client (in client directory)
npm run dev
```

4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Storybook: http://localhost:6006 (Run `npm run storybook` in client directory)

## Contact

Linta Sheel Kumar - [lintasheelkumar@gmail.com](mailto:lintasheelkumar@gmail.com) 