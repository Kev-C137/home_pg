import React, { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import CarouselCard from "../MainComponents/MisoComponents/CarouselCard";

const PrimaryBannerSlider = () => {
  return (
    <div >
      <Container className="justify-content-md-center">
        <Row>  
          <Col>
            <CarouselCard
            title = "iPhone 11 for $199.99"
            text = "when you switch to Cricket and get a $60/mo. voice plan."
            imageUrl = "./assets/primary_NYPS2024_iphone11.png"
            btnText = "Buy Now"
            disclose = "*First month svc. charge & tax due at sale. Fees may apply. Terms & restrictions apply. See details"
            />

          </Col>
          
          <Col>
            <CarouselCard
            title = "Get a 5G smartphone starting at FREE!"
            text = "when you open a $60/mo. voice plan with Cricket."
            imageUrl = "./assets/primary_NYPS2024_startingfree_5G.png"
            btnText = "See 5G deals"
            disclose = "Select devices only. First month service charge and tax due at sale. Activation (in-store, $25/line) & additional fees may apply. Terms & restrictions apply. See details. Cricket 5G is not available everywhere. See cricketwireless.com/map for coverage details."
            />
          </Col>

          <Col>
          <CarouselCard
            title = "A plan for the whole family!"
            text = "Get 4 lines of unlimited for $25/mo. each with nationwide 5G inlcuded. "
            imageUrl = "./assets/primary_NYPS2024_4for100.png"
            btnText = "Shop plans"
            disclose = "Four lines required. Discount varies per line. Additional fees, usage & restrictions apply. Cricket 5G requires compatible device and is not available everywhere. For 5G coverage, see cricketwireless.com/maps. See details"
            />          
          
          </Col>

          </Row>
     

      </Container>

    {/* <Carousel interval={null}  className="paused-carousel">
      <Carousel.Item>
        <CarouselCard
        title = "iPhone 11 for $199.99"
        text = "when you switch to Cricket and get a $60/mo. voice plan."
        imageUrl = "./assets/primary_NYPS2024_iphone11.png"
        btnText = "Buy Now"
        disclose = "*First month svc. charge & tax due at sale. Fees may apply. Terms & restrictions apply. See details"
        />
      </Carousel.Item>
      <Carousel.Item>
      <CarouselCard
        title = "Get a 5G smartphone starting at FREE!"
        text = "when you open a $60/mo. voice plan with Cricket."
        imageUrl = "./assets/primary_NYPS2024_startingfree_5G.png"
        btnText = "See 5G deals"
        disclose = "Select devices only. First month service charge and tax due at sale. Activation (in-store, $25/line) & additional fees may apply. Terms & restrictions apply. See details. Cricket 5G is not available everywhere. See cricketwireless.com/map for coverage details."
        />
      </Carousel.Item>
      <Carousel.Item>
      <CarouselCard
        title = "A plan for the whole family!"
        text = "Get 4 lines of unlimited for $25/mo. each with nationwide 5G inlcuded. "
        imageUrl = "./assets/primary_NYPS2024_4for100.png"
        btnText = "Shop plans"
        disclose = "Four lines required. Discount varies per line. Additional fees, usage & restrictions apply. Cricket 5G requires compatible device and is not available everywhere. For 5G coverage, see cricketwireless.com/maps. See details"
        />
      </Carousel.Item>
    </Carousel> */}      
    </div>
  );
};

export default PrimaryBannerSlider;