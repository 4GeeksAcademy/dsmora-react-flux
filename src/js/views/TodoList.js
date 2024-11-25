import React, { useContext } from "react";
import TaskContext from "../taskContext";
import { AddTask } from "../component/AddTask";
import { useNavigate } from "react-router";


export const TodoList = () => {
    const { tasks } = useContext(TaskContext);
    const navigate = useNavigate()

    return (
        <main>
            <h2>Todo list</h2>
            <AddTask />
            <ul className="list-group w-50">
                {tasks.map((task, index) => (
                    <p key={index}>
                        {task}
                    </p>
                    // <ListItem key={index} task={task} index={index} />
                ))}
            </ul>
            <button onClick={() => navigate('/')}>
                Go to Home
            </button>
        </main>
    )
}