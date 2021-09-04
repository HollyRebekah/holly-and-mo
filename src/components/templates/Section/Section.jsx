import React from 'react'
import PropTypes from 'prop-types';

import styles from './Section.module.css'

export const Section = ({ children, dark }) => <section className={dark ? styles.sectionDark : styles.section}>{children}</section>

Section.propTypes = {
    children: PropTypes.element.isRequired,
    dark: PropTypes.bool
}