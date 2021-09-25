import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './LinkButton.module.css';

export const LinkButton = ({ className, text, href, target, dark }) => {
    return (
        <div className={classNames(className, dark ? classNames(styles.wrapper, styles.wrapperDark) : styles.wrapper)}>
            <a className={dark ? classNames(styles.linkButton, styles.linkButtonDark) : styles.linkButton} href={href} target={target}>{text}</a>
        </div>
    )
}

LinkButton.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    dark: PropTypes.bool
};

LinkButton.defaultProps = {
    dark: false
}
