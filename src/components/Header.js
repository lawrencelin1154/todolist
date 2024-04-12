import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../App.css';

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
            To-Do Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;