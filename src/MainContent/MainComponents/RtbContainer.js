import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class RtbContainer extends Component {
  
  render() {
    return (
      <>
        <Container className='rtb_container'>
          <Row>
            <Col>
            <img src="https://www.cricketwireless.com/uiassets/value_shippingicon.png" alt="Placeholder" />
              <h4>Free 2 Business Day Shipping</h4>
            </Col>
            <Col>
            <img src="https://www.cricketwireless.com/uiassets/value_contractsicon.png" alt="Placeholder" />
              <h4>No Annual Contracts</h4>
            </Col>
            <Col>
            <img src="https://www.cricketwireless.com/uiassets/value_crediticon.png" alt="Placeholder" />
              <h4>No Credit Checks</h4>
            </Col>
            <Col>
            <img src="https://www.cricketwireless.com/uiassets/value_5Gicon.png" alt="Placeholder" />
              <h4>Fast 5G Network</h4>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
