import React from 'react';
import { ReactComponent as BlueMushroom } from "../../assets/svg/blue-mushroom.svg";
import { ReactComponent as QuestionMushroom } from "../../assets/svg/question-mushroom.svg";
import { ReactComponent as DiscordIcon } from "../../assets/svg/discord-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/github-icon.svg";
import { ReactComponent as ContactMushroom } from "../../assets/svg/contact-mushroom.svg";
import { ReactComponent as ThreeMushroom } from "../../assets/svg/three-mushroom.svg";
import styles from './index.module.scss';
import {Link, useLocation} from 'react-router-dom';
import AboutFAQ from "../AboutFAQ/AboutFAQ.tsx";

type CardData = {
    title: string;
    content: string;
    link: string;
};

const cardDataArray: CardData[] = [
    {
        title: "Basics",
        content: "Learn Spore Fundamentals - Quickly grasp the core concepts and components.",
        link: "/"
    },
    {
        title: "Tutorial",
        content: "Follow Along - Build a toy project, dive in with easy to follow steps and examples.",
        link: "/"
    },
    {
        title: "How to recipes",
        content: "Simplified Solutions - Find concise recipes to streamline your production.",
        link: "/"
    },
    {
        title: "Resources",
        content: "Power tools - SDK, API, Contracts, and more!",
        link: "/"
    },
];

const CommonFooter:React.FC = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            { (path == '/') &&
                <div className={styles.SpreadCreation}>
                    <BlueMushroom className={styles.BlueMushroom}/>
                    <QuestionMushroom className={styles.QuestionMushroom}/>
                    <h1 className={styles.FooterDesc}>
                        Explore, Learn and Build!
                    </h1>
                    <div className={`${styles.FooterText} sub-header`}>
                        Whether you're crafting a dynamic piece of code or turning a meme into an asset, we've got the perfect ecosystem for your ideas to flourish.
                    </div>
                    <div className={styles.DocumentationCard}>
                        <h5 className={`${styles.CardTitle}`}>Documentation</h5>
                        <div className={`${styles.CardContent} body-1`}>
                            Get started mastering Spore Protocol, from basics to building your next project.
                        </div>
                        <div className={`${styles.CardButton}`}>
                            <Link to={'/'}>Visit</Link>
                        </div>
                    </div>
                    <div className={`${styles.FooterCardContainer}`}>
                        {cardDataArray.map((card, index) => (
                            <div key={index} className={`${styles.CardItem}`}>
                                <h5 className={`${styles.CardTitle}`}>{card.title}</h5>
                                <div className={`${styles.CardContent} body-1`}>
                                    {card.content}
                                </div>
                                <div className={`${styles.CardButton}`}>
                                    <Link to={card.link}>Visit</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`${styles.SpreadButton} button-ct`}>
                        <Link to={'/guide'}>
                            Start Creating
                        </Link>
                    </div>
                </div>
            }

            { (path == '/about') &&

                <div className={styles.SpreadCreation}>
                    <ThreeMushroom className={styles.ThreeMushroomContainer} />
                    <h1 className={styles.FootAboutDesc}>
                        Ready to <span> spore-adically </span> create, engage, and monetize digital assets on-chain?
                    </h1>
                    <div className={`${styles.SpreadButton} button-ct`}>
                        <Link to={'/guide'}>
                            Spread Your Creation
                        </Link>
                    </div>
                </div>
            }
            <AboutFAQ />
            <div className={styles.ContactUsContainer}>
                <div className={styles.SocialMediaContainer}>
                    <div>
                        <Link to={'/'} target={'_blank'}>
                            <DiscordIcon />
                        </Link>
                        <Link to={'https://github.com/sporeprotocol/spore-sdk'} target={'_blank'}>
                            <GithubIcon />
                        </Link>
                        <Link to={'/'}>
                            <TwitterIcon />
                        </Link>

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
