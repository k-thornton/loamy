import React, { useState, useEffect, useRef } from "react";
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


  // Utility function to convert markdown URLs in text to clickable links
  function linkify(text) {
  // Regex to detect Markdown link format
  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g;

  // Split text into parts to separate Markdown links from regular text
  const parts = [];
  let lastIndex = 0;

  text.replace(markdownLinkRegex, (match, linkText, url, index) => {
    // Push preceding text if there is any
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    // Create a JSX link for the Markdown link
    parts.push(<a key={index} href={url} target="_blank" rel="noopener noreferrer" className="link hover:text-blue-600 break-words">{linkText}</a>);

    // Update lastIndex to the end of the current match
    lastIndex = index + match.length;
  });

  // Push any remaining text after the last link
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
    <div className="fixed bottom-20 right-20 font-sans">
      {isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1 z-10"
        >
          ✕
        </button>
      ) : (
        <div
          className="p-2 cursor-pointer bg-primary text-white rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Chat
        </div>
      )}
      {isOpen && (
        <div className="card chat-window bg-base-100 w-96 h-96 shadow-xl rounded-lg flex flex-col justify-between">
          <div className="card-body overflow-y-auto p-3 space-y-2 mr-5">
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
                      ? "bg-secondary text-white"
                      : "bg-primary text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat chat-start flex justify-start">
                <div className="chat-bubble rounded-lg p-2 bg-gray-200">
                  Bot is thinking...
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>
          <div className="card-actions input-area flex p-3 space-x-2">
            <input
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
