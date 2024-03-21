import React, { useState, useEffect, useRef } from "react";
import { sendQuery } from "../services/ChatService";
import ChatDisclaimer from "./static/ChatDisclaimer";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Set focus on the input box when the isOpen state changes or after sending a message
  useEffect(() => {
    if (isOpen && !isLoading) {
      // Schedule the focus with setTimeout
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
  
      // Cleanup function to clear the timeout
      // This function is called by React before re-running the effect due to dependency changes,
      // and when the component unmounts, preventing memory leaks.
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages, isLoading]); // Dependencies array

  function linkify(text) {
    const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s\)]+?(?:\([^\s\)]+?\))*?)\)/g;


    const parts = [];
    let lastIndex = 0;

    text.replace(markdownLinkRegex, (match, linkText, url, index) => {
      if (index > lastIndex) {
        parts.push(text.slice(lastIndex, index));
      }

      // Create a JSX link for the Markdown link
      parts.push(
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link hover:text-blue-600 break-words"
        >
          {linkText}
        </a>
      );

      lastIndex = index + match.length;
    });

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  }

  const handleSendClick = async () => {
    if (!userInput.trim()) return; // Prevent sending empty messages
    const newUserMessage = { text: userInput, sender: "user" };
    setMessages([...messages, newUserMessage]);
    setIsLoading(true); // Start loading
    scrollToBottom();

    // Await the response from sendQuery and handle errors gracefully
    const response = await sendQuery(userInput);
    setIsLoading(false); // Stop loading

    if (response.error) {
      const errorBotMessage = { text: response.error, sender: "bot" };
      setMessages((messages) => [...messages, errorBotMessage]);
    } else {
      const newBotMessage = { text: linkify(response.reply), sender: "bot" };
      setMessages((messages) => [...messages, newBotMessage]);
    }

    setUserInput(""); // Clear input after handling
    scrollToBottom();
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
    <div className="fixed bottom-20 right-20">
      {isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1 z-10"
        >
          ✕
        </button>
      ) : (
        <div
          className="pr-5 pl-5 pt-2 pb-2 cursor-pointer bg-primary text-white rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Chat
        </div>
      )}
      {isOpen && (
        <div className="card chat-window bg-base-100 w-96 h-[59vh] shadow-xl rounded-lg flex flex-col justify-between">
          <div className="card-body overflow-y-auto p-3 space-y-2 mr-5">
            {messages.length === 0 && (
              <div>
                <ChatDisclaimer />
                <div className="chat chat-start flex justify-start">
                  <div className="chat-bubble rounded-lg p-2 bg-primary text-white">
                    Please type a question to begin
                  </div>
                </div>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat ${
                  message.sender === "user" ? "chat-end" : "chat-start"
                }`}
              >
                <div
                  className={`chat-bubble rounded-lg p-2 ${
                    message.sender === "user"
                      ? "bg-secondary text-black"
                      : "bg-primary text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat chat-start flex justify-start">
                <div className="chat-bubble skeleton rounded-lg p-2 bg-gray-200 text-black">
                  Bot is thinking...
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>
          <div className="card-actions input-area flex p-3 space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={isLoading}
              className="input input-bordered flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              onClick={handleSendClick}
              disabled={isLoading}
              className="btn btn-accent text-white p-2 rounded-lg disabled:bg-gray-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
