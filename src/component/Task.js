import React from 'react';
import { ListItemText, ListItemSecondaryAction, IconButton, Checkbox, ListItemButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../redux/action';
import { CSSTransition } from 'react-transition-group';
import './Task.css'; // Import CSS file for styling

const Task = ({ task }) => {
  const dispatch = useDispatch();

  // Function to handle task deletion
  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  // Function to handle toggling task completion
  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <CSSTransition 
      in={true} 
      appear={true} 
      timeout={500} 
      classNames="fade" // CSS transition class name
    >
      <ListItemButton 
        sx={{
          borderRadius: 4,
          marginBottom: 2,
          backgroundColor: task.completed ? '#4CAF50' : '#FFFFFF', // Dynamic background color based on task completion
          transition: 'background-color 0.3s ease', // Smooth transition effect for background color
          '&:hover': {
            backgroundColor: task.completed ? '#43A047' : '#F5F5F5', // Change background color on hover
          },
        }}
      >
        {/* Checkbox for task completion */}
        <Checkbox
          edge="start"
          checked={task.completed}
          onChange={handleToggleCompleted}
          disableRipple
          sx={{
            color: task.completed ? '#FFFFFF' : '#000000', // Dynamic text color based on task completion
          }}
        />
        {/* Task title */}
        <ListItemText 
          primary={task.title} 
          sx={{
            color: task.completed ? '#FFFFFF' : '#000000', // Dynamic text color based on task completion
          }}
        />
        {/* Delete button */}
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={handleDeleteTask}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemButton>
    </CSSTransition>
  );
};

export default Task;
