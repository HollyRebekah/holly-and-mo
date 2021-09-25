import React from 'react'

import { LinkButton } from '../../atoms/LinkButton/LinkButton'

import styles from './AccommodationCard.module.css'

export const AccommodationCard = ({ accommodation }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={accommodation.image} alt={accommodation.name} />
            </div>
            <div className={styles.infoWrapper}>
                <h4 className={styles.name}>{accommodation.name}</h4>
                <span>{`Rooms from £${accommodation.price} per night`}</span>
                <span>{`${accommodation.distance} miles to the venue`}</span>
                <LinkButton className={styles.button} text='Book now' href={accommodation.url} dark />
            </div>
        </div>
    )
}