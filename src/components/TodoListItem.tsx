import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { FC } from "react";

interface ITodoListItem extends ITodoListFn {
  todos: ITodoType;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem
      disableGutters
      sx={{ padding: "1rem", cursor: "pointer" }}
      secondaryAction={
        <IconButton
          sx={{ "&:hover": { color: "red" } }}
          aria-label="Delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        sx={{ wordWrap: "break-word" }}
        primary={todo.task}
        onClick={() => toggleTodo(todo)}
      />
    </ListItem>
  );
};

export default TodoListItem;
