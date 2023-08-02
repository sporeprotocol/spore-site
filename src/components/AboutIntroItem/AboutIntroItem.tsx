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
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
                <p className={styles.content}>{content}</p>
            </div>
        </div>
    );
}

export default AboutIntroItem;
