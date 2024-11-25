//TaskContext.jsx
import React, { useReducer, createContext } from "react";

// Creamos el contexto vacío
const TaskContext = createContext(null);

const TaskReducer = (state, action) => {
    // Dependiendo del type de la acción realiza una tarea distinta
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "remove":
            let newState = [...state]
            newState.splice(action.index, 1);
            return newState
        default:
            return state;
    }
};

// Crearemos un componente que va a envolver nuestra aplicación en el contexto
export function TaskProvider({ children }) {
    const [tasks, taskActions] = useReducer(TaskReducer, []);
    return (
        <TaskContext.Provider value={{ tasks, taskActions }}>
            {children}
        </TaskContext.Provider>
    );
}

// Es necesario exportar el contexto para usarlo en otros componentes
export default TaskContext;