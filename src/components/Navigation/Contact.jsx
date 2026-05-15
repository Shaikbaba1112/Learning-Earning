import React from 'react';
import './pages.css';

export default function Contact() {
  return (
    <section className="page-section contact-page">
      <div className="page-hero">
        <div>
          <h1>Contact Us</h1>
          <p className="lead">Questions, suggestions, or content contributions — we'd love to hear from you.</p>
        </div>
      </div>

      <div style={{display: 'flex', gap: 24, alignItems: 'flex-start', marginTop: 8}}>
        <div style={{flex: 1}}>
          <h3>Get in touch</h3>
          <p className="muted">Email: <strong>hello@learning-earning.dev</strong></p>
          <p className="muted">Open-source contributions via GitHub Issues and PRs.</p>
          <div style={{marginTop: 12}}>
            <button className="btn-primary">Open an Issue</button>
          </div>
        </div>

        <div style={{flex: 1}}>
          <h3>Send a message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input className="input" placeholder="Your name" />
            <input className="input" placeholder="Your email" />
            <input className="input" placeholder="Subject" />
            <textarea className="textarea" rows="5" placeholder="Message" />
            <div>
              <button className="btn-primary" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
