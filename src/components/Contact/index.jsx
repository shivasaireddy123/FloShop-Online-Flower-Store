import './index.css'
import Header from '../Header'
const Contact = () => {
  return (
    <>
    <Header />
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>
          We'd love to hear from you. Send us a message and let us help make
          your special moments bloom beautifully.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>123 Flower Street</p>
            <p>Hyderabad, Telangana</p>
          </div>

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
            <p>Mon - Sat (9 AM - 8 PM)</p>
          </div>

          <div className="contact-card">
            <h3>✉ Email</h3>
            <p>support@floshop.com</p>
            <p>info@floshop.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send a Message</h2>

          <form className="contact-form" onSubmit={event => event.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message here..."
            />

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact