import React from 'react';
import {  ListItemText, ListItemSecondaryAction, IconButton, Checkbox, ListItemButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../redux/action';
import { CSSTransition } from 'react-transition-group';
import './Task.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <CSSTransition 
      in={true} 
      appear={true} 
      timeout={500} 
      classNames="fade"
    >
      <ListItemButton 
        sx={{
          borderRadius: 4,
          marginBottom: 2,
          backgroundColor: task.completed ? '#4CAF50' : '#FFFFFF',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: task.completed ? '#43A047' : '#F5F5F5',
          },
        }}
      >
        <Checkbox
          edge="start"
          checked={task.completed}
          onChange={handleToggleCompleted}
          disableRipple
          sx={{
            color: task.completed ? '#FFFFFF' : '#000000',
          }}
        />
        <ListItemText 
          primary={task.title} 
          sx={{
            color: task.completed ? '#FFFFFF' : '#000000',
          }}
        />
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
