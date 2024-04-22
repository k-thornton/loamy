import React, { useState, useEffect, useRef } from "react";
import { sendQuery } from "../services/ChatService";
import ChatDisclaimer from "./static/ChatDisclaimer";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
    const markdownLinkRegex =
      /\[([^\]]+)]\(((?:https?:\/\/)?.+?)\)$/gm;

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
          className="link break-words"
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
    const messagesLog = messages.map(({ text, sender }) => `${sender}: ${text}`).join(' | ');

    // Await the response from sendQuery and handle errors gracefully
    const response = await sendQuery(`Previous Messages: ${messagesLog} Current Message:${userInput}`);
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
    <div className="fixed bottom-10 right-10">
      {isOpen ? (
        <XMarkIcon
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1 z-10"
        >
        </XMarkIcon>
      ) : (
        <div
          className="px-11 py-4 cursor-pointer bg-primary text-white rounded-full shadow-lg flex items-center justify-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496.2 496.2"
              xmlSpace="preserve"
              className="fill-current w-8 h-8 mr-2"
            >
              <path
                style={{ fill: "#32bea6" }}
                d="M496.2 248.1C496.2 111.1 385.1 0 248.1 0S0 111.1 0 248.1s111.1 248.1 248.1 248.1 248.1-111.1 248.1-248.1z"
              />
              <path
                style={{ fill: "#f3faff" }}
                d="M248.1 496.2c70.2 0 133.6-29.2 178.7-76-2.8-15.1-5.6-28.9-8.3-37.4-8.5-27.3-81.2-49.3-170.8-49.3s-161.5 22-170 49.3c-2.6 8.5-5.5 22.2-8.3 37.4 45.1 46.8 108.5 76 178.7 76z"
              />
              <path
                style={{ fill: "#dadde0" }}
                d="M293.9 336.2c-14.5-1.8-30-2.7-46.1-2.7-15.9 0-31.2.9-45.5 2.7l45.8 91 45.8-91z"
              />
              <path
                style={{ fill: "#dee0e2" }}
                d="M205.1 324.9h86v25h-86z"
              />
              <path
                style={{ fill: "#e2a379" }}
                d="m248.1 412.1-37.8-76.8s9.2-12.4 37.4-12.4 38.1 12.5 38.1 12.5l-37.7 76.7z"
              />
              <path
                style={{ fill: "#dadde0" }}
                d="m168.1 357.2 37-32.3 32 63.9s-25.2 7.1-25.5 6.8l-43.5-38.4zM328.1 357.2l-37-32.3-32 63.9s25.2 7.1 25.5 6.8l43.5-38.4z"
              />
              <path
                style={{ fill: "#e2a379" }}
                d="M287 282.1h-77.8c12.1 36.6 1 53.3 1 53.3s16.9 6.1 37.9 6.1 37.9-6.1 37.9-6.1-11.1-16.7 1-53.3z"
              />
              <path
                style={{ fill: "#f4b382" }}
                d="M336.4 175.2c0-92.4-39.5-113.6-88.3-113.6-48.7 0-88.3 21.2-88.3 113.6 0 31.3 6.2 55.8 15.5 74.7 20.4 41.6 55.7 56.1 72.8 56.1s52.4-14.5 72.8-56.1c9.3-18.9 15.5-43.4 15.5-74.7z"
              />
              <path
                style={{ fill: "#47200d" }}
                d="M336.4 175.2c0-92.4-30.3-116.1-88.3-116.1s-88.3 23.7-88.3 116.1c0 0 16.3-34.1 28.3-53.1s38-18.3 38-18.3h49s27 .3 34.5 18.3l26.8 53.1z"
              />
              <path
                style={{ fill: "#191919" }}
                d="M247.6 292.9h.5-.5zM248.6 292.9h-.5.5z"
              />
              <path
                style={{ fill: "#f4b382" }}
                d="M170.4 238.7c-8.4 1.4-14.4.1-19.1-27.7s1.7-31.5 10.1-32.9l9 60.6zM325.9 238.7c8.4 1.4 14.3.1 19.1-27.7 4.8-27.8-1.7-31.5-10.1-32.9l-9 60.6z"
              />
              <path
                style={{ fill: "#141414" }}
                d="m186.6 194.6-14-.7.6-2.9 13.9.7zM309.3 194.6l-.6-2.9 13.9-.7.6 2.9z"
              />
              <path
                style={{ fill: "#141414" }}
                d="M234.7 179.4h-45.9c-2.1 0-3.8 1.7-3.8 3.8v25.6c0 2.1 1.7 3.8 3.8 3.8h45.9c2.1 0 3.8-1.7 3.8-3.8v-25.7c0-2-1.7-3.7-3.8-3.7zm-1.9 25.2c0 1.7-1.3 3-3 3h-36.3c-1.7 0-3-1.3-3-3v-17c0-1.7 1.3-3 3-3h36.3c1.7 0 3 1.3 3 3v17zM307.4 179.4h-45.9c-2.1 0-3.8 1.7-3.8 3.8v25.6c0 2.1 1.7 3.8 3.8 3.8h45.9c2.1 0 3.8-1.7 3.8-3.8v-25.7c0-2-1.7-3.7-3.8-3.7zm-1.8 25.2c0 1.7-1.3 3-3 3h-36.3c-1.7 0-3-1.3-3-3v-17c0-1.7 1.3-3 3-3h36.3c1.7 0 3 1.3 3 3v17z"
              />
              <path
                style={{ fill: "#141414" }}
                d="M248 185.6c-11.2 0-12.3 6.9-12 10.4-.2 2.9.5 1.8.5 1.8 2.1-4.4 6.7-7.3 11.6-7.3 4.9 0 9.4 2.9 11.6 7.3 0 0 .7 1.1.5-1.8.1-3.5-1-10.4-12.2-10.4z"
              />
              <path
                style={{ fill: "#e8d3bb" }}
                d="M305.6 204.6c0 1.7-1.3 3-3 3h-36.3c-1.7 0-3-1.3-3-3v-17c0-1.7 1.3-3 3-3h36.3c1.7 0 3 1.3 3 3v17zM232.8 204.6c0 1.7-1.3 3-3 3h-36.3c-1.7 0-3-1.3-3-3v-17c0-1.7 1.3-3 3-3h36.3c1.7 0 3 1.3 3 3v17z"
              />
              <path
                style={{ fill: "#e5a173" }}
                d="M274.8 257c0 2.6-11.9 9.5-26.7 9.5s-26.7-7-26.7-9.5c0-1.6 8.5-6.1 14.1-6.9 3.6-.5 12.5 2.9 12.5 2.9s8.8-3.4 12.4-2.9c5.8.8 14.4 6.9 14.4 6.9z"
              />
              <path
                style={{ fill: "#d89364" }}
                d="M274.8 257c0 2.6-11.9 12.4-26.7 12.4s-26.7-9.9-26.7-12.4c0 0 10.9 1.3 26.7 1.3s26.7-1.3 26.7-1.3z"
              />
              <path
                style={{ fill: "#47200d" }}
                d="m168.6 180.9 2.8 27.6 3.9-1.9c-.2-23 2.6-73.8 2.6-73.8l-17.3 22.7c-.4 6.2-.7 12.8-.7 19.8v2.7c3.9-.2 8.7.2 8.7 2.9zM327.6 180.9l-2.8 27.6-3.9-1.9c.2-23-2.6-82.8-2.6-82.8l17.3 31.7c.4 6.2.7 12.8.7 19.8v2.7c-3.9-.2-8.7.2-8.7 2.9z"
              />
              <path
                style={{ fill: "#bae5d2" }}
                d="M314 165.4H182.2c-4.8 0-8.6 3.9-8.6 8.6v46.1c0 4.8 3.9 8.6 8.6 8.6h46.1c10.1 0 10.6-31.5 19.7-31.5s9.8 31.5 19.7 31.5h46.1c4.8 0 8.6-3.9 8.6-8.6V174c.2-4.7-3.7-8.6-8.4-8.6z"
              />
              <path
                style={{ fill: "#d1eddf" }}
                d="M314 165.4H182.2c-4.8 0-8.6 3.9-8.6 8.6v46.1l149-46.1c0-4.7-3.9-8.6-8.6-8.6z"
              />
              <path
                style={{ fill: "#e8d3bb" }}
                d="M314 229.2h-46.1c-5.3 0-8-8.4-10.7-16.5-2.4-7.4-4.9-15-9.1-15-4.2 0-6.6 7.6-9 14.9-2.6 8.2-5.3 16.6-10.8 16.6h-46.1c-5 0-9-4-9-9v-46.1c0-5 4-9 9-9h131.7c5 0 9 4 9 9v46.1c.1 4.9-4 9-8.9 9zm-65.9-32.3c4.7 0 7.2 7.5 9.7 15.5 2.6 7.9 5.2 16 10 16h46.1c4.6 0 8.3-3.7 8.3-8.3V174c0-4.6-3.7-8.3-8.3-8.3H182.2c-4.6 0-8.3 3.7-8.3 8.3v46.1c0 4.6 3.7 8.3 8.3 8.3h46.1c4.9 0 7.5-8.2 10.1-16.1 2.6-7.9 5-15.4 9.7-15.4z"
              />
              <path
                style={{ fill: "none", stroke: "#301e19", strokeWidth: 6.487, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }}
                d="M314 165.4H182.2c-4.8 0-8.6 3.9-8.6 8.6v46.1c0 4.8 3.9 8.6 8.6 8.6h46.1c10.1 0 10.6-31.5 19.7-31.5s9.8 31.5 19.7 31.5h46.1c4.8 0 8.6-3.9 8.6-8.6V174c.2-4.7-3.7-8.6-8.4-8.6z"
              />
              <path style={{ fill: "#fff" }} d="M311.5 337.4zM298.5 335.9z" />
            </svg>
          Ask a fertility question
        </div>
      )}
      {isOpen && (
        <div className="card chat-window bg-base-100 w-[92vw] h-[70vh] shadow-xl rounded-lg flex flex-col justify-between">
          <div className="card-body overflow-y-auto p-3 space-y-1 mr-5">
            {messages.length === 0 && (
              <div>
                <div className="chat chat-start flex justify-start">
                  <div className="chat-bubble rounded-lg p-2 bg-primary text-neutral-content">
                    We trained this chatbot on a synethesis of peer-reviewed journals and reputable medical databases. Please type a question to begin...
                  </div>
                </div>
                <ChatDisclaimer />
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
                  Thinking...
                </div>
              </div>
            )}
            <div className="mb-12" ref={endOfMessagesRef}/>
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
              className="btn btn-neutral text-white p-2 rounded-lg disabled:bg-gray-300"
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
