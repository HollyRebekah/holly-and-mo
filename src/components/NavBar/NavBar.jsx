import React from 'react';

import { useMedia } from 'use-media';

import styles from './NavBar.module.css'

export const NavBar = () => {
    const isMobile = useMedia({maxWidth: '600px'})

    const renderNavBar = () => <div>Nav bar</div>

    return (
        <div className={styles.navBar}>
            {isMobile ? 'Burger Icon' : renderNavBar()}
        </div>
    )
}




