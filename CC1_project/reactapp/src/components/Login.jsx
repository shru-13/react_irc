function Login() {
  return (
    <div>
      <div class="content">
        <div class="login-container">
        <h1>Login</h1>
        <form id = "loginForm" action="#">
            <div class="input-field">
                <label for="username">Username/ E-mail</label>
                <input type="email" placeholder="Username" id = "email" required>
            </input>
            </div>
            <div class="input-field">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" name="password" required minlength ="6">
            </input>
            </div>

            <button type="submit" class="login-btn">Login</button>
            <br /><br />
            Don't have an account? <a id = "link" href="http://localhost:3000/"> Sign up here</a>
        </form>
        </div>
    </div>
    </div>
  );
}

export default Login