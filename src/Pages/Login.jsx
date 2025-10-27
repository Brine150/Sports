function Login (){
    return(
      <>
      <div className="LoginImg">
         <div className="loginform">
  <h1 id="form-title">Login</h1>
  <form id="login-form" className="form active">
    <div className="input-box">
      <input type="email" id="login-email" required />
      <label>Email</label>
    </div>
    <div className="input-box">
      <input type="password" id="login-password" required />
      <label>Password</label>
    </div>
    <button type="button" onclick="login()">Login</button>
    <p className="toggle-text">Don’t have an account? <a onclick="showRegister()">Register</a></p>
  </form>
  <form id="register-form" className="form">
    <div className="input-box">
      <input type="text" id="reg-name" required />
      <label>Full Name</label>
    </div>
    <div className="input-box">
      <input type="email" id="reg-email" required />
      <label>Email</label>
    </div>
    <div className="input-box">
      <input type="password" id="reg-password" required />
      <label>Password</label>
    </div>
    <div className="input-box">
      <input type="password" id="reg-confirm" required />
      <label>Confirm Password</label>
    </div>
    <div>
      <button type="button" onclick="register()">Register</button>
      <p className="toggle-text">Already have an account? <a onclick="showLogin()">Login</a></p>
    </div>
  </form>
</div>
      </div>

       <footer className="footer" id="page-footer">
    <div className="footer-column">
      <h3>About Us</h3>
      <p>We provide sports news and updates from around the world.</p>
    </div>
    <div className="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href>Home</a></li>
        <li><a href="/html/account.html">Login</a></li>
        <li><a href="/html/scores.html">Scores</a></li>
        <li><a href="/html/contact-us.html">Contact Us</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Follow Us</h3>
      <p>Connect on social media:</p>
      <ul>
        <li><a href="https://www.facebook.com">Facebook<i className="fa-brands fa-facebook" /></a></li>
        <li><a href="https://twitter.com">Twitter<i className="fa-brands fa-twitter" /></a></li>
        <li><a href="https://www.instagram.com">Instagram<i className="fa-brands fa-instagram" /></a></li>
      </ul>
    </div>
  </footer>

      </>


    );

}

export default Login