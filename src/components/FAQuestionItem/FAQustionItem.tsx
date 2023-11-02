import React, { useState } from 'react';
import { Question } from '../../utils/FAQuestion.ts';
import {ReactComponent as OpenSVG} from "../../assets/svg/FAQ-Open.svg";
import {ReactComponent as CloseSVG} from "../../assets/svg/FAQ-Close.svg";
import ReactMarkdown from 'react-markdown';
import styles from './index.module.scss'

interface Props extends Question {
    index: number;
}

const FAQuestionItem: React.FC<Props> = ({ question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={styles.FAQuestionWrapper}>
            <div className={styles.Question} onClick={toggleOpen}>
                {question}
                {isOpen ? <CloseSVG /> : <OpenSVG />}
            </div>
            {isOpen && <div className={styles.Answer}>
                <ReactMarkdown>
                    { answer }
                </ReactMarkdown>
            </div>}
        </div>
    );
}

export default FAQuestionItem;
