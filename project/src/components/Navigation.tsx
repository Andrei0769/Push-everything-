import React, { useState, useEffect } from 'react';
import { DollarSign, Home, LogIn, NotebookPen, GraduationCap, Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  
  const isActive = (path: string) => location.pathname === path;
  
  const links = [
    { path: '/', icon: Home, label: 'Início', ariaLabel: 'Ir para página inicial' },
    { path: '/courses', icon: NotebookPen, label: 'Cursos', ariaLabel: 'Ver cursos disponíveis' },
    { path: '/grades', icon: GraduationCap, label: 'Minhas Notas', ariaLabel: 'Ver minhas notas' },
    { path: '/expenses', icon: DollarSign, label: 'Gastos', ariaLabel: 'Gerenciar gastos' },
    { path: '/login', icon: LogIn, label: 'Entrar', ariaLabel: 'Fazer login' },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 bg-blue-900 dark:bg-blue-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                <span className="text-white text-lg font-bold">PE</span>
              </div>
              <span className="ml-2 text-lg font-bold text-blue-900 dark:text-blue-400 hidden sm:block">
                Push Everything
              </span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-4 lg:space-x-8">
              {links.map(({ path, icon: Icon, label, ariaLabel }) => (
                <Link
                  key={path}
                  to={path}
                  aria-label={ariaLabel}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive(path)
                      ? 'text-blue-900 dark:text-blue-400 border-b-2 border-blue-900 dark:border-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map(({ path, icon: Icon, label, ariaLabel }) => (
            <Link
              key={path}
              to={path}
              aria-label={ariaLabel}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive(path)
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon className="h-5 w-5 mr-3" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;