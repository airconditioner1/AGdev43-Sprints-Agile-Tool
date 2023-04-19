import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
// Chatroom.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chatroom.css";
import { v4 as uuidv4 } from "uuid";

const socket = io("http://192.168.1.33:3001"); // Replace with your server URL

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [userId] = useState(uuidv4());

  useEffect(() => {
    const onMessageReceived = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on("message", onMessageReceived);

    return () => {
      socket.off("message", onMessageReceived);
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage) {
      socket.emit("message", { text: inputMessage, sender: userId });
      setInputMessage("");
    }
  };

  return (
    <div className="chatroom-container">
      <div className="chat-container">
        <h1>Chatroom</h1>
        <div className="messages-box">
        <ScrollToBottom >
          <div>
            {messages.map((message, i) => (
              <div
                key={i}
                style={{
                  textAlign: message.sender === userId ? "right" : "left",
                  marginBottom: "5px",
                }}
              >
                <div
                  className={`message-bubble ${
                    message.sender === userId ? "sent" : "received"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollToBottom>
        </div>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

function DummyPage() {
  console.log(Cookies.get("authenticated"));
  return (
    <div>
      <Chatroom />
    </div>
  );

  // if(Cookies.get('authenticated') === 'true'){
  //   console.log("AUTHENTICATED");
  //   return (
  //     <div>
  //       <Chatroom />
  //     </div>
  //   );
  // }
  // else{
  //   console.log(Cookies.get('authenticated'));
  //   return (
  //     <div>
  //       <h1 style={{ color: "red" }}>Please sign into sprints to access Chat!</h1>
  //     </div>
  //   )
  // }
}

export default DummyPage;
