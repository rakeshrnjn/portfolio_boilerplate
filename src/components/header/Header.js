import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../navigation/Navigation';

import '../../scss/header/header.scss';

const Header = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const onThemeSwitchChange = (checked) => {
    // this.setState({ checked });
    setTheme();
  };

  const setTheme = () => {
    let dataThemeAttribute = 'data-theme';
    let body = document.body;
    let newTheme =
      body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark';
    body.setAttribute(dataThemeAttribute, newTheme);
  };
  return (
    <header className="c-header">
      <Container>
        <Row>
          <Col md={2}>Logo</Col>
          <Col md={8}>
            <Navigation />
          </Col>
          <Col md={2}>
            <input type="checkbox" onChange={onThemeSwitchChange} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
