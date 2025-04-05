import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Target, ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Aprenda no seu ritmo',
      description: 'Cursos completos com certificação'
    },
    {
      icon: Brain,
      title: 'Conhecimento prático',
      description: 'Conteúdo atualizado e relevante'
    },
    {
      icon: Target,
      title: 'Evolua sempre',
      description: 'Acompanhe seu progresso'
    }
  ];

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-16 sm:mt-24 mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="h-20 w-20 sm:h-24 sm:w-24 bg-blue-900 dark:bg-blue-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                <span className="block xl:inline">Educação que</span>{' '}
                <span className="block text-blue-900 dark:text-blue-400 xl:inline">transforma vidas</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Desenvolva habilidades essenciais para sua carreira com nossos cursos especializados em finanças, marketing, tecnologia e gestão.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <Link
                  to="/register"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 dark:bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-transform duration-300"
                >
                  Comece Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/register"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explorar Cursos
                </Link>
              </div>
            </div>
          </main>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-900 dark:text-blue-400 mb-4 transform hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-8 lg:mt-0">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full transform hover:scale-110 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Ambiente de aprendizado colaborativo"
        />
      </div>
    </div>
  );
};

export default Hero;