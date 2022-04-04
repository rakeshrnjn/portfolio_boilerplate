import React from 'react';
import { Container } from 'react-bootstrap';

import '../../scss/richtext/richtext.scss';

const RichText = (props) => {
  return (
    <Container className="c-richtext">
      <h2>RichText section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </p>
    </Container>
  );
};

export default RichText;
