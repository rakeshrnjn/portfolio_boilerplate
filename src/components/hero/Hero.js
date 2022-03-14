import React from 'react';
import { Container } from 'react-bootstrap';
import HeroImage from '../../assets/img/hero/smart_1920.jpg';

import '../../scss/hero/hero.scss';

const Hero = (props) => {
  return (
    <div className="c-hero">
      <picture className="hero-image">
        <source media="(min-width:650px)" srcset={HeroImage} />
        <source media="(min-width:465px)" srcset={HeroImage} />
        <img src={HeroImage} alt="Flowers" className="" />
      </picture>
      <div className="hero-text_wrapper">
        <Container className="hero-text">
          <h1 className="o-text-heading0">Hey! I'm Rakesh Ranjan.</h1>
          <p className="o-text-description">
            I am a current graduate student at Northeastern University pursing
            Masters in Informations System majoring in Software Development. I
            have previously worked as a Linux System Administration, DevOps
            Engineer & as a Fullstack developer holding a total of 5 years of
            experience in Mumbai, India.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
