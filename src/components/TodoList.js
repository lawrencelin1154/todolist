import React, { useState } from "react";
import { Box } from "@mui/material";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import Remove from "./Remove";
import "../App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeCheckedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [category, setCategory] = useState("");

  const [inputValue, setInputValue] = useState("");

  const addTask = (task, category) => {
    const newTask = { id: Date.now(), task, category, completed: false };
    setTodos([...todos, newTask]);
  };

  return (
    <div className="largeContainer">
      {["Personal", "Work", "Academic"].map((category) => (
        <div className="container">
          <h2>{category}</h2>
          <div className="categoryContainer">
            <Box sx={{ mx: 20 }} key={category}>
              <div className="buttonContainer">
                <Remove
                  category={category}
                  setCategory={setCategory}
                  removeCheckedTodos={removeCheckedTodos}
                />
              </div>
            </Box>
            <Box sx={{ mx: 20 }} key={category}>
              {todos
                .filter((todo) => todo.category === category)
                .map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
                ))}
            </Box>
          </div>
        </div>
      ))}
      <Footer
        addTask={addTask}
        category={category}
        setCategory={setCategory}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default TodoList;
