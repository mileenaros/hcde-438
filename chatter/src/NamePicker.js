import "./NamePicker.css";
import { useState } from "react"

function NamePicker(props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState("");

    function update(edit) {
        setEditName(edit);
    }

    function save() {
        setEditName(false);
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            update();
        }
    }

    return (
        <div className="username">
            {editName && 
                <div>
                    <div className="name">{name}</div>
                    <button className="edit" onClick={save}>
                        Edit
                    </button>
                </div>
            }
            {!editName &&
                <div>
                    <input 
                        className="name-input"
                        editName= {true}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyPress={onKeyPress} // key press doesn't work?
                    />
                    <button className="update" onClick={update}>Save</button>
                </div>
            }   
        </div>
    );
}

export default NamePicker;