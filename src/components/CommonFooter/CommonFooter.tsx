import React from 'react';
import { ReactComponent as BlueMushroom } from "../../assets/svg/blue-mushroom.svg";
import { ReactComponent as QuestionMushroom } from "../../assets/svg/question-mushroom.svg";
import { ReactComponent as DiscordIcon } from "../../assets/svg/discord-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/github-icon.svg";
import { ReactComponent as ContactMushroom } from "../../assets/svg/contact-mushroom.svg";
import { useNavigate } from 'react-router-dom';

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
        link: "https://docs.spore.pro/"
    },
    {
        title: "Tutorial",
        content: "Follow Along - Build a toy project, dive in with easy to follow steps and examples.",
        link: "https://docs.spore.pro/"
    },
    {
        title: "How to recipes",
        content: "Simplified Solutions - Find concise recipes to streamline your production.",
        link: "https://docs.spore.pro/"
    },
    {
        title: "Resources",
        content: "Power tools - SDK, API, Contracts, and more!",
        link: "https://docs.spore.pro/"
    },
];

const CommonFooter:React.FC = () => {
    const location = useLocation();
    const router = useNavigate();
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
                    <div className={styles.DocumentationCard} onClick={() => router('/')}>
                        <h5 className={`${styles.CardTitle}`}>Documentation</h5>
                        <div className={`${styles.CardContent} body-1`}>
                            Get started mastering Spore Protocol, from basics to building your next project.
                        </div>
                        <div className={`${styles.CardButton} button-ct`}>
                            <Link to={'https://docs.spore.pro/'}>Visit</Link>
                        </div>
                    </div>
                    <div className={`${styles.FooterCardContainer}`}>
                        {cardDataArray.map((card, index) => (
                            <div key={index} className={`${styles.CardItem}`}  onClick={() => router(card.link)}>
                                <h5 className={`${styles.CardTitle}`}>{card.title}</h5>
                                <div className={`${styles.CardContent} body-1`}>
                                    {card.content}
                                </div>
                                <div className={`${styles.CardButton} button-ct`}>
                                    <Link to={card.link}>Visit</Link>
                                </div>
                            </div>
                        ))}
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
