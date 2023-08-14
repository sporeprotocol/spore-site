import React, { ReactElement } from 'react';
import styles from './index.module.scss';

interface Props {
    svg: ReactElement;
    title: string;
    subtitle: string;
    content: string;
    index: number;
}

const AboutIntroItem: React.FC<Props> = ({ svg, title, subtitle, content, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={isEven ? styles.evenWrapper : styles.oddWrapper}>
            <div className={styles.svgWrapper}>
                {svg}
            </div>
            <div className={styles.textWrapper}>
                <div className={`${styles.title} sub-header`}>{title}</div>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <p className={`${styles.content} body-1`}>{content}</p>
            </div>
        </div>
    );
}

export default AboutIntroItem;
