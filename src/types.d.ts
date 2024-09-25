type AddFn = (text:string) => Promise<void>
type ToggleFn = (todo:ITodoType) => Promise<void>
type DeleteFn = (id: string | number) => Promise<void>

interface ITodoType {
    task: string,
    isDone: Boolean,
    id: number | string
}

interface ITodoListFn {  
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn
}