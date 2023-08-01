import React from 'react';
import { ReactComponent as BlueMushroom } from '../../assets/svg/blue-mushroom.svg';
import { ReactComponent as LoveMushroom } from '../../assets/svg/Love-mushroom.svg';
import { ReactComponent as QuestionMushroom } from '../../assets/svg/question-mushroom.svg'
import styles from './index.module.scss'

const HomeSlogan: React.FC = () => {
    return (
        <div className={styles.SloganWrapper}>
            <div className={styles.ColonContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M25 12C25 18.6274 19.6274 24 13 24C6.37258 24 0 18.6274 0 12C0 5.37258 6.37258 0 13 0C19.6274 0 25 5.37258 25 12Z" fill="#FFC43B"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M25 12C25 18.6274 19.6274 24 13 24C6.37258 24 0 18.6274 0 12C0 5.37258 6.37258 0 13 0C19.6274 0 25 5.37258 25 12Z" fill="#FFC43B"/>
                </svg>
            </div>
            <div className={styles.TextContainer}>
                <span className={styles.CreateText}>Create, </span>
                <span className={styles.EngageText}>Engage, </span> and
                <span className={styles.MonetizeText}> Monetize</span>
                "NFTs", "Your Digital Assets", "Anything" <span className={styles.PurpleFont}>On-Chain</span>
                <div className={styles.BlueMushroom}>
                    <BlueMushroom />
                </div>
                <div className={styles.LoveMushroom}>
                    <LoveMushroom />
                </div>
                <div className={styles.QuestionMushroom}>
                    <QuestionMushroom />
                </div>
            </div>
            <div className={styles.IntroContainer}>
                The On-Chain protocol that redefine the way your asset is utilized, traded, and integrated with decentralized applications. Think big, engage more, and monetize your niche with Spore Protocol.
            </div>
            <div className={styles.SpreadButton}>
                Spread Your Creation
            </div>
        </div>
    )
}

export default HomeSlogan