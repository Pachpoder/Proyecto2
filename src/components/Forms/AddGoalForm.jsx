import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddGoalForm = ({ onAddGoal }) => {
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

    // limpiar formulario
    setName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <h4 className="mb-4 text-center">Agregar Tarea</h4>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDueDate">
        <Form.Label>Fecha Límite</Form.Label>
        <Form.Control
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Agregar
      </Button>
    </Form>
  );
};

export default AddGoalForm;
