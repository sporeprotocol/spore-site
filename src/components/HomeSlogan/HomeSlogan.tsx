import React from 'react';
import { ReactComponent as BlueMushroom } from '../../assets/svg/blue-mushroom.svg';
import { ReactComponent as LoveMushroom } from '../../assets/svg/Love-mushroom.svg';
// import { ReactComponent as QuestionMushroom } from '../../assets/svg/question-mushroom.svg'
import styles from './index.module.scss'
import {Link} from "react-router-dom";

const HomeSlogan: React.FC = () => {
    return (
        <div className={styles.SloganWrapper}>
            <div className={styles.TextContainer}>
                <h1>
                    <div className={styles.ColonContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M25 12C25 18.6274 19.6274 24 13 24C6.37258 24 0 18.6274 0 12C0 5.37258 6.37258 0 13 0C19.6274 0 25 5.37258 25 12Z" fill="#FFC43B"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M25 12C25 18.6274 19.6274 24 13 24C6.37258 24 0 18.6274 0 12C0 5.37258 6.37258 0 13 0C19.6274 0 25 5.37258 25 12Z" fill="#FFC43B"/>
                        </svg>
                    </div>
                    Create, Spread, and Monetize
                </h1>
                <div className={styles.AnimationText}>
                    <h1>
                        <span>Your NFTs</span> <br/>
                        <span>Anything</span> <br/>
                        <span className={styles.DigitalAssets}>Digital Assets</span>
                    </h1>
                </div>
                <h1 className={styles.PurpleFont}>on chain</h1>
                <div className={styles.BlueMushroom}>
                    <BlueMushroom />
                </div>
                <div className={styles.LoveMushroom}>
                    <LoveMushroom />
                </div>
                {/*<div className={styles.QuestionMushroom}>*/}
                {/*    <QuestionMushroom />*/}
                {/*</div>*/}
            </div>
            <div className={`${styles.IntroContainer} sub-header`}>
                The On-Chain protocol that redefine the way your asset is utilized, traded, and integrated with decentralized applications. Think big, engage more, and monetize your niche with Spore Protocol.
            </div>
            <div className={`${styles.SpreadButton} button-ct`}>
                <Link to={'/guide'}>
                    Spread Your Creation
                </Link>
            </div>
        </div>
    )
}

export default HomeSlogan