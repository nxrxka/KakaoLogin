import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginSuccess.css';

const LoginSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [tokenStatus, setTokenStatus] = useState('Fetching access token...');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const authCode = urlParams.get('code');

    const fetchAccessToken = async (authCode) => {
      try {
        const response = await fetch('https://kauth.kakao.com/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
            redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
            code: authCode,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch access token');
        }

        const data = await response.json();
        setToken(data.access_token);
        setTokenStatus('Access token fetched successfully');
      } catch (error) {
        setTokenStatus(`Error: ${error.message}`);
      }
    };

    if (authCode) {
      fetchAccessToken(authCode);
    }
  }, [location]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="main-container">
      <h2>로그인 성공!</h2>
      <p>{tokenStatus}</p>
      {token && <p>Access Token: {token}</p>}
      <button className="logout-button" onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default LoginSuccess;
