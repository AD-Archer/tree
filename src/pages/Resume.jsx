import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    // Redirect to the PDF file directly
    window.location.href = '/resume.pdf';
  }, []);

  return null;
};

export default Resume; 