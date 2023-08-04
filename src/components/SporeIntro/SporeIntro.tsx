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
                    <div className={styles.DiscoverButton}>
                        Discover Spore
                    </div>
                </div>
                <div className={styles.SporeIntroCards}>
                    {sporeItemsData.map((item, index) => (
                        <SporeItem title={item.title} content={item.content} index={index + 1} total={sporeItemsData.length} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SporeIntro