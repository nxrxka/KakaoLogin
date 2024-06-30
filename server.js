const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

require('dotenv').config();

app.get('/auth', async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
        redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
        code: code,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token } = response.data;

    // Log the access token to the server console
    console.log('Access Token:', access_token);

    // Redirect to the login-success page with the token
    res.redirect(`/login-success?token=${access_token}`);
  } catch (error) {
    console.error('Error fetching access token:', error.response ? error.response.data : error.message);
    res.status(500).send('Failed to fetch access token');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
