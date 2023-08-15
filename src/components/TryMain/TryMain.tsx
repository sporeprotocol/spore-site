import React from 'react';
import { ReactComponent as TryModule } from "../../assets/svg/try-module.svg";
import { ReactComponent as Cube} from "../../assets/svg/cube.svg";
import styles from './index.module.scss';
import {Link} from "react-router-dom";

const TryMain: React.FC = () => {
    return (
        <div className={styles.TryMainWrapper}>
            <div className={styles.HeadText}>Unleash the power of Spore SDK – Construct transactions with less code, more efficiency!</div>
            <div className={styles.TryModuleContainer}>
                <div className={styles.ModuleInfoContainer}>
                    <div className={styles.index}>01</div>
                    <div className={styles.title}>Spore SDK</div>
                    <div className={styles.innerSvg}>
                        <TryModule />
                    </div>
                    <div className={styles.content}>
                        The software development kit (SDK) designed to help you build transactions, encode and decode data, and develop applications simple and efficient
                    </div>
                    <div className={styles.ButtonContainer}>
                        <div className={`${styles.button} button-ct`}>
                            <Link to={'/doc/SporeSecp256k1EXAMPLE'}>
                                Try out Example
                            </Link>
                        </div>
                        <div className={`${styles.button} button-ct`}>
                            <Link target="_blank" to={'https://github.com/sporeprotocol/spore-sdk/tree/beta/docs/recipes'}>
                                Test the Recipes
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.outsideSvg}>
                    <TryModule />
                </div>
            </div>
            <div className={styles.TryModuleContainer}>
                <div className={styles.ModuleInfoContainer}>
                    <div className={styles.index}>02</div>
                    <div className={styles.title}>Spore protocol demo</div>
                    <div className={styles.innerSvg}>
                        <Cube />
                    </div>
                    <div className={styles.content}>
                        Connect your wallet, mint a spore, start your cluster
                    </div>
                    <div className={styles.ButtonContainer}>
                        <div className={`${styles.button} button-ct`}>
                            <Link target="_blank" to={'https://spore-demo.vercel.app/'}>
                                Let's Go
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.outsideSvg}>
                    <Cube />
                </div>
            </div>
        </div>
    )
}

export default TryMain