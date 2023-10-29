import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
              <div>
                <label htmlFor="title">Todo Title</label>
                <input
                  onChange={handleTitle}
                  type="text"
                  id="title"
                  value={title}
                />
              </div>
              <div>
                <label htmlFor="task">Todo Task</label>
                <input
                  onChange={handleTask}
                  type="text"
                  id="task"
                  value={task}
                />
              </div>
              <div>
                <button type="submit">Add Todo</button>
              </div>
            </form>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Create;
