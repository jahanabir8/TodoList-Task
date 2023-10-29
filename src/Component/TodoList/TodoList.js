import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FiTrash2 } from 'react-icons/fi';

import './TodoList.css'

const TodoList = ({todos}) => {
    return (
        <div>
            <table className='table'>

                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Task</th>
                        <th className='text-center' scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>{
                            return(
                                <tr key={index}>
                                    <td scope='row'>{todo.title}</td>
                                    <td scope='row'>{todo.task}</td>
                                    <td className='text-center trash' scope='row'><FiTrash2 /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    );
};

export default TodoList;