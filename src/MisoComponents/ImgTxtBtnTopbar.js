import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const ImgTxtBtnTopbar = ({ text, imageUrl, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Image src={imageUrl} />
      {text}
    </Button>
  );
};

export default ImgTxtBtnTopbar;
