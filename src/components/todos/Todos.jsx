import React, { useEffect, useState } from 'react'
import Todo from '../todo/Todo';
import Navbar from './../navbar/Navbar';
import Pagination from './../pagination/Pagination';

export default function Todos({todos,actionEditTodo,removeTodo,paginate,changePaginationPage}) {

  return (
    <div id='todos'>
      <div className="grid grid-rows-12 bg-gray-400 shadow-md shadow-blue-500  gird-col-1 h-screen ">
        <div className="col-span-1 bg-gray-300  ">
          <Navbar  />
          <div className='flex flex-col items-center justify-center  relative mt-5'>
            <h2 className='flex-1 py-5 font-bold text-orange-700'>List Of Todos</h2>

            {/* show list of todos */}
            <div className='border-2 overflow-scroll  rounded-md p-3 border-blue-400   w-full md:w-10/12 lg:w-9/12 xl:w-7/12' style={{maxHeight:'600px'}}>
              {
                Array.from(todos.values()).map((todo) => {
                  if(todo.visible === true) {

                    return <Todo
                    key={todo.id } 
                    todo={todo} 
                    actionEditTodo={actionEditTodo}
                    removeTodo={removeTodo}
                    />
                  }
                  })
                }
            </div>
              <Pagination 
                changePaginationPage={changePaginationPage}
                paginate={paginate}
              />
          </div>
        </div>

      </div>

    </div>
  )
}
