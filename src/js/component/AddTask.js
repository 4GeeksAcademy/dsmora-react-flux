import React, { useContext } from 'react';
import TaskContext from '../taskContext';


export const AddTask = () => {
    const { taskActions } = useContext(TaskContext);


    function handleAddTask(e) {
        e.preventDefault();
        let textbox = e.target.elements.task;
        taskActions({ type: "add", payload: textbox.value });
        textbox.value = "";
    }

    return (
        <li className="list-group-item">
            <form onSubmit={handleAddTask} className="d-flex justify-content-between">
                <input name="task" type="text" className="w-100 form-control" />
                <button
                    type="submit"
                    role="button"
                    className="btn btn-info rounded-pill"
                >
                    <i className="fa fa-plus"></i>
                </button>
            </form>
        </li>
    );
}