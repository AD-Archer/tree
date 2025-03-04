import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the PDF file directly
    window.location.href = '/resume.pdf';
  }, []);

  return (
    <div className="resume-container">
      <p>Redirecting to resume...</p>
    </div>
  );
};

export default Resume; 