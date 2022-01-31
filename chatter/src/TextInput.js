import "./TextInput.css";
import { useState } from "react"

function TextInput(props) {
    const [text, setText] = useState("");

    function send() {
        props.sendMessage(text);
        setText("");
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            send();
        }
    }

    return (
        <footer className="footer">
            <input className="text-input"></input>
            <button className="send">↑</button>
        </footer>
    );
}

export default TextInput;