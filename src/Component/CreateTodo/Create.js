import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "../TodoList/TodoList";

import './Create.css'

const getItemFormLS = () => {
  const item = localStorage.getItem("Todos");
  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
};

const Create = () => {
  const [todos, setTodos] = useState(getItemFormLS());

  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { priority: priority, title: title, task: task };
    setTodos([...todos, todo]);
    setTitle("");
    setTask("");
    setPriority("");
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (priority) => {
    const filterTodos = todos.filter((element, index) => {
      return element.priority !== priority;
    });
    setTodos(filterTodos);
  };

  return (
    <div className="todo__create__box">
      <div className="container">
        <div className="create__inner">
          <h1 className="text-center mb-5 mt-3 fw-bolder main__title"> Todo List </h1>
          <div className=" row g-3 g-md-5">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="todo__form">
                <div className="mb-3">
                  <label htmlFor="priority" className="form-label d-block">
                    Task Priority
                  </label>
                  <input
                    onChange={handlePriority}
                    type="number"
                    placeholder="Add a Priority number for task"
                    id="priority"
                    className=" form-control"
                    value={priority}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label d-block">
                    Todo Title
                  </label>
                  <input
                    onChange={handleTitle}
                    type="text"
                    placeholder="Task Name"
                    id="title"
                    className=" form-control"
                    value={title}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="task" className="form-label d-block">
                    Todo Task
                  </label>
                  <input
                    onChange={handleTask}
                    type="text"
                    placeholder="Task Description"
                    id="task"
                    className="form-control"
                    value={task}
                    required
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary w-100 text-center"
                    type="submit"
                  >
                    Add Todo
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="view__todo mt-5 mt-md-0">
                {todos.length < 1 ? (
                  <p className="empty__msz text-center text-md-start">No Todo's Added Yet! </p>
                ) : (
                  <TodoList todos={todos} deleteTodo={handleDelete} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
