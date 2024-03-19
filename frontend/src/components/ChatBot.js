import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css"; // Ensure you create a corresponding CSS file
import { sendQuery } from "../services/ChatService";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendClick = async () => {
    if (!userInput.trim()) return; // Prevent sending empty messages
    const newUserMessage = { text: userInput, sender: "user" };
    setMessages([...messages, newUserMessage]);
    setIsLoading(true); // Start loading
    const response = await sendQuery(userInput).finally(() =>
      setIsLoading(false)
    ); // Stop loading regardless of response
    const newBotMessage = { text: response.reply, sender: "bot" };
    setMessages((messages) => [...messages, newBotMessage]);
    setUserInput(""); // Clear input after sending
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div className="chat-bot">
      <div className="chat-bubble" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Chat"}
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat ${
                  message.sender === "user" ? "chat-end" : "chat-start"
                }`}
              >
                <div className="chat-bubble">{message.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chat chat-start">
                <div className="chat-bubble">Bot is thinking...</div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>
          <div className="input-area">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={isLoading} // Optional: disable input while loading
            />
            <button onClick={handleSendClick} disabled={isLoading}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
