import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Grid } from '@mui/material';
import { addTask } from '../redux/action';

const AddTaskInput = () => {
  // State to hold the input value
  const [task, setTask] = useState('');

  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check if the input is not empty
    if (task.trim()) {
      // Dispatch action to add task to Redux store
      dispatch(addTask(task));
      // Clear the input field
      setTask('');
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      {/* Input field for adding a new task */}
      <Grid item xs={12} md={8}>
        <TextField
          label="Add Task"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{
            marginBottom: 5 // Add margin bottom for spacing
          }}
        />
      </Grid>
      {/* Button to add a new task */}
      <Grid item xs={12} md={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAddTask}
          size="large"
          sx={{
            marginBottom: 5, // Add margin bottom for spacing
            padding: 1.8 // Increase padding for better appearance
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTaskInput;
