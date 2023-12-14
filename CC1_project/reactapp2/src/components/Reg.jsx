function Reg() {
  return (
    <div>
        <div class="overall">
        <div class="login-container">
        <h1>Registration</h1>
        <form id = "formdetails">
            <div class="formdetails">
            <div class="input-field">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder = "  Full Name" name="fullname" required></input>
            </div>
            <div class="input-field">
                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" required></input>
            </div>
            <div class="input-field">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder = "  Username" name="username" required></input>
            </div>
            <div class="input-field">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="  E-mail"  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"  required></input>
            </div>
            <div class="input-field">
                Gender
                <label>
                    <input type="radio" id="male" name="gender" value="male" required></input>
                    Male
                </label>
                <label>
                    <input type="radio" id="female" name="gender" value="female" required></input>
                    <span>Female</span>
                </label>
                <label>
                    <input type="radio" id="other" name="gender" value="other" required></input>
                    <span>Other</span>
                </label>
            </div>
            <div class="input-field">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="  Password" name="password" minlength="6" required></input>
            </div>
            <div class="input-field">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="  Confirm Password" name="confirm-password" minlength="6" required></input>
            </div>
            <div class="btn">
            <button type="submit" class="login-btn">Register</button>
            </div>
        </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Reg;