import './App.css';
import TextInput from "./TextInput.js";
import Message from "./Message.js";
import { useState } from "react";

function App() {
  let [messages, setMessages] = useState([]);

  function sendMessage(text) {
    if (!text) return;

    const newMessage = {
      text,
      time: Date.now(),
      user: "Mileena",
    };
  setMessages([newMessage, ...messages]);
  }
  console.log(messages);

  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <span className="title">chit chat</span>
      </header>
      <div className="messages">
        {messages.map((msg, i) => {
          return <Message {...msg} key={i} />;
        })}
        <div className="message received">this should be on the left</div>
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
