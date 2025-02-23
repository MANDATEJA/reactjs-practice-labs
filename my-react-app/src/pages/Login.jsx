const Login = () => {
  const handleLogin = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectURI = "http://localhost:5173/callback";
    const scope = "email profile";
    const responseType = "token";

    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scope}&response_type=${responseType}`;
  }


  return (
    <div>
      <h2>Login page</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
