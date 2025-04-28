import React from "react";

const ContactInfo = () => {
  return (
    <div>
      <div className="info">
        <div className="info-items">
          <h2>Email</h2>
          <p className="textBg">contact@mochicloudcafe.com </p>
        </div>

        <div className="info-items">
          <h2>Phone</h2>
          <p className="textBg">(123)111-1111</p>
        </div>

        <div className="info-items">
          <h2>Location</h2>
          <p className="textBg">Rainbow Road 1234, Hidden Village</p>
        </div>
      </div>
      <div className="notinfo">
        <img src="src/assets/socails.svg" />
      </div>
    </div>
  );
};

export default ContactInfo;
