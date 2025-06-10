import {useState} from "react";

function TodoList() {

    const [tasks, setTasks] = useState(["Eat", "Task", "Watch"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (!newTask) {

            return
        }
        setTasks(t => [...t, newTask])
        setNewTask("")
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((task) => task !== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index <= 0) {
            return
        }

        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);

    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => removeTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>Up</button>
                        <button onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
