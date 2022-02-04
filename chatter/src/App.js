import './App.css'
import TextInput from "./TextInput.js"
import Message from "./Message.js"
import Camera from 'react-snap-pic'
import { useState } from "react"

function App() {
  let [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false)

  function takePicture(img) {
    console.log(img);
    setShowCamera(false);
  }

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
        {/* FOR TESTING */}
        <div className="message received">this should be on the left</div>
      </div>
      <TextInput 
        sendMessage={sendMessage}
        showCamera={()=>setShowCamera(true)}
      />
      {showCamera && <Camera takePicture={takePicture}/>}
    </div>
  );
}

export default App;
