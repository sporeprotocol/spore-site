import React from 'react';
import { ReactComponent as ThreeMushroom } from "../../assets/svg/three-mushroom.svg";
import { ReactComponent as DiscordIcon } from "../../assets/svg/discord-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/github-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter-icon.svg";
import { ReactComponent as ContactMushroom } from "../../assets/svg/contact-mushroom.svg";
import styles from './index.module.scss';
import {Link, useLocation} from 'react-router-dom';

const CommonFooter:React.FC = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            { (path == '/' || path == '/about') &&
                <div className={styles.SpreadCreation}>
                    <ThreeMushroom className={styles.ThreeMushroomContainer} />
                    <h1 className={styles.FooterDesc}>
                        Ready to <span> spore-adically </span> create, engage, and monetize digital assets on-chain?
                    </h1>
                    <div className={`${styles.SpreadButton} button-ct`}>
                        <Link to={'/guide'}>
                            Spread Your Creation
                        </Link>
                    </div>
                </div>
            }
            <div className={styles.ContactUsContainer}>
                <div className={styles.SocialMediaContainer}>
                    <div>
                        {/*<Link to={'/'} target={'_blank'}>*/}
                        {/*    <DiscordIcon />*/}
                        {/*</Link>*/}
                        <Link to={'https://github.com/sporeprotocol/spore-sdk'} target={'_blank'}>
                            <GithubIcon />
                        </Link>
                        {/*<Link to={'/'}>*/}
                        {/*    <TwitterIcon />*/}
                        {/*</Link>*/}

                    </div>
                    <h1>SPORE PROTOCOL</h1>
                </div>
                <div className={styles.ContactMushroom}>
                    <ContactMushroom />
                </div>
            </div>
        </>
    )
}

export default CommonFooter;
