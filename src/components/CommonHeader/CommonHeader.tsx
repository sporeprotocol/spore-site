import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as CloseButton } from "../../assets/svg/close.svg";
import codeBackgroundHeader from '../../assets/img/codeBackground.png';
import styles from './index.module.scss'

const Header: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280 && window.innerWidth > 375);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

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

    return (
        <div className={`${styles.CommonHeaderWrapper} ${isMenuOpen ? styles.MobileFullScreen: ''}` }>
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
                                    <div className={styles.MobileDropdownMenu} onClick={toggleSubMenu}>
                                        Doc<span className={`${styles.ArrowDown} ${isSubMenuOpen ? styles.ArrowUp : ''}`}>&gt;</span>
                                        {isSubMenuOpen && (  // 根据isSubMenuOpen的状态来条件渲染子菜单
                                            <div className={styles.MobileDropdownList}>
                                                <Link to={'/'}>Documentation</Link>
                                                <Link to={'/'}>Spore Protocol Basics</Link>
                                                <Link to={'/'}>Tutorials</Link>
                                                <Link to={'/'}>How to recipes</Link>
                                                <Link to={'/'}>Resources</Link>
                                            </div>
                                        )}
                                    </div>

                                </div>
                                <div className={`${styles.HeaderIconContainer} flex items-center space-x-4`}>
                                    {/* GitHub SVG */}
                                    <a href="https://github.com/sporeprotocol/spore-sdk" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0002 2.33038C6.08911 2.33038 2.11133 6.30816 2.11133 11.2193C2.11133 15.1526 4.65577 18.4748 8.18911 19.6526C8.63355 19.7304 8.80022 19.4637 8.80022 19.2304C8.80022 19.0193 8.78911 18.3193 8.78911 17.5748C6.55577 17.9859 5.97799 17.0304 5.80022 16.5304C5.70022 16.2748 5.26688 15.4859 4.88911 15.2748C4.57799 15.1082 4.13355 14.697 4.878 14.6859C5.578 14.6748 6.078 15.3304 6.24466 15.597C7.04466 16.9415 8.32244 16.5637 8.83355 16.3304C8.91133 15.7526 9.14466 15.3637 9.40022 15.1415C7.42244 14.9193 5.35577 14.1526 5.35577 10.7526C5.35577 9.78594 5.70022 8.98594 6.26688 8.36372C6.178 8.14149 5.86688 7.23038 6.35577 6.00816C6.35577 6.00816 7.10022 5.77483 8.80022 6.91927C9.51133 6.71927 10.2669 6.61927 11.0224 6.61927C11.778 6.61927 12.5336 6.71927 13.2447 6.91927C14.9447 5.76372 15.6891 6.00816 15.6891 6.00816C16.178 7.23038 15.8669 8.14149 15.778 8.36372C16.3447 8.98594 16.6891 9.77483 16.6891 10.7526C16.6891 14.1637 14.6113 14.9193 12.6336 15.1415C12.9558 15.4193 13.2336 15.9526 13.2336 16.7859C13.2336 17.9748 13.2224 18.9304 13.2224 19.2304C13.2224 19.4637 13.3891 19.7415 13.8336 19.6526C15.5982 19.0569 17.1315 17.9228 18.2178 16.41C19.3041 14.8971 19.8886 13.0817 19.8891 11.2193C19.8891 6.30816 15.9113 2.33038 11.0002 2.33038Z" fill="black"/>
                                        </svg>
                                    </a>

                                    {/* Discord SVG */}
                                    <a href="https://discord.gg/9eufnpZZ8P" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M17.161 5.34794C16.0279 4.82803 14.8128 4.44498 13.5424 4.22559C13.5192 4.22136 13.4961 4.23194 13.4842 4.2531C13.3279 4.53104 13.1548 4.89363 13.0336 5.17862C11.6672 4.97406 10.3078 4.97406 8.96934 5.17862C8.8481 4.88729 8.66872 4.53104 8.51175 4.2531C8.49984 4.23264 8.47672 4.22206 8.45359 4.22559C7.18385 4.44428 5.96878 4.82733 4.83498 5.34794C4.82517 5.35217 4.81676 5.35923 4.81117 5.3684C2.50643 8.81163 1.87507 12.1702 2.18479 15.4872C2.1862 15.5034 2.19531 15.5189 2.20792 15.5288C3.72852 16.6455 5.20148 17.3234 6.64709 17.7728C6.67023 17.7798 6.69474 17.7714 6.70946 17.7523C7.05142 17.2853 7.35625 16.7929 7.61761 16.2751C7.63303 16.2448 7.61831 16.2088 7.58678 16.1968C7.10328 16.0134 6.64288 15.7898 6.20002 15.5359C6.16499 15.5154 6.16218 15.4653 6.19441 15.4413C6.2876 15.3715 6.38082 15.2988 6.46981 15.2254C6.48591 15.2121 6.50835 15.2092 6.52728 15.2177C9.43672 16.546 12.5865 16.546 15.4617 15.2177C15.4806 15.2085 15.503 15.2114 15.5198 15.2247C15.6088 15.2981 15.702 15.3715 15.7959 15.4413C15.8282 15.4653 15.8261 15.5154 15.791 15.5359C15.3482 15.7947 14.8878 16.0134 14.4036 16.1961C14.372 16.2081 14.358 16.2448 14.3734 16.2751C14.6404 16.7922 14.9452 17.2846 15.2809 17.7516C15.2949 17.7714 15.3201 17.7798 15.3433 17.7728C16.7959 17.3234 18.2688 16.6455 19.7894 15.5288C19.8027 15.5189 19.8112 15.5041 19.8126 15.4879C20.1832 11.6531 19.1917 8.32206 17.1841 5.3691C17.1792 5.35923 17.1708 5.35217 17.161 5.34794ZM8.05209 13.4675C7.17614 13.4675 6.45439 12.6633 6.45439 11.6757C6.45439 10.6881 7.16215 9.8839 8.05209 9.8839C8.94901 9.8839 9.66378 10.6951 9.64976 11.6757C9.64976 12.6633 8.942 13.4675 8.05209 13.4675ZM13.9593 13.4675C13.0834 13.4675 12.3616 12.6633 12.3616 11.6757C12.3616 10.6881 13.0694 9.8839 13.9593 9.8839C14.8562 9.8839 15.571 10.6951 15.557 11.6757C15.557 12.6633 14.8562 13.4675 13.9593 13.4675Z" fill="black"/>
                                        </svg>

                                    </a>

                                    {/* Mail SVG */}
                                    <a href="mailto:contact@spore.pro" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <circle cx="16" cy="16" r="16" />
                                            <path d="M21.5 10H9.5C8.675 10 8.0075 10.675 8.0075 11.5L8 20.5C8 21.325 8.675 22 9.5 22H21.5C22.325 22 23 21.325 23 20.5V11.5C23 10.675 22.325 10 21.5 10ZM21.5 13L15.5 16.75L9.5 13V11.5L15.5 15.25L21.5 11.5V13Z" fill="black"/>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className={styles.CommonHeaderNav}>
                        <Link to={'/'} className={location.pathname === '/' ? styles.Active : ''}>Home</Link>
                        <div className={styles.DropdownMenu}>
                            <div className={`${location.pathname === '/guide' ? styles.Active : ''} ${styles.SubMenuGuide}`} >
                                Docs <span className={styles.ArrowDown}>&gt;</span>
                            </div>
                            <div className={styles.SubMenuMargin}>
                                <div className={styles.SubDocMenuList}>
                                    <div className={styles.DocList}>
                                        <div className={styles.SubMenuTextContainer} >
                                            <p className={`${styles.SubMenuItemHeader} sub-header`}>Documentation</p>
                                            <p className={`${styles.SubMenuItemContent} body-2`}>Master Spore, from basics to building your next project.</p>
                                        </div>
                                        <img alt={'Documentation Header'} src={codeBackgroundHeader}/>
                                    </div>
                                    <div className={styles.MenuDivider}></div>
                                    <div className={styles.SubMenu}>
                                        <Link className={styles.SubMenuItem} to={'/basics'}>
                                            <p className={`${styles.SubMenuItemHeader} sub-header`}>Spore Protocol Basics</p>
                                            <p className={`${styles.SubMenuItemContent} body-2`}>Learn Spore fundamentals</p>
                                        </Link>
                                        <Link className={styles.SubMenuItem} to={'/tutorials'}>
                                            <p className={`${styles.SubMenuItemHeader} sub-header`}>Tutorial</p>
                                            <p className={`${styles.SubMenuItemContent} body-2`}>Learn with examples.</p>
                                        </Link>
                                        <Link className={styles.SubMenuItem} to={'/recipes'}>
                                            <p className={`${styles.SubMenuItemHeader} sub-header`}>How to recipes</p>
                                            <p className={`${styles.SubMenuItemContent} body-2`}>Build with solutions.</p>
                                        </Link>
                                        <Link className={styles.SubMenuItem} to={'/resources'}>
                                            <p className={`${styles.SubMenuItemHeader} sub-header`}>Resources</p>
                                            <p className={`${styles.SubMenuItemContent} body-2`}>Power tools for devs.</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<Link to={'/github'} className={location.pathname === '/github' ? styles.Active : ''}>Github</Link>*/}
                    </div>
                    <div className={`${styles.HeaderIconContainer} flex justify-center items-center space-x-4`}>
                        {/* GitHub SVG */}
                        <a href="https://github.com/sporeprotocol/spore-sdk" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0002 2.33038C6.08911 2.33038 2.11133 6.30816 2.11133 11.2193C2.11133 15.1526 4.65577 18.4748 8.18911 19.6526C8.63355 19.7304 8.80022 19.4637 8.80022 19.2304C8.80022 19.0193 8.78911 18.3193 8.78911 17.5748C6.55577 17.9859 5.97799 17.0304 5.80022 16.5304C5.70022 16.2748 5.26688 15.4859 4.88911 15.2748C4.57799 15.1082 4.13355 14.697 4.878 14.6859C5.578 14.6748 6.078 15.3304 6.24466 15.597C7.04466 16.9415 8.32244 16.5637 8.83355 16.3304C8.91133 15.7526 9.14466 15.3637 9.40022 15.1415C7.42244 14.9193 5.35577 14.1526 5.35577 10.7526C5.35577 9.78594 5.70022 8.98594 6.26688 8.36372C6.178 8.14149 5.86688 7.23038 6.35577 6.00816C6.35577 6.00816 7.10022 5.77483 8.80022 6.91927C9.51133 6.71927 10.2669 6.61927 11.0224 6.61927C11.778 6.61927 12.5336 6.71927 13.2447 6.91927C14.9447 5.76372 15.6891 6.00816 15.6891 6.00816C16.178 7.23038 15.8669 8.14149 15.778 8.36372C16.3447 8.98594 16.6891 9.77483 16.6891 10.7526C16.6891 14.1637 14.6113 14.9193 12.6336 15.1415C12.9558 15.4193 13.2336 15.9526 13.2336 16.7859C13.2336 17.9748 13.2224 18.9304 13.2224 19.2304C13.2224 19.4637 13.3891 19.7415 13.8336 19.6526C15.5982 19.0569 17.1315 17.9228 18.2178 16.41C19.3041 14.8971 19.8886 13.0817 19.8891 11.2193C19.8891 6.30816 15.9113 2.33038 11.0002 2.33038Z" fill="black"/>
                            </svg>
                        </a>

                        {/* Discord SVG */}
                        <a href="https://discord.gg/9eufnpZZ8P" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M17.161 5.34794C16.0279 4.82803 14.8128 4.44498 13.5424 4.22559C13.5192 4.22136 13.4961 4.23194 13.4842 4.2531C13.3279 4.53104 13.1548 4.89363 13.0336 5.17862C11.6672 4.97406 10.3078 4.97406 8.96934 5.17862C8.8481 4.88729 8.66872 4.53104 8.51175 4.2531C8.49984 4.23264 8.47672 4.22206 8.45359 4.22559C7.18385 4.44428 5.96878 4.82733 4.83498 5.34794C4.82517 5.35217 4.81676 5.35923 4.81117 5.3684C2.50643 8.81163 1.87507 12.1702 2.18479 15.4872C2.1862 15.5034 2.19531 15.5189 2.20792 15.5288C3.72852 16.6455 5.20148 17.3234 6.64709 17.7728C6.67023 17.7798 6.69474 17.7714 6.70946 17.7523C7.05142 17.2853 7.35625 16.7929 7.61761 16.2751C7.63303 16.2448 7.61831 16.2088 7.58678 16.1968C7.10328 16.0134 6.64288 15.7898 6.20002 15.5359C6.16499 15.5154 6.16218 15.4653 6.19441 15.4413C6.2876 15.3715 6.38082 15.2988 6.46981 15.2254C6.48591 15.2121 6.50835 15.2092 6.52728 15.2177C9.43672 16.546 12.5865 16.546 15.4617 15.2177C15.4806 15.2085 15.503 15.2114 15.5198 15.2247C15.6088 15.2981 15.702 15.3715 15.7959 15.4413C15.8282 15.4653 15.8261 15.5154 15.791 15.5359C15.3482 15.7947 14.8878 16.0134 14.4036 16.1961C14.372 16.2081 14.358 16.2448 14.3734 16.2751C14.6404 16.7922 14.9452 17.2846 15.2809 17.7516C15.2949 17.7714 15.3201 17.7798 15.3433 17.7728C16.7959 17.3234 18.2688 16.6455 19.7894 15.5288C19.8027 15.5189 19.8112 15.5041 19.8126 15.4879C20.1832 11.6531 19.1917 8.32206 17.1841 5.3691C17.1792 5.35923 17.1708 5.35217 17.161 5.34794ZM8.05209 13.4675C7.17614 13.4675 6.45439 12.6633 6.45439 11.6757C6.45439 10.6881 7.16215 9.8839 8.05209 9.8839C8.94901 9.8839 9.66378 10.6951 9.64976 11.6757C9.64976 12.6633 8.942 13.4675 8.05209 13.4675ZM13.9593 13.4675C13.0834 13.4675 12.3616 12.6633 12.3616 11.6757C12.3616 10.6881 13.0694 9.8839 13.9593 9.8839C14.8562 9.8839 15.571 10.6951 15.557 11.6757C15.557 12.6633 14.8562 13.4675 13.9593 13.4675Z" fill="black"/>
                            </svg>

                        </a>

                        {/* Mail SVG */}
                        <a href="mailto:contact@spore.pro" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" />
                                <path d="M21.5 10H9.5C8.675 10 8.0075 10.675 8.0075 11.5L8 20.5C8 21.325 8.675 22 9.5 22H21.5C22.325 22 23 21.325 23 20.5V11.5C23 10.675 22.325 10 21.5 10ZM21.5 13L15.5 16.75L9.5 13V11.5L15.5 15.25L21.5 11.5V13Z" fill="black"/>
                            </svg>
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;