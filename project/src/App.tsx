import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import Courses from './components/Courses';
import CourseMaterial from './components/CourseMaterial';
import CourseQuiz from './components/CourseQuiz';
import Grades from './components/Grades';
import Expenses from './components/Expenses';
import { GradesProvider } from './context/GradesContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <GradesProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navigation />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:courseId/material" element={<CourseMaterial />} />
              <Route path="/course/:courseId/quiz" element={<CourseQuiz />} />
              <Route path="/grades" element={<Grades />} />
              <Route path="/expenses" element={<Expenses />} />
            </Routes>
          </div>
        </Router>
      </GradesProvider>
    </UserProvider>
  );
}

export default App