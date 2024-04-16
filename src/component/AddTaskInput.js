import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Grid } from '@mui/material';
import { addTask } from '../redux/action';

const AddTaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={8}>
        <TextField
          label="Add Task"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{
            marginBottom : 5
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAddTask}
          size="large"
          sx={{
            marginBottom : 5,
            padding:1.8
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTaskInput;
