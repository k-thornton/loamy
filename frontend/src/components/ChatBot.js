import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.css'; // Ensure you create a corresponding CSS file

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendClick = async () => {
    if (!userInput.trim()) return; // Prevent sending empty messages
    const newUserMessage = { text: userInput, sender: 'user' };
    setMessages([...messages, newUserMessage]);
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userInput }),
    });
    const data = await response.json();
    const newBotMessage = { text: data.reply, sender: 'bot' };
    setMessages(messages => [...messages, newBotMessage]);
    setUserInput(''); // Clear input after sending
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

  return (
    <div className="chat-bot">
      <div className="chat-bubble" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Chat'}
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat ${message.sender === 'user' ? 'chat-end' : 'chat-start'}`}>
              <div className="chat-bubble">
                {message.text}</div>
              </div>
            ))}
            <div ref={endOfMessagesRef} />
          </div>
          <div className="input-area">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
            <button onClick={handleSendClick}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
