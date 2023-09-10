import React from 'react'
import { ReactComponent as WaveSvg } from '../../assets/svg/intro-bg.svg'
import SporeItem from "../SporeItem/SporeItem";
import { sporeItemsData } from "../../utils/SporeItemsData.ts";
import styles from './index.module.scss'
import {Link} from "react-router-dom";
const SporeIntro: React.FC = () => {
    return (
        <>
            <div className={styles.WaveSvg}>
                <WaveSvg/>
            </div>
            <div className={styles.SporeIntroWrapper}>
                <div className={styles.SporeIntroTitle}>
                    <h1>
                        What’s in <span>Spore</span>
                    </h1>
                    <div className={"sub-header"}>(not just another NFT protocol)</div>
                    <Link to={'/about'}>
                        <div className={`${styles.DiscoverButton} ${styles.PCDiscoverButton} button-ct`}>
                            Discover Spore
                        </div>
                    </Link>

                </div>
                <div className={styles.SporeIntroCards}>
                    {sporeItemsData.map((item, index) => (
                        <SporeItem title={item.title} content={item.content} index={index + 1} total={sporeItemsData.length} url={item.url}/>
                    ))}
                </div>
                <div className={`${styles.DiscoverButton} ${styles.MobileDiscoverButton} button-ct`}>
                    <Link to={'/about'}>
                        Discover Spore
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SporeIntro