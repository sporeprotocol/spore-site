import React from 'react';
import { ReactComponent as TryModule } from "../../assets/svg/try-module.svg";
import styles from './index.module.scss';

const TryMain: React.FC = () => {
    return (
        <div className={styles.TryMainWrapper}>
            <div className={styles.HeadText}>Unleash the power of Spore SDK – Construct transactions with less code, more efficiency!</div>
            <div className={styles.TryModuleContainer}>
                <div className={styles.ModuleInfoContainer}>
                    <div className={styles.index}>1</div>
                    <div className={styles.title}>Spore SDK</div>
                    <div className={styles.content}>
                        <ul>
                            <li>Functions to construct transactions around spores and clusters</li>
                            <li>Functions to encode/decode data of spores/clusters</li>
                        </ul>
                    </div>
                    <div className={styles.ButtonContainer}>
                        <div className={styles.button}>Check out example</div>
                        <div className={styles.button}>Try out demo</div>
                    </div>
                </div>
                <div>
                    <TryModule />
                </div>
            </div>
            <div className={styles.TryModuleContainer}>
                <div className={styles.ModuleInfoContainer}>
                    <div className={styles.index}>1</div>
                    <div className={styles.title}>Spore SDK</div>
                    <div className={styles.content}>
                        <ul>
                            <li>Functions to construct transactions around spores and clusters</li>
                            <li>Functions to encode/decode data of spores/clusters</li>
                        </ul>
                    </div>
                    <div className={styles.ButtonContainer}>
                        <div className={styles.button}>Check out example</div>
                        <div className={styles.button}>Try out demo</div>
                    </div>
                </div>
                <div>
                    <TryModule />
                </div>
            </div>
        </div>
    )
}

export default TryMain