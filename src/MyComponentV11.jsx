import {UserContext} from "./MyComponentV8.jsx";
import {useContext} from "react";

function MyComponentV11() {
    const {user} = useContext(UserContext);

    return (
        <div className="box">
            <h1>ComponentV11</h1>
            <h2>Bye {user}</h2>
        </div>
    )
}

export default MyComponentV11
