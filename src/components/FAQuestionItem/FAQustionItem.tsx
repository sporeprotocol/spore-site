import React, { useState } from 'react';
import { Question } from '../../utils/FAQuestion';
import {ReactComponent as OpenSVG} from "../../assets/svg/FAQ-Open.svg";
import {ReactComponent as CloseSVG} from "../../assets/svg/FAQ-Close.svg";
import styles from './index.module.scss'

interface Props extends Question {
    index: number;
}

const FAQuestionItem: React.FC<Props> = ({ question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={styles.FAQuestionWrapper} onClick={toggleOpen}>
            <div className={styles.Question}>
                {question}
                {isOpen ? <CloseSVG /> : <OpenSVG />}
            </div>
            {isOpen && <div className={styles.Answer}>{answer}</div>}
        </div>
    );
}

export default FAQuestionItem;
