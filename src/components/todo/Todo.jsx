import React from 'react'
import { faPenAlt, faArrowAltCircleLeft, faXmark, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Todo(props) {

  const clickMeForEdit = (id) => {
    props.actionEditTodo(id)
  }

  const clickDeleteTodo = (id) => {
    props.removeTodo(id)
  }

  return (
    <div id='todo' key={props.todo.id}>
      <div>
        {/* todo title */}
        <div className='flex bg-cyan-500 px-5 relative rounded-md py-3 flex-col justify-start my-2'>

          <div className='absolute float-right  right-0 top-0 '>
            <button onClick={() => clickMeForEdit(props.todo.id)} className=' py-1 px-2   rounded-md '>
              <FontAwesomeIcon icon={faPenAlt} className='px-2 text-orange-200' />
            </button>
            <button onClick={() => clickDeleteTodo(props.todo.id)} className=' py-1 px-2   rounded-md ' >
              <FontAwesomeIcon icon={faXmark} className='px-2 text-pink-600' />
            </button>
          </div>

          <h5 className='text-left text-amber-400'>{props.todo.title}</h5>
          <p className='rounded-md text-cyan-100' id='title-text'>{props.todo.body}</p>

          <div>
            <span className='text-blue-900  text-center align-middle py-1 w-20 mt-2 '> periority: </span>
            <span
              className='text-white px-3 text-center align-middle py-1 border-b-2 border-orange-300 rounded-sm w-20 mt-2 '>
              {props.todo.periority}
            </span>
          </div>
        </div>


      </div>


    </div>
  )
}
