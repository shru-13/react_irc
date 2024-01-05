import styled from '../assets/Reg.module.css';
import { useState } from 'react';

function Reg() {
  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");  // Assuming a default value
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      window.alert("Registration succesful. Move to Login Page!");
      window.location.href = '/';
    } else {
      window.alert("Please fill in all the required fields properly.");
    }
  };

  const validateForm = () => {
    return fullname && dob && username && email && gender && password && confirmPassword && (password === confirmPassword);
  };

  return (  
    <div className={styled.box}>
      <div className={styled.overall}>
        <div className={styled.loginContainer}>
          <h1>Registration</h1>
          <form id={styled.formdetails} onSubmit={handleSubmit}>
            <div className={styled.formdetails}>
              <div className={styled.inputField}>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id={styled.fullname}
                  placeholder="Full Name"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className={styled.inputField}>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id={styled.dob}
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div className={styled.inputField}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id={styled.username}
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className={styled.inputField}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id={styled.email}
                  name="email"
                  placeholder="E-mail"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styled.inputField}>
                Gender
                <label>
                  <input
                    type="radio"
                    id={styled.male}
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                    required
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    id={styled.female}
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                    required
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    id={styled.other}
                    name="gender"
                    value="other"
                    checked={gender === 'other'}
                    onChange={() => setGender('other')}
                    required
                  />
                  Other
                </label>
              </div>
              <div className={styled.inputField}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id={styled.password}
                  placeholder="Password"
                  name="password"
                  minLength="6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styled.inputField}>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id={styled.confirmPassword}
                  placeholder="Confirm Password"
                  name="confirm-password"
                  minLength="6"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styled.btn}>
                <button type="submit" className={styled.loginBtn}>
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reg;
