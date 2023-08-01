import React from 'react';
import styles from './index.module.scss'
import {Link} from "react-router-dom";
// import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className={styles.CommonHeaderWrapper}>
            <div className={styles.CommonHeaderLogo}>
                <Link to={'/'}>SPOre Protocol</Link>
            </div>
            <div className={styles.CommonHeaderNav}>
                <Link to={'/'} className={styles.Active}>Home</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Try</Link>
                <Link to={'/'}>Github</Link>
            </div>
            <div className={styles.CommonHeaderContactUs}>Contact us</div>
        </div>
    );
};

export default Header;
