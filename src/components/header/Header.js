import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../navigation/Navigation';

import '../../scss/header/header.scss';

const Header = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [headerType, setHeaderType] = useState("initial")

const listenScrollEvent = (event) => {
  if (window.scrollY < 73) {
    return setHeaderType("initial")
  } else if (window.scrollY > 70) {
    return setHeaderType("scrolled")
  } 
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

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
    <header className={`c-header ${headerType}`}>
      <Container>
        <Row>
          <Col md={2}>Logo</Col>
          <Col md={2}></Col>
          <Col md={8}>
            <Navigation />
          </Col>
          {/* <Col md={2}>
            <input type="checkbox" onChange={onThemeSwitchChange} />
          </Col> */}
        </Row>
      </Container>
    </header>
  );
};

export default Header;
