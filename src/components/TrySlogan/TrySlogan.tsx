import React from 'react';
import { ReactComponent as AdoptionSVG } from "../../assets/svg/try-adoption.svg";
import { ReactComponent as LeftMushroomSVG } from "../../assets/svg/LeftMushroom.svg";
import { ReactComponent as RightMushroom } from "../../assets/svg/right-mushroom.svg";
import styles from './index.module.scss'
const TrySlogan:React.FC = () => {
    return (
        <div className={styles.TrySloganWrapper}>
            <div className={styles.Planting}>
                <div className={styles.tag}>
                    <AdoptionSVG />
                    mass adoption
                </div>
                <div className={styles.line}>

                </div>
                <div className={styles.text}>Planting digital seeds</div>
            </div>
            <div className={styles.SporeGuide}>
                <div className={styles.text}>A <span>{ `{Spore guide}`}</span></div>
                <div className={styles.line}></div>
                <div className={styles.tag}>
                    <AdoptionSVG />
                    On-chain storage
                </div>
            </div>
            <div className={styles.DynamicContents}>
                <div className={styles.MushroomLeft}>
                    <LeftMushroomSVG />
                </div>
                <div className={styles.RightContainer}>
                    <div className={styles.tag}>
                        <AdoptionSVG />
                        On-chain storage
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <RightMushroom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrySlogan