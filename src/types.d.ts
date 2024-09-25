//* typescript js supersetidir. yani browserlar tarafından işlenemez o nedenle compile a ihtiyacı vardır. Ts ile yazılan kodlar js e dönüştürülür. Js e dönüştürülürken typescripte özgü yapılar js kodunda karşılığı olmadığı için dönüştürülmezler ve böylelikle production ortamında bir yük oluşturmazlar. 

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