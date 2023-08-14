import React from 'react';
import styles from './index.module.scss';
import { Link } from "react-router-dom";

interface SporeGuideItemProps {
    SvgIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    content: string;
    url: string;
}

const SporeGuideItem: React.FC<SporeGuideItemProps> = ({ SvgIcon, title, content, url }) => {
    return (
        <div className={styles.SporeItemWrapper}>
            <SvgIcon />
            <div className={styles.GuideContentContainer}>
                <div className={styles.GuideTitle}> {title} </div>
                <div className={`${styles.GuideContent} body-1`}> {content} </div>
                <Link className={styles.LinkButton} to={url}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="24" fill="#FFC43B"/>
                        <path d="M12 22C10.8954 22 10 22.8954 10 24C10 25.1046 10.8954 26 12 26V22ZM37.4142 25.4142C38.1953 24.6332 38.1953 23.3668 37.4142 22.5858L24.6863 9.85786C23.9052 9.07682 22.6389 9.07682 21.8579 9.85786C21.0768 10.6389 21.0768 11.9052 21.8579 12.6863L33.1716 24L21.8579 35.3137C21.0768 36.0948 21.0768 37.3611 21.8579 38.1421C22.6389 38.9232 23.9052 38.9232 24.6863 38.1421L37.4142 25.4142ZM12 26H36V22H12V26Z" fill="black"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default SporeGuideItem;
