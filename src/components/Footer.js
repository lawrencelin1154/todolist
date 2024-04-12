import React from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "../App.css";

function Footer({ addTask, category, setCategory, inputValue, setInputValue }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("Please enter a task");
      return;
    }
    addTask(inputValue, category);
    setInputValue("");
    setCategory("");
  };

  return (
    <Box
      component="form"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        bgcolor: "background.paper",
        display: "flex",
        gap: 2,
      }}
    >
      <TextField
        fullWidth
        label="Add a new task"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Academic">Academic</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Add
      </Button>
    </Box>
  );
}

export default Footer;
