
import styled from '../assets/Reg.module.css';

function Reg() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm(); 

    if (isValid) {
      window.location.href = '/login';
    } else {
      console.log('Form validation failed');
    }
  };

  const validateForm = () => {
    const fullname = document.getElementById(styled.fullname).value;
    const dob = document.getElementById(styled.dob).value;
    const username = document.getElementById(styled.username).value;

    return fullname && dob && username;
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
                  placeholder="  Full Name"
                  name="fullname"
                  required
                ></input>
                </div>
                <div className="styled.inputField">
                    <label for="dob">Date of Birth</label>
                    <input type="date" id={styled.dob} name="dob" required></input>
                </div>
                <div className={styled.inputField}>
                        <label for="username">Username</label>
                    <input type="text" id={styled.username} placeholder = "  Username" name="username" required></input>
                </div>
                <div className={styled.inputField}>
                    <label for="email">E-mail</label>
                    <input type="email" id={styled.email} name="email" placeholder="  E-mail"  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"  required></input>
                </div>
                <div className={styled.inputField}>
                    Gender
                    <label>
                        <input type="radio" id={styled.male} name="gender" value="male" required></input>
                        Male
                    </label>
                    <label>
                        <input type="radio" id={styled.female} name="gender" value="female" required></input>
                        <span>Female</span>
                    </label>
                    <label>
                        <input type="radio" id={styled.other} name="gender" value="other" required></input>
                        <span>Other</span>
                    </label>
                </div>
                <div className={styled.inputField}>
                    <label for="password">Password</label>
                    <input type="password" id={styled.password} placeholder="  Password" name="password" minLength="6" required></input>
                </div>
                <div className={styled.inputField}>
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id={styled.confirmPassword} placeholder="  Confirm Password" name="confirm-password" minLength="6" required></input>
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
