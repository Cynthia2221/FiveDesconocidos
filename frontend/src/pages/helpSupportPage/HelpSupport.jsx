import React from 'react';
import "./HelpSupport.css"

const HelpSupport = () => {
  return (
    <div className="help-support-container">
      <h2 className="title">Help & Support</h2>

      <p className="description">
        How can we assist you? If you’re having trouble navigating the app or have any questions, explore the options below.
      </p>

      <div className="support-options">
        <button className="support-btn">📄 FAQs</button>
        <button className="support-btn">📧 Contact Support</button>
        <button className="support-btn">🔧 Troubleshooting</button>
        <button className="support-btn">💬 Live Chat</button>
      </div>

      <p className="note">
        Our support team is available 24/7. You can also reach out via email at <strong>support@edumaster.com</strong>.
      </p>
    </div>
  );
};

export default HelpSupport;
