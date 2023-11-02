import React, {useEffect, useState} from 'react';
import { ReactComponent as MushroomBaby } from '../../assets/svg/MushroomBaby.svg';
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import Prism from 'prismjs';
import './code.scss'

// @ts-ignore
const HomeSlogan: React.FC = () => {

    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);
    const texts = ['Your NFT', 'Anything', 'Digital Assets'];

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!deleting && charIndex < texts[textIndex].length) {
                setText((prev) => prev + texts[textIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (!deleting && charIndex === texts[textIndex].length) {
                setTimeout(() => {
                    setDeleting(true);
                }, 1000);
            } else if (deleting && charIndex > 0) {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (deleting && charIndex === 0) {
                setDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        }, deleting ? 100 : 100);
        return () => clearTimeout(timeout);
    }, [textIndex, charIndex, deleting]);

    return (
        <div className={styles.SloganWrapper}>
            <div className={styles.TextWrapper}>
                <div className={styles.TextContainer}>
                    <h1>
                        Create, Spread, and Monetize
                    </h1>
                    <div className={styles.AnimationText}>
                        <h1>
                            <span>
                              <span className={styles.TextContent}>{text}</span>
                              <span className={styles.TextBottomBg}></span>
                            </span>
                        </h1>
                    </div>
                    <h1 className={styles.PurpleFont}>on chain</h1>
                </div>
                <div className={`${styles.IntroContainer} body-1`}>
                    The On-Chain protocol that redefine the way your asset is utilized, traded, and integrated with decentralized applications. Think big, engage more, and monetize your niche with Spore Protocol.
                </div>

                    <Link className={styles.PCButton} to={'https://docs.spore.pro/'}>
                        <div className={`${styles.SpreadButton} button-ct`}>
                            {`Explore Documentation >`}
                        </div>
                    </Link>

            </div>
            <div className={`${styles.CodeWrapper}`}>
                <MushroomBaby className={`${styles.MushroomBaby}`}/>
                <div className={`${styles.CodeArea} body-1`}>
                    <div  className={styles.FileName}>index.js</div>
                    <pre>
                        <div className={styles.LineNumber}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                        </div>
                    <code className="language-javascript">
                        {
                            `await createSpore({
    data: {
        contentType:'image/jpeg',
        content: await fetchLocalImage('./image.jpg'),
    },
    toLock: wallet.lock,
    fromInfos: [wallet.address], 
    config,
});`
                        }
                    </code>
                </pre>
                </div>
            </div>
            <Link className={styles.MobileButton} to={'https://docs.spore.pro/'}>
                <div className={`${styles.SpreadButton} button-ct`}>
                    {`Explore Documentation >`}
                </div>
            </Link>
        </div>
    )
}

export default HomeSlogan