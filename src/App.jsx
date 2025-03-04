import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/resume" element={<Navigate to="/resume.pdf" />} />
      </Routes>
    </Router>
  );
}

export default App;
