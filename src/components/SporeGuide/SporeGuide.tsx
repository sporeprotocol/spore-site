import React from 'react';
import styles from './index.module.scss'
import { ReactComponent as BlueSvg } from '../../assets/svg/blue-guide.svg'
import { ReactComponent as RedSvg } from '../../assets/svg/red-guide.svg'
import SporeGuideItem from "../SporeGuideItem/SporeGuideItem";
import {Link} from "react-router-dom";

const SporeGuide:React.FC = () => {
    return (
        <div className={styles.SporeGuideWrapper}>
            <h1 className={styles.SporeGuideTitle}>
                Planting Digital Seeds: A Spore Guide
            </h1>
            <p className={`${styles.SporeGuideDec} sub-header-2`}>
                Whether you're crafting a dynamic piece of code or turning a meme into an asset, we've got the perfect ecosystem for your ideas to flourish.
            </p>
            <div className={styles.SporeGuideContainer}>
                <SporeGuideItem SvgIcon={BlueSvg} title={'Spore SDK'} content={'Designed to help you build transactions, encode and decode data, and develop applications simple and efficient'} url={'https://github.com/sporeprotocol/spore-sdk'}/>
                <SporeGuideItem SvgIcon={RedSvg} title={'Spore demo'} content={'Connect your wallet, mint a spore, start your cluster'} url={'https://spore-demo.vercel.app/'}/>
            </div>
            <div className={`${styles.SporeGuideButton} button-ct`}>
                <Link to={'/guide'}>
                    Grow the Ecosystem
                </Link>
            </div>
        </div>
    )
}

export default SporeGuide