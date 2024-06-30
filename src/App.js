import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KakaoLoginButton from './components/KakaoLoginButton';
import LoginSuccess from './components/LoginSuccess';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KakaoLoginButton />} />
        <Route path="/auth" element={<LoginSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
