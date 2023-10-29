import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiTrash2 } from "react-icons/fi";

import "./TodoList.css";
import Search from "./Search";

const TodoList = ({ todos, deleteTodo, setTodos }) => {
    const [search, setSearch] = useState('')
    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }

    const handleAllTodo = () =>{
        setTodos([])
    }
  return (
    <div>
      <Search search={search} handleSearch={handleSearch}/>
      <p className="total__task">Total Task: {todos.length}</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Task</th>
            <th className="text-center" scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.priority.toLowerCase().includes(search);
              })
          
          .map((todo, index) => {
            return (
              <tr key={index}>
                <td scope="row">{todo.priority}</td>
                <td scope="row">{todo.title}</td>
                <td scope="row">{todo.task}</td>
                <td
                  onClick={() => deleteTodo(todo.priority)}
                  className="text-center text-danger trash"
                  scope="row"
                >
                  <FiTrash2 />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleAllTodo} className="btn btn-danger w-100">Remove Todo List</button>
    </div>
  );
};

export default TodoList;
