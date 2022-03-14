import React from 'react';
import { Link } from 'react-scroll';

import '../../scss/navigation/navigation.scss';

const Navigation = () => {
  return (
    <nav className="current">
      <ul className="c-navigation">
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="service" spy={true} smooth={true}>
            Service
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
