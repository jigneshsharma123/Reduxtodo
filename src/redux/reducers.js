
import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETED, LOAD_TASKS } from './action';

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: state.tasks.length + 1,
        title: action.payload.title,
        completed: false,
      };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save tasks to localStorage
      return {
        ...state,
        tasks: updatedTasks,
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks)); // Save tasks to localStorage
      return {
        ...state,
        tasks: filteredTasks,
      };
    case TOGGLE_COMPLETED:
      const updatedTaskList = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTaskList)); // Save tasks to localStorage
      return {
        ...state,
        tasks: updatedTaskList,
      };
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
