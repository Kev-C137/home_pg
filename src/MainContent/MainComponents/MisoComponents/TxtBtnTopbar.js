import React from 'react';
import Button from 'react-bootstrap/Button';

const TxtBtnTopbar = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>{text}</Button>
  );
};

export default TxtBtnTopbar;
