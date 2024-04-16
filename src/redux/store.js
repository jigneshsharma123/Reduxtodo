import { legacy_createStore as createStore} from 'redux'
import rootReducer from './reducers';

const persistedState = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks'))
  : [];

const store = createStore(rootReducer, { tasks: persistedState });

export default store;
