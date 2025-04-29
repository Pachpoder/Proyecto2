import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CustomCard.css';

export const CustomCard = ({ id, name, description, dueDate, onRemove }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>Due Date:</strong> {dueDate}</Card.Text>
        <Button variant="danger" onClick={() => onRemove(id)}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};
