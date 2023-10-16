import React, {useContext} from 'react'
import SporeItem from "../SporeItem/SporeItem";
import { sporeItemsData } from "../../utils/SporeItemsData";
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
const SporeIntro: React.FC = () => {
    const globalContext = useContext(GlobalContext)

    return (
        <>
            <div className={styles.WaveSvg}></div>
            <div className={styles.SporeIntroWrapper}>
                <div className={styles.SporeIntroTitle}>
                    <h1>
                        What’s in <span>Spore</span>
                    </h1>
                    <div className={`sub-header ${styles.IntroSubTtile}`}>(not just another NFT protocol)</div>
                    <div className={`${styles.DiscoverButton} ${styles.PCDiscoverButton}`}>
                        <Link className={` button-ct`} to={`${globalContext.baseUrl}`} target={'_blank'}>
                            Discover More
                        </Link>
                        <div className={styles.GreyLiquid}></div>
                    </div>

                </div>
                <div className={styles.SporeIntroCards}>
                    {sporeItemsData.map((item, index) => (
                        <SporeItem title={item.title} content={item.content} index={index + 1} total={sporeItemsData.length}/>
                    ))}
                </div>
                <div className={`${styles.DiscoverButton} ${styles.MobileDiscoverButton}`}>
                    <Link className={` button-ct`} to={`${globalContext.baseUrl}`} target={'_blank'}>
                        Discover More
                    </Link>
                    <div className={styles.GreyLiquid}></div>
                </div>
            </div>
        </>
    )
}

export default SporeIntro