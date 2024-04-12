import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

function PopUp({ open, setOpen, removeCheckedTodos }) {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Do you want to delete all completed tasks?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deleteing all current tasks is permanent and can't be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {setOpen(false)}}>
          <CloseIcon style={{ color: 'red'}}/>
        </Button>
        <Button onClick={() => {removeCheckedTodos(); setOpen(false)}}>
          <CheckIcon style={{ color: 'green'}}/>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PopUp;
