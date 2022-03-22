import React from 'react';

const ToDoTable = ({ task, index }) => {
    console.log(task, index);

    return(
        <tr>
            <td>{index +1}</td>
            <td>{task.text}</td>
            <td>{task.isCompleted?"Done":"Stil in Progress"}</td>
        </tr>
    )
}

export default ToDoTable