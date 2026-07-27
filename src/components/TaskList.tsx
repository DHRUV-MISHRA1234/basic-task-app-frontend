import React, { useState, useEffect } from 'react';
import { Task } from '../types/Task';
import { getTasks, deleteTask } from '../api/taskApi';
// import { List, ListItem, ListItemText, IconButton, Checkbox, TextField, Button } from '@mui/material';
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskForm from './AddTaskForm';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const tasks = await getTasks();
        setTasks(tasks);
    };

    const handleDelete = async (id: string) => {
        await deleteTask(id);
        fetchTasks();
    };

    return (
        <div>
            <h2>Tasks</h2>
            <AddTaskForm onTaskAdded={fetchTasks} />
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id}>
                        <Checkbox checked={task.completed} />
                        <ListItemText primary={task.title} secondary={task.description} />
                        <IconButton edge="end" onClick={() => handleDelete(task.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TaskList;