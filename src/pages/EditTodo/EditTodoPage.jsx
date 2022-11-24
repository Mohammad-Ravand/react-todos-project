import React from 'react'
import EditTodo from '../../components/editTodo/EditTodo';

export default function EditTodoPage(props) {
  return (
    <div id='EditTodo'>
      <EditTodo
        todo={props.stateEditTodo}
        actionEditTodo={props.actionEditTodo}
        updateTodo={props.updateTodo}
      />
    </div>
  )
}
