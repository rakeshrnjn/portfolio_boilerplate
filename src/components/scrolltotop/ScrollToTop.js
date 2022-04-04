import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../scss/scrolltotop/scrolltotop.scss';

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="c-scrolltotop cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </div>
  );
};

export default ScrollToTop;
