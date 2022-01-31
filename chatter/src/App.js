import './App.css';
import TextInput from "./TextInput.js";
import Message from "./Message.js";
import { useState } from "react";

function App() {
  const [messages, setMessage] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      // user: "Mileena",
    };
  }
  console.log(messages);

  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <span className="title">chit chat</span>
        <span className="byline">by Mileena Ros</span>
      </header>
      <div className="messages">
        <div className="message">hi</div>
        <div className="message">wassssssup</div>
        <div className="message">hello this is a message</div>
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
