import React from 'react';
import styles from './index.module.scss';
import HomeSlogan from "../../components/HomeSlogan/HomeSlogan";
import SporeIntro from "../../components/SporeIntro/SporeIntro";
import SporeGuide from "../../components/SporeGuide/SporeGuide.tsx";
import CommonFooter from "../../components/CommonFooter/CommonFooter.tsx";
import { ReactComponent as Star } from "../../assets/svg/star.svg";

const SvgItem: React.FC = () => (
    <div className={styles.SvgItem}>
        <Star />
        Meme
    </div>
);

const SVG_ITEM_COUNT = 15;

const Home: React.FC = () => {
    return (
        <>
            <div className={styles.HomePageWrapper}>
                <HomeSlogan />
                <SporeIntro />
                <div className={styles.MemeContainer}>
                    <div className={styles.SvgContainer}>
                        {Array.from({ length: SVG_ITEM_COUNT * 2 }).map((_, idx) => <SvgItem key={idx} />)}
                    </div>
                    <div className={styles.MemeBackground}></div>
                    <div className={styles.SvgContainer}>
                        {Array.from({ length: SVG_ITEM_COUNT * 2 }).map((_, idx) => <SvgItem key={idx} />)}
                    </div>
                </div>
                <SporeGuide />
            </div>
            <CommonFooter />
        </>
    )
}

export default Home;
