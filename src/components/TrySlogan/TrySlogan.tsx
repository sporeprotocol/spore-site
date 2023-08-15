import React from 'react';
import { ReactComponent as AdoptionSVG } from "../../assets/svg/try-adoption.svg";
import styles from './index.module.scss'
const TrySlogan:React.FC = () => {
    return (
        <div className={styles.TrySloganWrapper}>
            <div className={styles.Planting}>
                <h3 className={styles.tag}>
                    <AdoptionSVG />
                    mass adoption
                </h3>
                <div className={styles.line}>

                </div>
                <h1 className={styles.text}>Planting digital seeds</h1>
            </div>
            <div className={styles.SporeGuide}>
                <h1 className={styles.text}>A <span>{ `{Spore guide}`}</span></h1>
                <div className={styles.line}></div>
                <h3 className={styles.tag}>
                    <AdoptionSVG />
                    Dynamic contents
                </h3>
            </div>
            <div className={styles.mobileTitle}>
                Planting digital forests –
                    A {"{"}<span>{`Spore guide`}</span>{"}"}
            </div>
        </div>
    )
}

export default TrySlogan