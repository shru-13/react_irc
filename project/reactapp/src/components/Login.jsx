import { Link } from 'react-router-dom';
import styled from '../assets/Login.module.css';
import { useState } from 'react';
import axios from 'axios';


function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

  // const validateForm = async() => {
    // const email = document.getElementById(styled.email).value;
    // const password = document.getElementById(styled.password).value;

    // return email && password; 

    try{
      const response = await axios.get("http://localhost:3001/profiles?username="+username);
      if(response.data.length === 0){
        window.alert("User doesn't exist");
        return;
      }

      const user = response.data[0];

      if(user.password===password){
        window.alert("Login successful");
        window.location.href = './home';
      }
      else{
        window.alert("Incorrect password. Try again!");
      }
    }
      catch(error){
        console.error("Error:",error);
      }
    };


  return (
    <div className={styled.box}>
  <div className={styled.content}>
    <div className={styled.loginContainer}>
      <h1>Login</h1>
      <form className={styled.loginForm} onSubmit={handleSubmit}>
        <div className={styled.inputField}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            placeholder="Username"
            id={styled.username}  
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
