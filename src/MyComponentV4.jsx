import {useState} from "react";
import food from "./Food.jsx";

function MyComponentV4() {
    const [foods, setFoods] = useState(["apple", "banana", "orange"]);
    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default MyComponentV4
