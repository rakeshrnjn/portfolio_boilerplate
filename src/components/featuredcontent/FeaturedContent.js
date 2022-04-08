import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeaturedImage from '../../assets/img/hero/smart_1920.jpg';

import '../../scss/featuredcontent/featuredcontent.scss';

const FeaturedContent = (props) => {
  return (
    <Container className="c-featured-content">
      <Row>
        <Col md={5}>
          <picture className="featured-image">
            <source media="(min-width:650px)" srcSet={FeaturedImage} />
            <source media="(min-width:465px)" srcSet={FeaturedImage} />
            <img src={FeaturedImage} alt="Flowers" className="" />
          </picture>
        </Col>
        <Col md={7}>
          <h2>About section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus. Totam nihil similique a repellat minus dolor amet
            quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
            minima animi.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedContent;
