import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import axios from 'axios';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const accessToken = hashParams.get('access_token');

    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`)
      .then(response => {
        login(response.data);
        navigate('/');
      })
      .catch(error => {
        console.error(`Error performing login: ${error.message}`);
      });

  }, [login, navigate]);

  return (
    <div>Logging in...</div>
  );
}

export default OAuthCallback;
