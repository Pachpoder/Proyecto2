import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/taskSlice';
import './CustomCard.css';

export const CustomCard = ({ id, name, description, dueDate }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>Fecha Límite:</strong> {dueDate}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};
