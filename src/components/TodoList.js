import React, { useState, useRef } from "react";
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

  const inputRef = useRef(null);

  const handleAddClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="largeContainer">
      {["Personal", "Work", "Academic", "College"].map((category) => (
        <Box
          height={600}
          width="30%"
          display="flex"
          alignItems="left"
          p={3}
          sx={{ border: "2px solid grey", borderRadius: 5, mx:2 }}
        >
          <div className="categoryContainer">
            <h2>{category}</h2>
            <Box key={category} sx={{ pt: 1, pb: 1, px: 0 }}>
              <div className="buttonContainer">
                <Remove
                  category={category}
                  setCategory={setCategory}
                  removeCheckedTodos={removeCheckedTodos}
                  handleClick={() => handleAddClick()}
                />
              </div>
            </Box>
            {todos
              .filter((todo) => todo.category === category)
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
              ))}
          </div>
        </Box>
      ))}
      <Footer
        addTask={addTask}
        category={category}
        setCategory={setCategory}
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
    </div>
  );
}

export default TodoList;
