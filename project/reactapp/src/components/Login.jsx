import { Link } from 'react-router-dom';
import styled from '../assets/Login.module.css';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm(); 

    if (isValid) {
      window.location.href = '/';
    } else {
      console.log('Form validation failed');
    }
  };

  const validateForm = () => {
    const email = document.getElementById(styled.email).value;
    const password = document.getElementById(styled.password).value;

    return email && password; 
  };

  return (
    <div className={styled.box}>
      <div className={styled.content}>
        <div className={styled.loginContainer}>
          <h1>Login</h1>
          <form className={styled.loginForm} onSubmit={handleSubmit}>
            <div className={styled.inputField}>
              <label htmlFor="username">Username/ E-mail</label>
              <input
                type="email"
                placeholder="Username"
                id={styled.email}
                required
              />
            </div>
            <div className={styled.inputField}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id={styled.password}
                placeholder="Password"
                name="password"
                required
                minLength="6"
              />
            </div>
            <button type="submit" className={styled.loginBtn}>
              Login
            </button>
            <br />
            <br />
            <div className={styled.check}>
              Don't have an account? &nbsp;
              <Link to="/reg">Sign up here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
