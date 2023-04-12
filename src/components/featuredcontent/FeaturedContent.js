import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeaturedImage from '../../assets/img/me/professional_shot.jpg';

import '../../scss/featuredcontent/featuredcontent.scss';

const FeaturedContent = (props) => {
  return (
    <Container className="c-featured-content">
      <Row>
        <Col md={6} className="c-featured-content_left">
          <picture className="featured-image">
            <source media="(min-width:650px)" srcSet={FeaturedImage} />
            <source media="(min-width:465px)" srcSet={FeaturedImage} />
            <img src={FeaturedImage} alt="Flowers" className="" />
          </picture>
        </Col>
        <Col md={6} className="c-featured-content_right">
          <h2 className='o-text-heading2'>About section</h2>
          <p className='o-text-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus. Totam nihil similique a repellat minus dolor amet
            quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
            minima animi.
          </p>

          <Row>
            <Col md={5}>
          <p className='o-text-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus.
          </p>
            </Col>
            <Col md={7}>
              <button>Download</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedContent;
