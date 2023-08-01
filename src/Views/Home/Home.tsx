import React from 'react'
import styles from './index.module.scss'
import HomeSlogan from "../../components/HomeSlogan/HomeSlogan";
import SporeIntro from "../../components/SporeIntro/SporeIntro";
import SporeGuide from "../../components/SporeGuide/SporeGuide.tsx";
import CommonFooter from "../../components/CommonFooter/CommonFooter.tsx";

const Home: React.FC = () => {
    return (
        <>
            <div className={styles.HomePageWrapper}>
                <HomeSlogan />
                <SporeIntro />
                <div className={styles.tmp}>

                </div>
                <SporeGuide />
            </div>
            <CommonFooter />
        </>
    )
}

export default Home