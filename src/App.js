import React from 'react';
import AddTaskInput from './component/AddTaskInput';
import store from './redux/store';
import { Provider } from 'react-redux'
import { Container } from '@mui/material';
import TaskList from './component/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md" sx={{ backgroundColor: '#F9F9F9', padding: 4, borderRadius: 8 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Todo App</h1>
        <AddTaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
}

export default App;
