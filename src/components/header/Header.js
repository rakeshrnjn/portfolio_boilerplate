import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../navigation/Navigation';

import '../../scss/header/header.scss';

const Header = (props) => {
  return (
    <header className="c-header">
      <Container>
        <Row>
          <Col md={2}>Logo</Col>
          <Col md={10}>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
