import React from 'react';
import { Container } from 'react-bootstrap';
import HeroImage from '../../assets/img/hero/smart_1920.jpg';

import '../../scss/hero/hero.scss';

const Hero = (props) => {
  return (
    <div className="c-hero">
      {/* <picture className="hero-image">
        <source media="(min-width:650px)" srcSet={HeroImage} />
        <source media="(min-width:465px)" srcSet={HeroImage} />
        <img src={HeroImage} alt="Flowers" className="" />
      </picture> */}
      <div className="parallax"></div>
      <div className="hero-text_wrapper">
        <Container className="hero-text">
          <p className="hero-text-subtitle">Hello! I am</p>
          <h1 className="hero-text-title">Rakesh Ranjan</h1>
          <p className="hero-text-mono">
            Front end Developer
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
