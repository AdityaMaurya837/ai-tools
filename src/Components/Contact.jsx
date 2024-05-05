import React from 'react'

const Contact = () => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-form-card">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="fname">Yout Name *</label>
              <input type="text" id="fname" name="firstname" placeholder="Enter Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="fname">Your Email *</label>
              <input type="email" id="fname" name="firstname" placeholder="Enter Your Email.." />
            </div>
            <div className="form-group">
              <label htmlFor="fname">Your Phone *</label>
              <input type="text" id="fname" name="firstname" placeholder="Enter Your Phone" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Message</label>
              <textarea
                placeholder="Write your message"
                style={{ height: 100 }}
              />
            </div>
            <span>
              <a className="default-btn">Send</a>
            </span>
          </form>

        </div>
        <div className="contact-form-img">
          <img src={window.location.origin + "/assets/contact-form-img.png"} className="" alt="" />
        </div>
      </div>
    </main>
  )
}

export default Contact