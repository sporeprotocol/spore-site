import React from 'react'
import { questionsData } from "../../utils/FAQuestion.ts";
import FAQuestionItem from "../FAQuestionItem/FAQustionItem.tsx";
import { ReactComponent as FAQMushroom } from "../../assets/svg/FAQ-Mushroom.svg";
import styles from './index.module.scss'

const AboutFAQ:React.FC = () => {
    return (
        <div className={styles.AboutFAQWrapper}>
            <div className={styles.LeftContainer}>
                <div className={styles.LeftHeader}>FAQ</div>
                <div className={styles.LeftSVG}>
                    <FAQMushroom />
                </div>
            </div>
            <div className={styles.RightContainer}>
                {questionsData.map((question, index) => (
                    <FAQuestionItem key={index} index={index} {...question} />
                ))}
            </div>
        </div>
    )
}

export default AboutFAQ