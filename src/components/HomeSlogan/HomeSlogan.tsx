import React, {useEffect} from 'react';
import { ReactComponent as BlueMushroom } from '../../assets/svg/blue-mushroom.svg';
import { ReactComponent as LoveMushroom } from '../../assets/svg/Love-mushroom.svg';
// import { ReactComponent as QuestionMushroom } from '../../assets/svg/question-mushroom.svg'
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import Prism from 'prismjs';

const HomeSlogan: React.FC = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, [])
    return (
        <div className={styles.SloganWrapper}>
            <div className={styles.TextWrapper}>
                <div className={styles.TextContainer}>
                    <h1>
                        {/*<div className={styles.ColonContainer}>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">*/}
                        {/*        <path d="M25 12C25 18.6274 19.6274 24 13 24C6.37258 24 0 18.6274 0 12C0 5.37258 6.37258 0 13 0C19.6274 0 25 5.37258 25 12Z" fill="#FFC43B"/>*/}
                        {/*    </svg>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">*/}
                        {/*        <path d="M25 12C25 18.6274 19.6274 24 13 24C6.37258 24 0 18.6274 0 12C0 5.37258 6.37258 0 13 0C19.6274 0 25 5.37258 25 12Z" fill="#FFC43B"/>*/}
                        {/*    </svg>*/}
                        {/*</div>*/}
                        Create, Spread, and Monetize
                    </h1>
                    <div className={styles.AnimationText}>
                        <h1>
                        <span>
                            <span className={styles.TextContent}>Your NFT</span>
                            <span className={styles.TextBottomBg}></span>
                        </span> <br/>
                            <span>
                            <span className={styles.TextContent}>Anything</span>
                            <span className={styles.TextBottomBg}></span>
                        </span> <br/>
                            <span>
                            <span className={styles.TextContent}>Digital Assets</span>
                            <span className={styles.TextBottomBg}></span>
                        </span> <br/>

                        </h1>
                        <h1>
                        <span>
                            <span className={styles.TextContent}>Your NFT</span>
                            <span className={styles.TextBottomBg}></span>
                        </span> <br/>
                            <span>
                            <span className={styles.TextContent}>Anything</span>
                            <span className={styles.TextBottomBg}></span>
                        </span> <br/>
                            <span>
                            <span className={styles.TextContent}>Digital Assets</span>
                            <span className={styles.TextBottomBg}></span>
                        </span> <br/>

                        </h1>
                    </div>
                    <h1 className={styles.PurpleFont}>on chain</h1>
                    {/*<div className={styles.BlueMushroom}>*/}
                    {/*    <BlueMushroom />*/}
                    {/*</div>*/}
                    {/*<div className={styles.LoveMushroom}>*/}
                    {/*    <LoveMushroom />*/}
                    {/*</div>*/}
                    {/*<div className={styles.QuestionMushroom}>*/}
                    {/*    <QuestionMushroom />*/}
                    {/*</div>*/}
                </div>
                <div className={`${styles.IntroContainer} sub-header`}>
                    The On-Chain protocol that redefine the way your asset is utilized, traded, and integrated with decentralized applications. Think big, engage more, and monetize your niche with Spore Protocol.
                </div>
                <div className={`${styles.SpreadButton} button-ct`}>
                    <Link to={'/guide'}>
                        Start Creating
                    </Link>
                </div>
            </div>
            <div className={`${styles.CodeWrapper} body-1`}>
                <LoveMushroom className={styles.LoveMushroom}/>
                <BlueMushroom className={styles.BlueMushroom}/>
                <pre>
                    <code className="language-javascript">
                        {
`
import { createSpore, predefinedSporeConfigs } from '@spore-sdk/core';
 import { createSecp256k1Wallet, fetchLocalImage } from './helpers'; <

(async function main() {
  const config = predefinedSporeConfigs.Aggron4;
  const wallet = createSecp256k1Wallet('0xc153ee57dc8ae3dac3495c828d6f8c3fef6b1d0c74fc31101c064137b3269d6d', config);

  const { txSkeleton } = await createSpore({
    data: {
      contentType: 'image/jpeg',
      content: await fetchLocalImage('./image.jpg'),
    },
    toLock: wallet.lock,
    fromInfos: [wallet.address],
    config,
});
                              `
                        }
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default HomeSlogan