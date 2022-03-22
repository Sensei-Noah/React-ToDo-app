import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ToDoForm = ({ addToDo }) => {
    const [value, setvalue] = useState('');

console.log(value)

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addToDo(value);
        setvalue('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
            type="text"
            placeholder="Enter New Task..."
            value={value}
            onChange={e => setvalue(e.target.value)}/>
        </Form>
    )
}

export default ToDoForm
