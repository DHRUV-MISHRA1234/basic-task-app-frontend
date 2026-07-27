import React, { useState } from 'react';
import { Task } from '../types/Task';
import { createTask } from '../api/taskApi';
import { TextField, Button, Box } from '@mui/material';

interface AddTaskFormProps {
    onTaskAdded: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onTaskAdded }) => {
    const [task, setTask] = useState<Omit<Task, 'id'>>({
        title: '',
        description: '',
        completed: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createTask(task);
        setTask({ title: '', description: '', completed: false });
        onTaskAdded();
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
            <TextField
                label="Title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Description"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Add Task
            </Button>
        </Box>
    );
};

export default AddTaskForm;