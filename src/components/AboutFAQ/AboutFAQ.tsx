import React from 'react'
import { questionsData } from "../../utils/FAQuestion";
import FAQuestionItem from "../FAQuestionItem/FAQustionItem";
import styles from './index.module.scss'

const AboutFAQ:React.FC = () => {
    return (
        <div className={styles.AboutFAQWrapper}>
            <div className={styles.LeftContainer}>
                <div className={styles.LeftHeader}>Frequently</div>
                <div className={styles.LeftHeader}>Asked</div>
                <div className={styles.LeftHeader}>Questions</div>
            </div>
            <h1 className={`${styles.MobileTitle}`}>
                <div className={styles.LeftHeader}>Frequently Asked Questions</div>
            </h1>
            <div className={styles.RightContainer}>
                {questionsData.map((question, index) => (
                    <FAQuestionItem key={index} index={index} {...question} />
                ))}
            </div>
        </div>
    )
}

export default AboutFAQ