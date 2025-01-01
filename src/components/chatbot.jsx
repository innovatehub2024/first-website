// src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import './chatbot.css'; // Create this CSS file for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user message to chat
    setMessages([...messages, { text: input, sender: 'user' }]);
    

    // Send message to OpenAI
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: input,
        max_tokens: 150
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      // Add AI response to chat
      setMessages([...messages, { text: input, sender: 'user' }, { text: response.data.choices[0].text, sender: 'ai' }]);
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
    }

    // Clear input
    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
