import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

interface IAddTodoComp {
  addTodo: AddFn;
}

const AddTodoComp = ({ addTodo }: IAddTodoComp) => {
  // const [text, setText] = useState<string>("") // initial value is String
  const [text, setText] = useState("");

  const handleClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}
    >
      <TextField
        id="outlined-disabled"
        label="New Todo"
        variant="outlined"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={handleClick}
        variant="contained"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
        startIcon={<SaveIcon />}
        disabled={!text.trim()}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodoComp;
