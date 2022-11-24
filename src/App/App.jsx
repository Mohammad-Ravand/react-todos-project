import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import NewTodoPage from './../pages/CreateTodo/NewTodoPage';
import { useNavigate } from 'react-router-dom';
import EditTodoPage from './../pages/EditTodo/EditTodoPage';

function App() {
    const navigate = useNavigate();

    let initialTodos = [
        [1, {
            userId: 2,
            visible: true,
            periority: 'normal',
            id: 1,
            title: 'one title t',
            body: 'one description t',
        }],

        [2, {
            userId: 2,
            visible: true,
            periority: 'normal',
            id: 2,
            title: 'two title',
            body: 'two descritpion'
        }],
        [3, {
            userId: 2,
            visible: false,
            periority: 'normal',
            id: 3,
            title: 'three title',
            body: 'three descritpion'
        }],

        [4, {
            userId: 2,
            visible: false,
            periority: 'normal',
            id: 4,
            title: 'four title',
            body: 'four descritpion'
        }],

        [5, {
            userId: 2,
            visible: false,
            periority: 'normal',
            id: 5,
            title: 'five title',
            body: 'five descritpion'
        }],

        [6, {
            userId: 2,
            visible: false,
            periority: 'normal',
            id: 6,
            title: 'six title',
            body: 'six descritpion'
        }],

        [7, {
            userId: 2,
            visible: false,
            periority: 'normal',
            id: 7,
            title: 'seven title',
            body: 'seven descritpion'
        }]
        ,

        [8, {
            userId: 2,
            visible: false,
            periority: 'normal',
            id: 8,
            title: 'eight title',
            body: 'eight descritpion'
        }],

        [9, {
            userId: 2,
            visible: false,
            periority: 'normal',
            id: 9,
            title: 'nine title',
            body: 'nine descritpion'
        }],

        [10, {
            userId: 2,
            visible: false,
            periority: 'normal',
            id: 10,
            title: 'ten title',
            body: 'ten descritpion'
        }]

    ];
    const [todos, setTodos] = useState(new Map(initialTodos));

    console.log('rendering app component')
    useEffect(()=>{
        changePaginationPage(1)
    },[])

    const [paginate, setPaginate] = useState({
        pages: Math.ceil(todos.size / 5),
        current: 1,
        countePerPage: 5
    });



    const changePaginationPage = (pageNumber) => {
        if (pageNumber <= paginate.pages) {
            filterTodosByPaginateion(pageNumber)
            setPaginate({ ...paginate, current: pageNumber })
        }
    }

    const filterTodosByPaginateion = (pageNumber) => {
        let offset = (paginate.pages / paginate.countePerPage) * (pageNumber - 1);


        //hide all todos except findedpageItems
        let final = offset + (paginate.countePerPage);
        let index = 0;

        for (const item of todos) {
            let mapKey = item[0];
            let mapValue = item[1];
            if (index >= offset && index < final) {
                todos.set(mapKey, { ...mapValue, visible: true })
            } else {
                todos.set(mapKey, { ...mapValue, visible: false })
            }
            index++;
        }
        setTodos(new Map([...todos]))

    }

    const [stateEditTodo, setStateEditTodo] = useState({});

    // useEffect(()=>{
    //   fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     json = json.splice(0,19)
    //     setTodos(json)
    //     console.log(json)
    //   });
    // },[]);


    const saveNewTodo = (newTodo) => {
       
        todos.set(newTodo.id, newTodo)
        setTodos(todos)
        
        filterTodosByPaginateion(1)
        setPaginate({ ...paginate, current: 1,pages:Math.ceil(todos.size / paginate.countePerPage) })
    }

    const actionEditTodo = (id) => {
        try {
            //find todo by id
            const myTodoForEdit = todos.get(id);
            if (myTodoForEdit.length == 0) {
                new Error('edit todo not founded')
            }

            setStateEditTodo(myTodoForEdit)

            //go to edit page with data
            navigate('/editTodo');

        } catch (error) {
        }
    }

    const updateTodo = (updatedTodo) => {

        todos.set(updatedTodo.id, updatedTodo)

        setTodos(todos)
        changePaginationPage(1)
    }

    const removeTodo = (todoId) => {
        try {


            todos.delete(todoId)
            const newTodos = new Map([...todos]);
            setTodos(newTodos)
            changePaginationPage(1)

            setPaginate({ ...paginate, pages: Math.ceil(newTodos.size / paginate.countePerPage),current:1})
        } catch (error) {
        }
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={
                    <Home
                        todos={todos}
                        actionEditTodo={actionEditTodo}
                        removeTodo={removeTodo}
                        paginate={paginate}
                        changePaginationPage={changePaginationPage}
                    />
                } />
                <Route path="/newTodo" element={<NewTodoPage saveNewTodo={saveNewTodo} />} />
                <Route
                    path="/editTodo"
                    element={
                        <EditTodoPage
                            stateEditTodo={stateEditTodo}
                            actionEditTodo={actionEditTodo}
                            updateTodo={updateTodo}
                        />
                    } />
                {/* { <Route path="/create" element={<Create />} /> */}
                {/* <Route path="/blogs/:id" element={<BlogDetails />} />  */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );


}

export default App;
