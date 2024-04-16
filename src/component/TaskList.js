import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { TextField } from '@mui/material';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [searchText, setSearchText] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search Tasks"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{
            padding : 1
        }}
      />
      <TransitionGroup>
        {filteredTasks.map((task) => (
          <CSSTransition key={task.id} timeout={500} classNames="item">
            <Task task={task} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TaskList;
