import React from "react";
import { ListItem, ListItemText, Checkbox } from "@mui/material";
import "../App.css";

function TodoItem({ todo, onToggle }) {

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <ListItem>
      <Checkbox {...label} checked={todo.completed}
        onChange={() => onToggle(todo.id)} />
      <ListItemText primary={todo.task} />
    </ListItem>
  );
}

export default TodoItem;
