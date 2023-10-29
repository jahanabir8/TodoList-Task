import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "../TodoList/TodoList";

const getItemFormLS = () =>{
    const item = localStorage.getItem('Todos')
    if(item){
        return JSON.parse(item)
    } else{
        return []
    }

}

const Create = () => {
  const [todos, setTodos] = useState(getItemFormLS());

  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title: title, task: task }
    setTodos([...todos, todo])
    setTitle(''); setTask('')
  };

  useEffect(()=>{
    localStorage.setItem('Todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo__create__box">
      <div className="container">
        <div className="create__inner row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="todo__form">
              <div className="mb-3">
                <label htmlFor="title" className="form-label d-block">Todo Title</label>
                <input
                  onChange={handleTitle}
                  type="text"
                  id="title"
                  className=" form-control"
                  value={title} required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="task" className="form-label d-block">Todo Task</label>
                <input
                  onChange={handleTask}
                  type="text"
                  id="task"
                  className="form-control"
                  value={task} required
                />
              </div>
              <div>
                <button className="btn btn-primary w-100 text-center" type="submit">Add Todo</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="view__todo">
                {todos.length < 1 ? <p>No Todo's Added Yet! </p> : <TodoList todos={todos}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
