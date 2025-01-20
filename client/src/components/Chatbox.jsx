import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import api from '../services/api';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const response = await api.post('/chat', { message });
    setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: response.data.reply }]);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 chatbox border p-3 rounded bg-danger-subtle">
          <h1 className='text-center'>ChatBot</h1>
          <MessageList messages={messages} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
