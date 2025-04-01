import type { Meta, StoryObj } from '@storybook/react';
import ExperienceCard from '../src/components/cards/ExperienceCard';

const meta = {
  title: 'Components/Cards/ExperienceCard',
  component: ExperienceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExperienceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JPMorgan: Story = {
  args: {
    company: 'JPMorgan Chase & Co.',
    position: 'Senior Software Engineer',
    period: '08/2021 - Present',
    location: 'London',
    achievements: [
      'Led the design and creation of new portfolio management screens',
      'Refactoring of reusable React components across trade and portfolio management platforms',
      'Reduced application bugs by 30% through proactive UI testing and legacy code clean-up',
      'Collaborated closely with Portfolio managers to gather and analyse requirements',
    ],
  },
};

export const GlobalMedia: Story = {
  args: {
    company: 'Global Media & Entertainment',
    position: 'Software Engineer',
    period: '04/2019 - 05/2021',
    location: 'Reading',
    achievements: [
      'Built and deployed modern, dockerized frontend apps (React, Angular) integrated with .NET Core APIs',
      'Created a modular component library improving code reuse across teams',
      'Debugged and enhanced performance of user dashboards with App Insights monitoring',
    ],
  },
}; 