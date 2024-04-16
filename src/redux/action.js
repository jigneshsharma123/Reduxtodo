
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const LOAD_TASKS = 'LOAD_TASKS';
export const addTask = (title) =>({
    type : ADD_TASK,
    payload : {
        title,
    },
});
export const deleteTask = (id) => ({
    type : DELETE_TASK,
    payload: {
        id,
    },
});
export const toggleCompleted = (id) => ({
type : TOGGLE_COMPLETED,
payload : {
    id,
},
});

export const loadTasks = (tasks) => ({
    type : LOAD_TASKS,
    payload : tasks,
});