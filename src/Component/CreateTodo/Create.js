import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    
  }

  const handleTitle = (e) =>{
    setTitle(e.target.value)
  }
  const handleTask = (e) =>{
    setTask(e.target.value)
  }
  return (
    <div className="todo__create__box">
      <div className="container">
        <div className="create__inner">
          <form onSubmit={handleSubmit} className="todo__form">
            <div>
              <label htmlFor="title">Todo Title</label>
              <input onChange={handleTitle} type="text" id="title" value={title} />
            </div>
            <div>
              <label htmlFor="task">Todo Title</label>
              <input onChange={handleTask} type="text" id="task" value={task} />
            </div>
            <div>
              <button type="submit">Add Todo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
