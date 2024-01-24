import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';

const CarouselCard = ({ title, text, imageUrl, btnText, disclose }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
          {disclose}
        </Card.Text>
        <Button variant="primary">{btnText}</Button>
      </Card.Body>
    </Card>
  );
};

export default CarouselCard;