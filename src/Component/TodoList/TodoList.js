import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
    return (
        <div>
            <table className='table'>

                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Task</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope='row'></td>
                        <td scope='row'></td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default TodoList;