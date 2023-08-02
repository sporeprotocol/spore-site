import React from 'react';
import styles from './index.module.scss'
import { useLocation, Link } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <div className={styles.CommonHeaderWrapper}>
            <div className={styles.CommonHeaderLogo}>
                <Link to={'/'} className={location.pathname === '/' ? styles.Active : ''}>SPOre Protocol</Link>
            </div>
            <div className={styles.CommonHeaderNav}>
                <Link to={'/'} className={location.pathname === '/' ? styles.Active : ''}>Home</Link>
                <Link to={'/about'} className={location.pathname === '/about' ? styles.Active : ''}>About</Link>
                <Link to={'/try'} className={location.pathname === '/try' ? styles.Active : ''}>Try</Link>
                <Link to={'/github'} className={location.pathname === '/github' ? styles.Active : ''}>Github</Link>
            </div>
            <div className={styles.CommonHeaderContactUs}>Contact us</div>
        </div>
    );
};

export default Header;
