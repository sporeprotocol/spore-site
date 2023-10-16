import React, {useState, useEffect, useContext} from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as DocumentMushroom } from "../../assets/svg/DocumentMushroom.svg";
import { ReactComponent as LightHeaderIcon } from "../../assets/svg/spore-site-logo-light.svg";
import { ReactComponent as PCheaderIcon } from "../../assets/svg/spore-site-logo-dark.svg";
import GithubIcon from '../../assets/img/github.png';
import DiscordIcon from '../../assets/img/discord.png';
import MailIcon from '../../assets/img/mail.png';
import HeaderMenuIcon from '../../assets/img/HeaderMenuIcon.png';
import MenuCloseIcon from '../../assets/img/menu-close-btn.png';
import styles from './index.module.scss';
import GlobalContext from "../../context/GlobalContext";

const Header: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280 && window.innerWidth > 375);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
    const [isDarkBackground, setIsDarkBackground] = useState(true);
    const globalContext = useContext(GlobalContext)

    const BOUNDARIES = {
        LARGE: {
            DARK_START: 0,
            DARK_END: 685,
            LIGHT_START: 685,
            LIGHT_END: 3594
        },
        MEDIUM: {
            DARK_START: 0,
            DARK_END: 1285,
            LIGHT_START: 1285,
            LIGHT_END: 4315
        },
        SMALL: {
            LIGHT_START: 0,
            LIGHT_END: 1110,
            DARK_START: 1110,
            DARK_END: 4233
        }
    };

    useEffect(() => {
        const checkBackground = () => {
            const currentY = window.scrollY;
            const width = window.innerWidth;

            if (width > 1280) {
                if ((currentY >= BOUNDARIES.LARGE.DARK_START && currentY < BOUNDARIES.LARGE.DARK_END) || currentY >= BOUNDARIES.LARGE.LIGHT_END) {
                    setIsDarkBackground(true);
                } else if (currentY >= BOUNDARIES.LARGE.LIGHT_START && currentY < BOUNDARIES.LARGE.LIGHT_END) {
                    setIsDarkBackground(false);
                }
            } else if (width >= 768) {
                if ((currentY >= BOUNDARIES.MEDIUM.DARK_START && currentY < BOUNDARIES.MEDIUM.DARK_END) || currentY >= BOUNDARIES.MEDIUM.LIGHT_END) {
                    setIsDarkBackground(true);
                } else if (currentY >= BOUNDARIES.MEDIUM.LIGHT_START && currentY < BOUNDARIES.MEDIUM.LIGHT_END) {
                    setIsDarkBackground(false);
                }
            } else if (width < 768) {
                // SMALL (Mobile)
                if (currentY >= BOUNDARIES.SMALL.LIGHT_START && currentY <= BOUNDARIES.SMALL.LIGHT_END) {
                    setIsDarkBackground(true);
                } else if (currentY > BOUNDARIES.SMALL.DARK_START && currentY <= BOUNDARIES.SMALL.DARK_END) {
                    setIsDarkBackground(false);
                } else {
                    setIsDarkBackground(true);
                }
            }
        };

        window.addEventListener('scroll', checkBackground);
        return () => window.removeEventListener('scroll', checkBackground);
    }, []);

    const textColorClass = isDarkBackground ? 'bg-pixel-grey' : 'bg-pixel-black';


    const toggleSubMenu = () => {
        setIsSubMenuOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1280);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const checkBackground = () => {
            // const currentY = window.scrollY;
            console.log(window.innerWidth)
        };

        window.addEventListener('scroll', checkBackground);
        return () => window.removeEventListener('scroll', checkBackground);
    }, []);

    return (
        <div className={`${styles.CommonHeaderWrapper} ${isMenuOpen ? styles.MobileFullScreen : ''} ${textColorClass}`}>
            <div className={`${styles.HeaderInner}`}>
                <div className={styles.CommonHeaderLogo}>
                    <Link to={'/'} className={location.pathname === '/' ? styles.Active : ''}>
                        {isDarkBackground ? <PCheaderIcon /> : <LightHeaderIcon />}
                    </Link>
                </div>
                {isMobile ? (
                    <>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <img src={HeaderMenuIcon} />
                        </button>
                        {isMenuOpen && (
                            <div className={styles.MobileMenuWrappper}>
                                <div className={styles.MobileMenu}>
                                    <div className={styles.MobileHeader}>
                                        <div className={styles.CommonHeaderLogo}>
                                            <Link
                                                to={'/'}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={location.pathname === '/' ? styles.Active : ''}>
                                                <LightHeaderIcon />
                                            </Link>
                                        </div>
                                        <button onClick={() => setIsMenuOpen(false)}>
                                            <img src={MenuCloseIcon} alt={"close"}/>
                                        </button>
                                    </div>
                                    <div className={styles.CommonHeaderNav}>
                                        <Link to={'/'} className={styles.MobileHome} >
                                            Home
                                        </Link>
                                        <div className={styles.MobileDropdownMenu} onClick={toggleSubMenu}>
                                            <div className={styles.DropdownMenuTitle} >Doc<span className={`${styles.ArrowDown} ${isSubMenuOpen ? styles.ArrowUp : ''}`}>&gt;</span></div>
                                            {isSubMenuOpen && (
                                                <div className={styles.MobileDropdownList}>
                                                    <Link to={`${globalContext.baseUrl}`}>Documentation</Link>
                                                    <Link to={`${globalContext.baseUrl}/${globalContext.basic}`}>Spore Protocol Basics</Link>
                                                    <Link to={`${globalContext.baseUrl}/${globalContext.tutorial}`}>Tutorials</Link>
                                                    <Link to={`${globalContext.baseUrl}/${globalContext.howToRecipes}`}>How to recipes</Link>
                                                    <Link to={`${globalContext.baseUrl}/${globalContext.resources}`}>Resources</Link>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                    <div className={`${styles.HeaderIconContainer} flex items-center space-x-4`}>
                                        {/* GitHub SVG */}
                                        <Link to="https://github.com/sporeprotocol/spore-sdk" target="_blank" rel="noopener noreferrer">
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="24" cy="24" r="24" fill="url(#paint0_linear_3092_598)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 10.9956C16.6334 10.9956 10.6667 16.9623 10.6667 24.3289C10.6667 30.2289 14.4834 35.2123 19.7834 36.9789C20.45 37.0956 20.7 36.6956 20.7 36.3456C20.7 36.0289 20.6834 34.9789 20.6834 33.8623C17.3334 34.4789 16.4667 33.0456 16.2 32.2956C16.05 31.9123 15.4 30.7289 14.8334 30.4123C14.3667 30.1623 13.7 29.5456 14.8167 29.5289C15.8667 29.5123 16.6167 30.4956 16.8667 30.8956C18.0667 32.9123 19.9834 32.3456 20.75 31.9956C20.8667 31.1289 21.2167 30.5456 21.6 30.2123C18.6334 29.8789 15.5334 28.7289 15.5334 23.6289C15.5334 22.1789 16.05 20.9789 16.9 20.0456C16.7667 19.7123 16.3 18.3456 17.0334 16.5123C17.0334 16.5123 18.15 16.1623 20.7 17.8789C21.7667 17.5789 22.9 17.4289 24.0334 17.4289C25.1667 17.4289 26.3 17.5789 27.3667 17.8789C29.9167 16.1456 31.0334 16.5123 31.0334 16.5123C31.7667 18.3456 31.3 19.7123 31.1667 20.0456C32.0167 20.9789 32.5334 22.1623 32.5334 23.6289C32.5334 28.7456 29.4167 29.8789 26.45 30.2123C26.9334 30.6289 27.35 31.4289 27.35 32.6789C27.35 34.4623 27.3334 35.8956 27.3334 36.3456C27.3334 36.6956 27.5834 37.1123 28.25 36.9789C30.8969 36.0854 33.197 34.3842 34.8264 32.115C36.4559 29.8457 37.3326 27.1226 37.3334 24.3289C37.3334 16.9623 31.3667 10.9956 24 10.9956Z" fill="#1E1E1E"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_3092_598" x1="23.28" y1="-2.28567e-06" x2="23.28" y2="48" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFBFD"/>
                                                        <stop offset="1" stop-color="#D4DDE2"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </Link>

                                        {/* Discord SVG */}
                                        <Link to="https://discord.gg/9eufnpZZ8P" target="_blank" rel="noopener noreferrer">
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="24" cy="24" r="24" fill="url(#paint0_linear_3092_1029)"/>
                                                <path d="M33.2411 15.5219C31.5415 14.7421 29.7189 14.1675 27.8132 13.8384C27.7785 13.8321 27.7438 13.8479 27.726 13.8797C27.4916 14.2966 27.2319 14.8405 27.0501 15.268C25.0004 14.9611 22.9613 14.9611 20.9537 15.268C20.7718 14.831 20.5028 14.2966 20.2673 13.8797C20.2494 13.849 20.2148 13.8331 20.18 13.8384C18.2754 14.1664 16.4528 14.741 14.7521 15.5219C14.7374 15.5283 14.7248 15.5389 14.7164 15.5526C11.2593 20.7175 10.3123 25.7554 10.7769 30.7308C10.779 30.7551 10.7926 30.7784 10.8115 30.7932C13.0924 32.4683 15.3019 33.4852 17.4703 34.1592C17.505 34.1698 17.5418 34.1571 17.5639 34.1285C18.0768 33.428 18.534 32.6895 18.9261 31.9127C18.9492 31.8673 18.9271 31.8133 18.8798 31.7953C18.1546 31.5202 17.464 31.1847 16.7997 30.8038C16.7471 30.7731 16.7429 30.698 16.7913 30.662C16.9311 30.5572 17.0709 30.4482 17.2044 30.3382C17.2285 30.3181 17.2622 30.3139 17.2906 30.3266C21.6548 32.3191 26.3795 32.3191 30.6922 30.3266C30.7206 30.3128 30.7542 30.3171 30.7794 30.3372C30.9129 30.4472 31.0527 30.5572 31.1936 30.662C31.2419 30.698 31.2388 30.7731 31.1862 30.8038C30.5219 31.1921 29.8313 31.5202 29.105 31.7942C29.0577 31.8122 29.0367 31.8673 29.0598 31.9127C29.4603 32.6884 29.9175 33.427 30.421 34.1275C30.442 34.1571 30.4798 34.1698 30.5145 34.1592C32.6935 33.4852 34.9029 32.4683 37.1838 30.7932C37.2038 30.7784 37.2164 30.7562 37.2185 30.7319C37.7745 24.9797 36.2872 19.9831 33.2758 15.5537C33.2684 15.5389 33.2558 15.5283 33.2411 15.5219ZM19.5778 27.7013C18.2639 27.7013 17.1812 26.495 17.1812 25.0136C17.1812 23.5322 18.2429 22.3259 19.5778 22.3259C20.9232 22.3259 21.9953 23.5427 21.9743 25.0136C21.9743 26.495 20.9127 27.7013 19.5778 27.7013ZM28.4386 27.7013C27.1247 27.7013 26.0421 26.495 26.0421 25.0136C26.0421 23.5322 27.1037 22.3259 28.4386 22.3259C29.784 22.3259 30.8561 23.5427 30.8351 25.0136C30.8351 26.495 29.784 27.7013 28.4386 27.7013Z" fill="#1E1E1E"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_3092_1029" x1="23.28" y1="-2.28567e-06" x2="23.28" y2="48" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFBFD"/>
                                                        <stop offset="1" stop-color="#D4DDE2"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </Link>

                                        {/* Mail SVG */}
                                        <Link to="mailto:contact@spore.pro" target="_blank" rel="noopener noreferrer">
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="24" cy="24" r="24" fill="url(#paint0_linear_3092_1033)"/>
                                                <path d="M34.4 14H13.6C12.17 14 11.013 15.0969 11.013 16.4375L11 31.0625C11 32.4031 12.17 33.5 13.6 33.5H34.4C35.83 33.5 37 32.4031 37 31.0625V16.4375C37 15.0969 35.83 14 34.4 14ZM34.4 18.875L24 24.9688L13.6 18.875V16.4375L24 22.5312L34.4 16.4375V18.875Z" fill="#1E1E1E"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_3092_1033" x1="23.28" y1="-2.28567e-06" x2="23.28" y2="48" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFBFD"/>
                                                        <stop offset="1" stop-color="#D4DDE2"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </Link>
                                    </div>

                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div className={styles.CommonHeaderNav}>
                            <Link to={'/'} className={`${location.pathname === '/' ? styles.Active : ''} ${styles.HomeBtn} header-text`}>Home</Link>
                            <div className={styles.DropdownMenu}>
                                <div className={`${location.pathname === '/guide' ? styles.Active : ''} ${styles.SubMenuGuide} header-text`} >
                                    Docs <span className={styles.ArrowDown}>&gt;</span>
                                </div>
                                <div className={styles.SubMenuMargin}>
                                    <div className={styles.SubDocMenuList}>
                                        <div className={styles.DocList}>
                                            <Link className={styles.SubMenuTextContainer} target={'_blank'} to={`${globalContext.baseUrl}`}>
                                                <p className={`${styles.SubMenuItemHeader} body-1-bold`}>Documentation</p>
                                                <p className={`${styles.SubMenuItemContent} body-2`}>Master Spore, from basics to building your next project.</p>
                                            </Link>
                                            <DocumentMushroom />
                                        </div>
                                        <div className={styles.MenuDivider}></div>
                                        <div className={styles.SubMenu}>
                                            <Link className={styles.SubMenuItem} target={'_blank'} to={`${globalContext.baseUrl}/${globalContext.basic}`}>
                                                <p className={`${styles.SubMenuItemHeader} body-1-bold`}>Spore Protocol Basics</p>
                                                <p className={`${styles.SubMenuItemContent} body-2`}>Learn Spore fundamentals</p>
                                            </Link>
                                            <Link className={styles.SubMenuItem} target={'_blank'} to={`${globalContext.baseUrl}/${globalContext.tutorial}`}>
                                                <p className={`${styles.SubMenuItemHeader} body-1-bold`}>Tutorial</p>
                                                <p className={`${styles.SubMenuItemContent} body-2`}>Learn with examples.</p>
                                            </Link>
                                            <Link className={styles.SubMenuItem} target={'_blank'} to={`${globalContext.baseUrl}/${globalContext.howToRecipes}`}>
                                                <p className={`${styles.SubMenuItemHeader} body-1-bold`}>How to recipes</p>
                                                <p className={`${styles.SubMenuItemContent} body-2`}>Build with solutions.</p>
                                            </Link>
                                            <Link className={styles.SubMenuItem} target={'_blank'} to={`${globalContext.baseUrl}/${globalContext.resources}`}>
                                                <p className={`${styles.SubMenuItemHeader} body-1-bold`}>Resources</p>
                                                <p className={`${styles.SubMenuItemContent} body-2`}>Power tools for devs.</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<Link to={'/github'} className={location.pathname === '/github' ? styles.Active : ''}>Github</Link>*/}
                        </div>
                        <div className={`${styles.HeaderIconContainer}`}>
                            {/* GitHub SVG */}
                            <Link to="https://github.com/sporeprotocol/spore-sdk" target="_blank" rel="noopener noreferrer">
                                <img src={GithubIcon} alt={'github link'}/>
                            </Link>

                            {/* Discord SVG */}
                            <Link to="https://discord.gg/9eufnpZZ8P" target="_blank" rel="noopener noreferrer">
                                <img src={DiscordIcon} alt={'discord link'}/>
                            </Link>

                            {/* Mail SVG */}
                            <Link to="mailto:contact@spore.pro" target="_blank" rel="noopener noreferrer">
                                <img src={MailIcon} alt={'Send a mail'} />
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;