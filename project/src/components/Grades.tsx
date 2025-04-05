import React from 'react';
import { Award, BookOpen, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { useGrades } from '../context/GradesContext';

interface Course {
  id: string;
  title: string;
  category: string;
}

const courses: Course[] = [
  { id: 'financial', title: 'Introdução à Educação Financeira', category: 'Educação Financeira' },
  { id: 'marketing', title: 'Marketing Digital e Estratégias', category: 'Marketing e Propaganda' },
  { id: 'tech', title: 'Fundamentos da Tecnologia Moderna', category: 'Educação Tecnológica' },
  { id: 'management', title: 'Gestão Empresarial e Liderança', category: 'Gestão em Geral' },
];

const Grades = () => {
  const { grades, addGrade } = useGrades();

  const calculateAverageGrade = () => {
    if (grades.length === 0) return '0.0';
    const sum = grades.reduce((acc, grade) => acc + grade.grade, 0);
    return (sum / grades.length).toFixed(1);
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-600';
    if (grade >= 70) return 'text-blue-600';
    return 'text-red-600';
  };

  const getGradeBadgeColor = (grade: number) => {
    if (grade >= 90) return 'bg-green-100 text-green-800';
    if (grade >= 70) return 'bg-blue-100 text-blue-800';
    return 'bg-red-100 text-red-800';
  };

  // Função para verificar cursos restantes
  const getRemainingCourses = () => {
    const completedCourseIds = grades.map(grade => grade.courseId);
    return courses.filter(course => !completedCourseIds.includes(course.id));
  };

  const remainingCourses = getRemainingCourses();

  const handleUpdateGrade = (courseId: string, newGrade: number) => {
    const existingGrade = grades.find(grade => grade.courseId === courseId);
    if (existingGrade) {
      if (newGrade > existingGrade.grade) {
        // Atualiza a nota se a nova for maior
        addGrade({ ...existingGrade, grade: newGrade });
      } else {
        alert('A nova nota deve ser maior que a anterior.');
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meu Desempenho</h1>
          <p className="text-xl text-gray-600">Acompanhe sua evolução acadêmica</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Média Geral</p>
                <p className="text-2xl font-bold text-indigo-600">{calculateAverageGrade()}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-indigo-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cursos Concluídos</p>
                <p className="text-2xl font-bold text-green-600">{grades.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cursos Restantes</p>
                <p className="text-2xl font-bold text-red-600">{remainingCourses.length}</p>
              </div>
              <Award className="h-8 w-8 text-red-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Histórico Detalhado</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {grades.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                Nenhuma prova realizada ainda.
              </div>
            ) : (
              grades.map((grade, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{grade.courseName}</h3>
                      <p className="text-sm text-gray-500">{grade.category}</p>
                      <p className="text-sm text-gray-500">Concluído em: {grade.completedAt}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Nota Final:</span>
                        <span className={`text-2xl font-bold ${getGradeColor(grade.grade)}`}>
                          {grade.grade.toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-end">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getGradeBadgeColor(grade.grade)}`}>
                          {grade.grade >= 70 ? 'Aprovado' : 'Reprovado'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          grade.grade >= 90 ? 'bg-green-500' : grade.grade >= 70 ? 'bg-blue-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${grade.grade}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Lista de Cursos Restantes */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Cursos Restantes</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {remainingCourses.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                Todos os cursos foram concluídos!
              </div>
            ) : (
              remainingCourses.map((course) => (
                <div key={course.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.category}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;