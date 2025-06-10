import {useEffect, useState} from "react";

function MyComponentV7() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    // window.addEventListener('resize', handleResize);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    return (
        <div>
            <p>Window width: {width}</p>
            <p>Window width: {height}</p>
        </div>
    )
}

export default MyComponentV7
