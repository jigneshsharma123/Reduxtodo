
// this is a action which i want to perform in the todo app 
export const ADD_TASK = 'ADD_TASK'; // to add the tasks in the list 
export const DELETE_TASK = 'DELETE_TASK'; // to delete the task from the list 
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'; // enabling the feature for the user so that they can marks the tasks as completed 
export const LOAD_TASKS = 'LOAD_TASKS'; // this will load the task from the loacl storage of the browser

// body of the action parts 
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