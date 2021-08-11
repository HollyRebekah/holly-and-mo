import React, { useState } from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';
import { useMedia } from 'use-media';

import { ReactComponent as BurgerMenuIcon } from '../../../svgs/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../../../svgs/cancel-icon.svg';

import styles from './NavBar.module.css';

export const NavBar = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false);

  const isMobile = useMedia({ maxWidth: '600px' });

  const renderNavBar = () => {
    return (
      <div className={styles.navBarLinks}>
        <Link
          className={styles.navLink}
          activeClass="active"
          to="details"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Details
        </Link>
        <Link
          className={styles.navLink}
          activeClass="active"
          to="destination"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Destination
        </Link>

        <Link
          className={styles.navLink}
          activeClass="active"
          to="getting-there"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Getting There
        </Link>
        <Link
          className={styles.navLink}
          activeClass="active"
          to="accommodation"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Accommodation
        </Link>
        <Link
          className={styles.navLink}
          activeClass="active"
          to="rsvp"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          RSVP
        </Link>
      </div>
    );
  };

  return (
    <div className={showMobileLinks ? styles.navBarMobile : styles.navBar}>
      {isMobile ? (
        <>
          {!showMobileLinks ? (
            <button
              className={styles.burgerMenuButton}
              onClick={() => setShowMobileLinks(true)}
            >
              <BurgerMenuIcon className={styles.burgerMenuIcon} />
            </button>
          ) : (
            <>
              <button
                className={styles.closeButton}
                onClick={() => setShowMobileLinks(false)}
              >
                <CloseIcon className={styles.closeButtonIcon} />
              </button>
              {renderNavBar()}
            </>
          )}
        </>
      ) : (
        renderNavBar()
      )}
    </div>
  );
};
