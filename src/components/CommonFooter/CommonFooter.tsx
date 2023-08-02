import React from 'react';
import { ReactComponent as ThreeMushroom } from "../../assets/svg/three-mushroom.svg";
import { ReactComponent as DiscordIcon } from "../../assets/svg/discord-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/github-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter-icon.svg";
import { ReactComponent as ContactMushroom } from "../../assets/svg/contact-mushroom.svg";
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';

const CommonFooter:React.FC = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            { (path == '/' || path == '/about') &&
                <div className={styles.SpreadCreation}>
                    <ThreeMushroom />
                    <div className={styles.FooterDesc}>
                        Ready to <span> spore-adically </span> create, engage, and monetize digital assets on-chain?
                    </div>
                    <div className={styles.SpreadButton}>
                        Spread Creation
                    </div>
                </div>
            }
            <div className={styles.ContactUsContainer}>
                <div className={styles.SocialMediaContainer}>
                    <div>
                        <DiscordIcon />
                        <GithubIcon />
                        <TwitterIcon />
                    </div>
                    <p>SPORE PROTOCOL</p>
                </div>
                <div className={styles.ContactMushroom}>
                    <ContactMushroom />
                </div>
            </div>
        </>
    )
}

export default CommonFooter;
