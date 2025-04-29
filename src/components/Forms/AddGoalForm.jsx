import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddGoalForm = ({ onAddGoal, sectionName }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !dueDate) return;

    const newItem = {
      id: Date.now(),
      name,
      description,
      dueDate
    };

    onAddGoal(newItem);

    setName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <h4 className="mb-4 text-center">
        Add a {sectionName === 'tasks' ? 'Task' : 'Goal'}
      </h4>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control 
          type="date" 
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Add {sectionName === 'tasks' ? 'Task' : 'Goal'}
      </Button>
    </Form>
  );
};

export default AddGoalForm;
