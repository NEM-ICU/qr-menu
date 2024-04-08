import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMenuStore } from "../store/menu-store";

export default function CategoryInputModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { addCategory } = useMenuStore((state) => ({
    addCategory: state.addCategory,
  }));

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
      {/* <button onClick={handleClickOpen}>Hello world</button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        className="m-24"
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            addCategory(formJson.category);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Categorizing your menu helps customers quickly locate their desired
            items. Please enter the category for your food items above.
          </DialogContentText>
          <div className="my-2">
            <TextField
              autoFocus
              required
              margin="dense"
              id="category"
              name="category"
              label="Category"
              type="text"
              fullWidth
              variant="standard"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add Category</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
