import React, { createContext, useContext, useState } from 'react';

interface Grade {
  courseId: string;
  courseName: string;
  grade: number;
  completedAt: string;
  category: string;
  questionsCorrect: number;
  totalQuestions: number;
  timeSpent: string;
}

interface GradesContextType {
  grades: Grade[];
  addGrade: (grade: Grade) => void;
}

const GradesContext = createContext<GradesContextType | undefined>(undefined);

export const GradesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [grades, setGrades] = useState<Grade[]>([]);

  const addGrade = (grade: Grade) => {
    setGrades(prev => [grade, ...prev]);
  };

  return (
    <GradesContext.Provider value={{ grades, addGrade }}>
      {children}
    </GradesContext.Provider>
  );
};

export const useGrades = () => {
  const context = useContext(GradesContext);
  if (context === undefined) {
    throw new Error('useGrades must be used within a GradesProvider');
  }
  return context;
};