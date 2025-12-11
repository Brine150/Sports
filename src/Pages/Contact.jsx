
function ContactUs (){
  return(
    <>
    
    <div className="ContactUsImg">
  <div className="contact-container">
    <h2>Contact Us</h2>
    <p className="subtitle">We’d love to hear from you. Send us a message!</p>
    <form>
      <div className="input-box">
        <label>Your Name</label>
        <input type="text" placeholder="John Doe" required />
      </div>
      <div className="input-box">
        <label>Email Address</label>
        <input type="email" placeholder="example@mail.com" required />
      </div>
      <div className="input-box">
        <label>Message</label>
        <textarea placeholder="Type your message..." required defaultValue={""} />
      </div>
      <button type="submit">Send</button>
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
  )
}
export default ContactUs;