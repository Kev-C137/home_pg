import Button from 'react-bootstrap/Button';
import CarouselCard from 'react-bootstrap/Card';s
import React from 'react';
import Card from 'react-bootstrap/Card';

const CarouselCard = ({ title, text, imageUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CarouselCard;