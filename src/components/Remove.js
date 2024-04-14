import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PopUp from "./PopUp";

function Remove({category, setCategory, removeCheckedTodos, handleClick}) {

  const [open, setOpen] = useState(false);

  const handleCategory = () => {
    setCategory(category);
    handleClick();
  };

  return (
    <>
    <ButtonGroup
      sx={{
        "& .MuiButton-root": {
          opacity: 0,
          transition: "opacity 0.3s",
        },
      }}
    >
      <Button onClick={() => setOpen(true)}>
        <DeleteIcon />
      </Button>
      <Button onClick={handleCategory}>
        <PostAddIcon />
      </Button>
    </ButtonGroup>
    <PopUp open={open} setOpen={setOpen} removeCheckedTodos={removeCheckedTodos}/>
    </>
  );
}

export default Remove;
