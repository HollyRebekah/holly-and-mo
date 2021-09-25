import React from 'react'

import { AccommodationCard } from '../../molecules/AccommodationCard/AccommodationCard'
import premierInn from '../../../images/premier-inn.jpg'
import cottons from '../../../images/cottons.jpg'
import rylands from '../../../images/rylands-farmhouse.jpg'

import styles from './Accommodation.module.css'

export const Accommodation = () => {
    const accommodationData = [{ image: premierInn, name: 'Premier Inn - Manchester Airport M56', price: 58, distance: 4, url: 'https://www.premierinn.com/gb/en/hotels/england/greater-manchester/manchester/manchester-airport-m56j6-runger-lane-north.html?cid=GLBC_MANAIT' }, { image: cottons, name: 'Cottons Hotel & Spa', price: 175, distance: 3.5, url: 'https://www.cottonshotel.co.uk/' }, { image: rylands, name: 'Rylands Farmhouse.', price: 70, distance: 4, url: 'https://direct-book.com/properties/rylandsfarmdirect' }]

    return (
        <section id='accommodation'>
            <h3 className={styles.title}>Accommodation</h3>
            <p className={styles.text}>Due to Stock Farm's close proximity to Manchester airport, there are plenty of hotels close by for those travelling from further afield. There are also air bnbs around Altrincham and Chesire East which would only be a short drive away. Here are a select few of the closest hotels.</p>
            <div className={styles.cardWrapper}>
                {accommodationData.map(accommodation => <AccommodationCard accommodation={accommodation} />)}
            </div>
        </section>
    )
}