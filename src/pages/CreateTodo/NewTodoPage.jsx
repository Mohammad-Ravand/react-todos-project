import React from 'react'
import NewTodo from '../../components/newtodo/NewTodo';

export default function NewTodoPage(props) {
  return (
    <div id='NewTodoPage'>
        <NewTodo saveNewTodo={props.saveNewTodo}/>
    </div>
  )
}
