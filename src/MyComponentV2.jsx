import {useState} from "react";


function MyComponentV2() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
        </div>
    )
}

export default MyComponentV2;
