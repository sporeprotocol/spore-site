import React from 'react'
import styles from "./index.module.scss";

const AboutSlogan: React.FC = () => {
    return (
        <div className={styles.SloganWrapper}>
            <div className={styles.ColonContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M25 12C25 18.6274 19.6274 24 13 24C6.37258 24 0 18.6274 0 12C0 5.37258 6.37258 0 13 0C19.6274 0 25 5.37258 25 12Z" fill="#FFC43B"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M25 12C25 18.6274 19.6274 24 13 24C6.37258 24 0 18.6274 0 12C0 5.37258 6.37258 0 13 0C19.6274 0 25 5.37258 25 12Z" fill="#FFC43B"/>
                </svg>
            </div>
            <h1 className={styles.TextContainer}>
                <span className={styles.PurpleFont}>Spore Protocol</span> – where your code spores into digital forests
            </h1>
        </div>
    )
}

export default AboutSlogan