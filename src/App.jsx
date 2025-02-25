import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HtmlContent from './components/HtmlContent';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HtmlContent />} />
        <Route path="/resume" element={<iframe src="/resume.pdf" width="100%" height="1000px" title="Resume"></iframe>} />
      </Routes>
    </Router>
  );
}

export default App;
