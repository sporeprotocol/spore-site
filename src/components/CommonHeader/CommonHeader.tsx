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
                                            className={location.pathname === '/' ? styles.Active : ''}>Spore Protocol</Link>
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
                                        className={location.pathname === '/about' ? styles.Active : ''}>Why Spore</Link>
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
                            <div className={styles.CommonHeaderContactUs}>
                                <a target={'_blank'} href={'mailto:contact@spore.pro'}>
                                    Contact us
                                </a>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className={styles.CommonHeaderNav}>
                        <Link to={'/'} className={location.pathname === '/' ? styles.Active : ''}>Home</Link>
                        <Link to={'/about'} className={location.pathname === '/about' ? styles.Active : ''}>Why Spore</Link>
                        <div className={styles.DropdownMenu}>
                            <Link to={'/guide'} className={`${location.pathname === '/guide' ? styles.Active : ''} SubMenuGuide`} >
                                Guide <span className={styles.ArrowDown}>&gt;</span>
                            </Link>
                            <div className={styles.SubMenuMargin}>
                                <div className={styles.SubMenu}>
                                    <Link className={styles.SubMenuItem} to={'/sublink1'}>Spore Protocol Basics</Link>
                                    <Link className={styles.SubMenuItem} to={'/sublink2'}>Tutorial</Link>
                                    <Link className={styles.SubMenuItem} to={'/sublink3'}>How to recipes</Link>
                                    <Link className={styles.SubMenuItem} to={'/sublink3'}>development</Link>
                                </div>
                            </div>
                        </div>
                        {/*<Link to={'/github'} className={location.pathname === '/github' ? styles.Active : ''}>Github</Link>*/}
                    </div>
                    <div className={styles.CommonHeaderContactUs}>
                        <a target={'_blank'} href={'mailto:contact@spore.pro'}>
                            Contact us
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;