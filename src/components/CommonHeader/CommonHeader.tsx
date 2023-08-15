import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as CloseButton } from "../../assets/svg/close.svg";
import styles from './index.module.scss'

const Header: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000 && window.innerWidth > 375);

    useEffect(() => {
        const handleResize = () => {
            console.log(window.innerWidth <= 1000)
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.CommonHeaderWrapper}>
            <div className={styles.CommonHeaderLogo}>
                <Link to={'/'} className={location.pathname === '/' ? styles.Active : ''}>SPOre Protocol</Link>
            </div>
            {isMobile ? (
                <>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button> {/* 三横线icon */}
                    {isMenuOpen && (
                        <div className={styles.MobileMenuWrappper}>
                            <div className={styles.MobileMenu}>
                                <div className={styles.MobileHeader}>
                                    <div className={styles.CommonHeaderLogo}>
                                        <Link
                                            to={'/'}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={location.pathname === '/' ? styles.Active : ''}>SPOre Protocol</Link>
                                    </div>
                                    <CloseButton onClick={() => setIsMenuOpen(false)}/>
                                </div>
                                <div className={styles.CommonHeaderNav}>
                                    <Link
                                        to={'/'}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={location.pathname === '/' ? styles.Active : ''}>Home</Link>
                                    <Link
                                        to={'/about'}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={location.pathname === '/about' ? styles.Active : ''}>About</Link>
                                    <Link
                                        to={'/guide'}
                                        onClick={() => setIsMenuOpen(false)}
                                          className={location.pathname === '/guide' ? styles.Active : ''}>Guide</Link>
                                    {/*<Link*/}
                                    {/*    to={'/github'}*/}
                                    {/*    onClick={() => setIsMenuOpen(false)}*/}
                                    {/*    className={location.pathname === '/github' ? styles.Active : ''}>Github</Link>*/}
                                </div>
                            </div>
                            <div className={styles.CommonHeaderContactUs}>Contact us</div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className={styles.CommonHeaderNav}>
                        <Link to={'/'} className={location.pathname === '/' ? styles.Active : ''}>Home</Link>
                        <Link to={'/about'} className={location.pathname === '/about' ? styles.Active : ''}>About</Link>
                        <Link to={'/guide'} className={location.pathname === '/guide' ? styles.Active : ''}>Guide</Link>
                        <Link to={'/github'} className={location.pathname === '/github' ? styles.Active : ''}>Github</Link>
                    </div>
                    <div className={styles.CommonHeaderContactUs}>Contact us</div>
                </>
            )}
        </div>
    );
};

export default Header;