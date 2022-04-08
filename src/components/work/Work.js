import React from 'react';
import { Container } from 'react-bootstrap';
import WorkTile from './WorkTile';

import '../../scss/work/work.scss';

const Work = () => {
  return (
    <section className="c-work">
      <Container>
        <div>
          <WorkTile />
          <WorkTile />
          <WorkTile />
          <WorkTile />
          <WorkTile />
          <WorkTile />
          <WorkTile />
        </div>
      </Container>
    </section>
  );
};

export default Work;
