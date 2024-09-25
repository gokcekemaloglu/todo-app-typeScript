import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

interface IAddTodoComp {
  addTodo: (text: string) => Promise<void>
}

const AddTodoComp = ({addTodo}: IAddTodoComp) => {
  // const [text, setText] = useState<string>("") // initial value is String
  const [text, setText] = useState("");

  const handleClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Box>
      <TextField
        id="outlined-disabled"
        label="New Todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={handleClick}
        variant="contained"
        color="success"
        startIcon={<SaveIcon />}
        disabled={!text.trim()}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodoComp;
