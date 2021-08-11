import React, { useState } from 'react';

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
        <span>Details</span>
        <span>Destination</span>
        <span>Getting There</span>
        <span>Accommodation</span>
        <span>RSVP</span>
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
