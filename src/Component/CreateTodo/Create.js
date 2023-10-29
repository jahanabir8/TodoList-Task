import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Create = () => {
    return (
        <div className='todo__create__box'>
            <div className='container'>
                <div className='create__inner'>
                    <form className='todo__form'>
                        <div>   
                            <label htmlFor='title'>Todo Title</label>
                            <input type='text' id='title' value={''}/>
                        </div>
                        <div>   
                            <label htmlFor='task'>Todo Title</label>
                            <input type='text' id='task' value={''}/>
                        </div>
                        <div>
                            <button type='submit'>Add Todo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;