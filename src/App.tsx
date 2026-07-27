import React from 'react';
import TaskList from './components/TaskList';
import { CssBaseline, Container, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Task Manager
        </Typography>
        <TaskList />
      </Container>
    </>
  );
};

export default App;
