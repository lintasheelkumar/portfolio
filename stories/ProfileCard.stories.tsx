import type { Meta, StoryObj } from '@storybook/react';
import ProfileCard from '../src/components/cards/ProfileCard';

const meta = {
  title: 'Components/Cards/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Linta Sheel Kumar',
    title: 'Senior Software Engineer',
    summary: 'Passionate and performance-driven software engineer with experience building responsive and scalable applications. Specializes in modern frontend technologies with a solid foundation in backend systems.',
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
 