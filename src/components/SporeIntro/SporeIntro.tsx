import React, {useContext} from 'react'
import { ReactComponent as WaveSvg } from '../../assets/svg/intro-bg.svg'
import SporeItem from "../SporeItem/SporeItem";
import { sporeItemsData } from "../../utils/SporeItemsData";
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
const SporeIntro: React.FC = () => {
    const globalContext = useContext(GlobalContext)

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
                    <Link to={`${globalContext.baseUrl}`} target={'_blank'}>
                        <div className={`${styles.DiscoverButton} ${styles.PCDiscoverButton} button-ct`}>
                            Discover More
                        </div>
                    </Link>

                </div>
                <div className={styles.SporeIntroCards}>
                    {sporeItemsData.map((item, index) => (
                        <SporeItem title={item.title} content={item.content} index={index + 1} total={sporeItemsData.length}/>
                    ))}
                </div>
                <div className={`${styles.DiscoverButton} ${styles.MobileDiscoverButton} button-ct`}>
                    <Link to={`${globalContext.baseUrl}`} target={'_blank'}>
                        Discover More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SporeIntro