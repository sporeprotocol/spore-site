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
            <div className={styles.RightContainer}>
                <h2>FAQ</h2>
                <h1>FAQ</h1>
                {questionsData.map((question, index) => (
                    <FAQuestionItem key={index} index={index} {...question} />
                ))}
            </div>
        </div>
    )
}

export default AboutFAQ