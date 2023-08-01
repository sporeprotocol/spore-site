import React from 'react';
import { ReactComponent as Colon } from "../../assets/svg/colon.svg";
import styles from './index.module.scss';

interface Props {
    title: string;
    subtitle: string;
    content: string;
    index: number;
}

const SporeItem: React.FC<Props> = ({ title, subtitle, content, index }) => {
    return (
        <div className={styles.SporeItemWrapper}>
            <div className={styles.SporeItemTitle}>
                <Colon />
                <p>{title}</p>
            </div>
            <div className={styles.SporeItemContent}>
                <p className={styles.title}>{subtitle}</p>
                <div className={styles.content}>
                    {content.includes('<') ? <div dangerouslySetInnerHTML={{ __html: content }} /> : <p>{content}</p>}
                </div>
                <p className={styles.index}>{index}</p>
            </div>
        </div>
    )
}

export default SporeItem
