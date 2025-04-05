export interface Course {
  id: string;
  title: string;
  category: 'finance' | 'marketing' | 'technology' | 'management';
  description: string;
  pdf: {
    title: string;
    content: string;
  };
  video: {
    title: string;
    duration: string;
    content: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  progress: Record<string, number>;
}

export interface Expense {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
}