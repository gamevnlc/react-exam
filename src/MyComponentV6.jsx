import {useEffect, useState} from "react";

function MyComponentV6() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // })
    // useEffect(() => {
    //     document.title = `My count`;
    // }, [])
    useEffect(() => {
        document.title = `Count: ${count}`;

    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>
            <button onClick={changeColor}>Change Color</button><br/>
        </div>
    )
}

export default MyComponentV6
