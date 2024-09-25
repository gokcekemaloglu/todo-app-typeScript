import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import TodoListItem from './TodoListItem';
import "./todolist.css"

// interface ITodoList {
//   todos: ITodoType[]
//   toggleTodo: ToggleFn;
//   deleteTodo: DeleteFn
// }

interface ITodoList extends ITodoListFn {
  todos: ITodoType[]
}

const TodoList:React.FC<ITodoList> = ({todos, toggleTodo, deleteTodo}) => {

  const progressTodos = todos.filter(todo=>!todo.isDone)
  const completedTodos = todos.filter(todo=>todo.isDone)

  return (
    <Grid 
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
        gap: "0.5rem",
      }}
    >
      <Grid 
        size={{xs:12, sm:8, md:5}}
        position={"relative"}
        className="myscrool scrool-progress"
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
        }}
      >
        <Typography
          className="title"
          color="secondary"
          align="center"
          variant="h4"
        >
          InProgress Todo
        </Typography>
        {
          progressTodos.length ? (
            progressTodos.map(todo=>(
              <TodoListItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          ) : (<Typography color="error" mt={3}>
            No InProgress Todo
          </Typography>)
        }
      </Grid>
      <Grid 
        size={{xs:12, sm:8, md:5}}
        position={"relative"}
        className="myscrool scrool-completed"
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
        }}
      >
        <Typography
          className="title"
          sx={{ color: "green" }}
          align="center"
          variant="h4"
        >
          InProgress Todo
        </Typography>
        {
          completedTodos.length ? (
            completedTodos.map(todo=>(
              <TodoListItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          ) : (<Typography color="error" mt={3}>
            No Completed Todo
          </Typography>)
        }
      </Grid>
    </Grid>
  )
}

export default TodoList