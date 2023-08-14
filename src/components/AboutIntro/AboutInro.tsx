import React from 'react';
import { AboutIntroItemData } from '../../utils/AboutIntroItemData';
import AboutIntroItem from "../AboutIntroItem/AboutIntroItem.tsx";
import styles from './index.module.scss';

const AboutIntro: React.FC = () => {
    return (
        <div className={styles.AboutIntroWrapper}>
            <h2 className={styles.AboutIntroTitle}>
                Let your <span className={styles.ImaginationText}> imagination </span> grow wild and create ...
            </h2>
            {AboutIntroItemData.map((item, index) => (
                <AboutIntroItem
                    key={index}
                    svg={React.createElement(item.svg)}
                    title={item.title}
                    subtitle={item.subtitle}
                    content={item.content}
                    index={index}
                />
            ))}
        </div>
    )
}

export default AboutIntro;
