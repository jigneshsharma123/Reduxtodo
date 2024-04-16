import React from 'react';
import AddTaskInput from './component/AddTaskInput'; // Import the AddTaskInput component
import store from './redux/store'; // Import the Redux store
import { Provider } from 'react-redux'; // Import the Provider component from react-redux
import { Container } from '@mui/material'; // Import the Container component from Material-UI
import TaskList from './component/TaskList'; // Import the TaskList component

const App = () => {
  return (
    <Provider store={store}> {/* Provide the Redux store to all components */}
      <Container maxWidth="md" sx={{ backgroundColor: '#F9F9F9', padding: 4, borderRadius: 8 }}> {/* Container for layout styling */}
        <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Todo App</h1> {/* Heading */}
        <AddTaskInput /> {/* Render the AddTaskInput component */}
        <TaskList /> {/* Render the TaskList component */}
      </Container>
    </Provider>
  );
}

export default App; // Export the App component as the default
