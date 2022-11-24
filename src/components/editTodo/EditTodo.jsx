import React, { useState } from 'react'
import Navbar from './../navbar/Navbar';

import { useNavigate  } from "react-router-dom";

export default function EditTodo(props) {
    const [editTodoState, setEditTodo] = useState({
        id: props.todo.id || "",
        title: props.todo.title || "",
        body: props.todo.body || "",
        periority:"notmal"
    })

    const changeTitle = (e) => {
        setEditTodo({ ...editTodoState, title: e.target.value })
    };


    const changeDescription = (e) => {
        setEditTodo({ ...editTodoState, body: e.target.value })

    };

    const changePersiority = (e) => {
        setEditTodo({ ...editTodoState, periority: e.target.value })

    };


    let navigate = useNavigate ();

    const saveEditTodo = (e) => {
        e.preventDefault();
        props.updateTodo(editTodoState);
        navigate("/");
    };

    return (
        <div id='editTodoState'>
            <div className="grid grid-rows-12 bg-gray-400  gird-col-1 h-screen ">
                <div className="col-span-1 bg-gray-300  ">
                    <Navbar />
                    <div className='flex flex-col items-center justify-center  mt-5'>
                        <h2 className='flex-1 py-5 font-bold text-orange-700'>Create New Todo</h2>
                        <div className='border-2 rounded-md p-3 border-blue-400  w-full md:w-11/12 lg:w-8/12 xl:w-6/12'>
                            <form className='' onSubmit={saveEditTodo}>

                                {/* todo title */}
                                <div className='flex justify-center my-2'>
                                    <label className='w-1/5 text-center px-5'>Tittle</label>
                                    <input type="text" onChange={changeTitle} value={editTodoState.title} name="title" className='rounded-md w-3/5 px-3 py-2' id="title" />
                                </div>

                                {/* todo description */}
                                <div className='flex justify-center my-2'>
                                    <label className='w-1/5 text-center px-5'>Description</label>
                                    {/* <input type="text" name="title" className='rounded-md w-3/5 px-3 py-2' id="title" /> */}
                                    <textarea name="description" onChange={changeDescription} className='rounded-md w-3/5 px-3 py-2' value={editTodoState.body} id="description"></textarea>
                                </div>

                                {/* todo periority */}
                                <div className='flex justify-center my-2'>
                                    <label className='w-1/5 text-center px-5'>Periority</label>
                                    <select name="periority"  value={editTodoState.periority || "5"}  onChange={changePersiority} id="periority" className='text-center rounded-md w-3/5 px-3 py-2'>
                                        <option value="10">very hight</option>
                                        <option  value="7">hight</option>
                                        <option  value="5" >normal</option>
                                        <option  value="3">low</option>
                                        <option  value="1">very low</option>
                                    </select>
                                </div>

                                {/* submit */}
                                <div className='flex justify-center mb-3 mt-6'>
                                    <button className='px-6 py-2 text-white bg-green-500 rounded-md ' type="submit">Update</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
