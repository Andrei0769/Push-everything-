import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const videos = {
  financial: 'https://www.youtube.com/embed/dummylink1',
  marketing: 'https://www.youtube.com/embed/dummylink2',
  tech: 'https://www.youtube.com/embed/dummylink3',
  management: 'https://www.youtube.com/embed/dummylink4'
};

const CourseVideo = () => {
  const { courseId } = useParams();
  const videoUrl = videos[courseId as keyof typeof videos];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 transition-colors">
      <div className="max-w-4xl mx-auto">
        <Link to="/courses" className="inline-flex items-center text-blue-900 dark:text-blue-400 mb-6 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Cursos
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[500px] dark:border-gray-700"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;