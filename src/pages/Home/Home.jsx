import React from 'react'
import Todos from './../../components/todos/Todos';

export default function Home({todos,actionEditTodo,removeTodo,paginate,changePaginationPage}) {
  return (
    <div id='home'>
        <Todos 
        todos={todos}
        actionEditTodo={actionEditTodo}
        removeTodo={removeTodo}
        paginate={paginate}
        changePaginationPage={changePaginationPage}
        />
    </div>
  )
}
