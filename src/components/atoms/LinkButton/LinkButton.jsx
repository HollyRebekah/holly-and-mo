import React from 'react';
import PropTypes from 'prop-types';

import styles from './LinkButton.module.css';

export const LinkButton = ({ className, text, href, target }) => {
    return (
        <div className={styles.wrapper}>
            <a className={styles.linkButton} href={href} target={target}>{text}</a>
        </div>
    )
}

LinkButton.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
};
