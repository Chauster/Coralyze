import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NotificationsSection.css';

function NotificationsSection() {
  const Notification = (props) => {
    return (
      <li className="notif">
        <Link to="/support">
          Updates
          <br />
          <span className="subject">{props.subject}</span>
          <br />
          <span className="description">{props.description}</span>
        </Link>
      </li>
    );
  };

  return (
    <div className="main_section">
      <h3 className="main_section-header">Notifications.</h3>
      <ul className="notif_box">
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
        <Notification
          subject="Issue Detected"
          description="An issue regarding your device or account has occurred."
        ></Notification>
      </ul>
    </div>
  );
}

export default NotificationsSection;
