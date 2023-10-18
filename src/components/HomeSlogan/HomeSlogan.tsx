import React, {useContext, useState, useEffect} from 'react';
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import Prism from 'prismjs';
import './code.scss'
import GlobalContext from "../../context/GlobalContext";

// @ts-ignore
const HomeSlogan: React.FC = () => {
    const globalContext = useContext(GlobalContext)
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const words = ["Craft", "Secure", "Distribute", "Monetize"];
    const typingSpeed = 200;
    const pauseAfterTyping = 2000;

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    useEffect(() => {
        let timer: any;

        if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayText(prevText => prevText.substring(0, prevText.length - 1));
            }, typingSpeed);
        } else if (displayText.length < words[textIndex].length) {
            timer = setTimeout(() => {
                setDisplayText(prevText => prevText + words[textIndex][prevText.length]);
            }, typingSpeed);
        } else {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, pauseAfterTyping); // 打完一个单词后，停顿2秒
        }

        if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setTextIndex(prevIndex => (prevIndex + 1) % words.length);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [displayText, textIndex, isDeleting]);

    return (
        <div className={styles.SloganWrapper}>
            <div className={styles.TextWrapper}>
                <div className={styles.TextContainer}>
                    <h1 className={styles.AnimationH1}>
                        {displayText}
                    </h1>
                    <div className={styles.AnimationText}>
                        <h1>
                            On-Chain Artifact
                            {/*<span>*/}
                            {/*  <span className={styles.TextContent}>{text}</span>*/}
                            {/*  <span className={styles.TextBottomBg}></span>*/}
                            {/*</span>*/}
                        </h1>
                    </div>
                    <h1 className={styles.PurpleFont}>with Spore Protocol</h1>
                </div>
                <div className={`${styles.IntroContainer} body-1`}>
                    Spore Protocol infuses digital assets with enduring value backed by tokenomics, redeemable at any time. Ensures true on-chain ownership, creative freedom and frictionless interaction experience.
                </div>

                    <Link className={styles.PCButton} to={`${globalContext.baseUrl}`} target={'_blank'}>
                        <div className={`${styles.SpreadButton} button-ct`}>
                            {`Explore Documentation >`}
                        </div>
                        <div className={styles.BlackLiquid}></div>

                    </Link>

            </div>
            <div className={`${styles.CodeWrapper}`}>
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
                            `import { createSpore } from '@spore-sdk/core'
await createSpore({
  data: {
    contentType:'image/jpeg',
    content: await fetchLocalImage('./image.jpg'),
  },
  toLock: wallet.lock,
  fromInfos: [wallet.address], 
})`
                        }
                    </code>
                </pre>
                </div>
            </div>
            <div className={styles.MobileButton}>
                <Link to={`${globalContext.baseUrl}`}>
                    <div className={`${styles.SpreadButton} button-ct`}>
                        {`Explore Documentation >`}
                    </div>
                </Link>
                <div className={styles.BlackLiquid}></div>
            </div>
        </div>
    )
}

export default HomeSlogan