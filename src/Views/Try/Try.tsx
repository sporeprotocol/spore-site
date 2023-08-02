import React from 'react'
import TrySlogan from "../../components/TrySlogan/TrySlogan.tsx";
import styles from './index.module.scss';
import TryMain from "../../components/TryMain/TryMain.tsx";
import CommonFooter from "../../components/CommonFooter/CommonFooter.tsx";

const Try: React.FC = () => {
    return (
        <div className={styles.TryWrapper}>
            <TrySlogan />
            <TryMain />
            <CommonFooter />
        </div>
    )
}

export default Try