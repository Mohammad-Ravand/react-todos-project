import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div id='navbar' className='bg-indigo-600 py-3 text-center text-white'>
        <nav>
            <Link className='px-5 py-1 border-2 border-indigo-300 mx-2 rounded-md hover:bg-indigo-100 hover:text-indigo-500 focus:text-red-800'  to="/">All Todos</Link>
            <Link className='px-5 py-1 border-2 border-indigo-300 mx-2 rounded-md hover:bg-indigo-100 hover:text-indigo-500 focus:text-red-800' to="/newTodo">NewTodo</Link>
        </nav>
    </div>
  )
}
