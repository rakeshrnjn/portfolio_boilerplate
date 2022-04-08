import React from 'react';
import { Container } from 'react-bootstrap';
import SkillTile from './SkillTile';

import '../../scss/skill/skills.scss';

const Skills = () => {
  return (
    <section className="c-skills">
      <Container>
        <div>
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
