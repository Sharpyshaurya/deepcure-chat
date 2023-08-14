import React, { useState } from "react";
import "./Chat.css";

function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const sendMessage = () => {
    if (inputMessage.trim() === "") {
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputMessage, sender: "user" },
    ]);
    setInputMessage("");
  };

  return (
    <div className="App">
      <button className="toggle-button" onClick={toggleChat}>
        Chat
      </button>
      {showChat && (
        <div className="chat-container">
          <div className="chat-header">Chat</div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
