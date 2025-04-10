import { Link } from 'react-router-dom';

/**
 * A responsive 404 Not Found page component with a clean design and navigation options
 */
const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-light-bg dark:bg-dark-bg text-dark-text dark:text-light-text">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary-color">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-primary-color text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 