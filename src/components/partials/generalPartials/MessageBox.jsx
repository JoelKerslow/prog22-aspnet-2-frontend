import React, { useState, useEffect } from 'react';

const MessageBox = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000); // Adjust the duration (in milliseconds) as needed

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`message-box ${visible ? 'visible' : ''}`}>
      <div className="content">{message}</div>
    </div>
  );
};

export default MessageBox;