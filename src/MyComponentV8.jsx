import MyComponentV9 from "./MyComponentV9.jsx";
import {useState, createContext} from "react";

export const UserContext = createContext()

function MyComponentV8() {
    const [user, setUser] = useState("Bro");

    return (
        <div className="box">
            <h1>ComponentV8</h1>
            <h2>Hello {user}</h2>
            <UserContext.Provider value={{ user, setUser }}>
                <MyComponentV9/>
            </UserContext.Provider>
        </div>
    )
}

export default MyComponentV8
