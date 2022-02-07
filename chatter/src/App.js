import './App.css'
import { useState } from "react"
import Camera from 'react-snap-pic'
import TextInput from "./TextInput.js"
import Message from "./Message.js"
import NamePicker from './NamePicker'

function App() {
  let [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  function sendMessage(text) {
    if (!text) return;
    const newMessage = {
      text,
      time: Date.now(),
      user: "",
    };
  setMessages([newMessage, ...messages]);
  }
  // console.log(messages);

  function takePicture(img) {
    console.log(img);
    setShowCamera(false);
  }

  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <span className="title">chit chat</span>
        <NamePicker/>
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
