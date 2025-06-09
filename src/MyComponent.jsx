import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Default");
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName(() => {
            return 'Defoe'
        });
    }

    const increaseAge = () => {
        setAge(age + 1);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>SetName</button>

            <p>Age: {age}</p>
            <button onClick={increaseAge}>IncreaseAge</button>


        </div>
    )
}
export default MyComponent;
