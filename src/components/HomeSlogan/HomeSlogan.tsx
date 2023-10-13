import React, { useEffect } from 'react';
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import Prism from 'prismjs';
import './code.scss'

// @ts-ignore
const HomeSlogan: React.FC = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, [])


    return (
        <div className={styles.SloganWrapper}>
            <div className={styles.TextWrapper}>
                <div className={styles.TextContainer}>
                    <h1>
                        Monetize
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

                    <Link className={styles.PCButton} to={'/guide'}>
                        <div className={`${styles.SpreadButton} button-ct`}>
                            {`Explore Documentation >`}
                        </div>
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
            <Link className={styles.MobileButton} to={'/guide'}>
                <div className={`${styles.SpreadButton} button-ct`}>
                    {`Explore Documentation >`}
                </div>
            </Link>
        </div>
    )
}

export default HomeSlogan