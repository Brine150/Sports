function ContactUs(){
    return(
       <>
       
       <div className="ContactUsImg">

         <div>
  <div className="main-content">
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Send us your message and we’ll get back shortly.</p>
      <form>
        <div className="input-box">
          <input type="text" name="name" required />
          <label>Full Name</label>
        </div>
        <div className="input-box">
          <input type="email" name="email" required />
          <label>Email Address</label>
        </div>
        <div className="input-box">
          <textarea name="message" required defaultValue={""} />
          <label>Your Message</label>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="follow-us">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="https://www.facebook.com" title="Facebook"><i className="fa-brands fa-facebook" /></a>
          <a href="https://twitter.com" title="Twitter"><i className="fa-brands fa-twitter" /></a>
          <a href="https://www.instagram.com" title="Instagram"><i className="fa-brands fa-instagram" /></a>
          <a href="https://www.youtube.com/watch" title="YouTube"><i className="fa-brands fa-youtube" /></a>
          <div className="call">
            <a href="#" title="Call"><i className="fa-solid fa-phone" /></a>
            <h4>+233 55 467 4458</h4>
          </div>
        </div>
      </div> 
    </div>
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

       </div>


       </>
    );
}

export default ContactUs