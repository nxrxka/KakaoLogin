import React, { useState } from 'react';
import './KakaoLoginButton.css';  // Import the CSS file

const KakaoLoginButton = () => {
  const [loading, setLoading] = useState(false);

  const restApiKey = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const handleLogin = () => {
    setLoading(true);

    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`;
    window.location.href = kakaoLoginUrl;
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Kakao 로그인</h2>
      <h2 className="login-body"> 로그인이 필요합니다.</h2>
      {loading ? (
        <div className="loading-spinner">로딩 중...</div>
      ) : (
    
        <button className="login-button" onClick={handleLogin}>
          Kakao 계정으로 로그인
        </button>
      )}
    </div>
  );
};

export default KakaoLoginButton;
