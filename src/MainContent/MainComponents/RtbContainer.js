import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class RtbContainer extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h1>RTB</h1>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
