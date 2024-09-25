import React, { FC } from 'react'

interface ITodoListItem extends ITodoListFn {
    todos: ITodoType;
  }

const TodoListItem:FC<ITodoListItem> = ({todo, toggleTodo, deleteTodo}) => {
  return (
    <div>TodoListItem</div>
  )
}

export default TodoListItem