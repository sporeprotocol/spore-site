import React from 'react'
import { ReactComponent as WaveSvg } from '../../assets/svg/intro-bg.svg'
import SporeItem from "../SporeItem/SporeItem";
import { sporeItemsData } from "../../utils/SporeItemsData.ts";
import styles from './index.module.scss'
const SporeIntro: React.FC = () => {
    return (
        <>
            <WaveSvg />
            <div className={styles.SporeIntroWrapper}>
                <div className={styles.SporeIntroTitle}>
                    <div>
                        What’s in <span>Spore</span>
                    </div>
                    <p>(not just another NFT protocol)</p>
                </div>
                <div>
                    {sporeItemsData.map((item, index) => (
                        <SporeItem title={item.title} subtitle={item.subtitle} content={item.content} index={index + 1} />
                    ))}
                </div>
                <div className={styles.DiscoverButton}>
                    Discover Spore
                </div>
            </div>
        </>
    )
}

export default SporeIntro