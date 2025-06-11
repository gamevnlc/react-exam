import {useEffect, useRef, useState} from "react";

function MyComponentV12() {

    let [number, setNumber] = useState(0);
    const ref = useRef(0);

    useEffect(() => {
        console.log('Component rendered');
    })
    function handleClick() {
        // setNumber(n => n + 1)
        ref.current++
        console.log(ref.current);
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <input type="text" ref={ref} />
        </div>
    )
}

export default MyComponentV12
