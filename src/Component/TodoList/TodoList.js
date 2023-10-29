import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiTrash2 } from "react-icons/fi";

import "./TodoList.css";
import Search from "./Search";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <Search />
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
          {todos.map((todo, index) => {
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
      <button className="btn btn-danger w-100">Remove Todo List</button>
    </div>
  );
};

export default TodoList;
