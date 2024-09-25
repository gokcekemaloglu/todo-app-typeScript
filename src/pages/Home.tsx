import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import AddTodoComp from '../components/AddTodoComp'
import TodoList from '../components/TodoList'
import axios from 'axios'

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

interface ITodoType {
  task: string,
  isDone: Boolean,
  id: number | string
}

const Home = () => {

  const [todos, setTodos] = useState<ITodoType[]>([])

  const getTodos = async () => {
    try {
      const {data} = await axios<ITodoType[]>(url)
      console.log(data);
      setTodos(data)
    } catch (error) {
      
    }
  }
  
  const addTodo:AddFn = async (text:string) => {
    try {
      await axios.post(url, {task:text, isDone: false})
      getTodos()
    } catch (error) {
      console.log(error);      
    }
  }

  useEffect(()=>{
    getTodos()
  },[])

  return (
    <Container>
        <Header/>
        <AddTodoComp addTodo={addTodo}/>
        <TodoList/>
    </Container>
  )
}

export default Home