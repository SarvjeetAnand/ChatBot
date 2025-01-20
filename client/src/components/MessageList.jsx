import React from 'react';

const MessageList = ({ messages }) => (
  <div className="messages mb-3">
    {messages.map((msg, index) => (
      <div key={index} className={`message ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
        <p className="p-2 rounded bg-secondary text-white">{msg.text}</p>
      </div>
    ))}
  </div>
);
export default MessageList;
