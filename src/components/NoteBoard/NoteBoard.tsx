import React from 'react';
import styles from './index.module.scss';

interface NoteBoardProps {
    header: string;
    contents: string[];
}

const NoteBoard: React.FC<NoteBoardProps> = ({ header, contents }) => {
    return (
        <div className={styles.NoteBoardWrapper}>
            <h4 className={styles.Header}>{header}</h4>

            <ul>
                {contents.map((content, index) => (
                    <li key={index}>{content}</li>
                ))}
            </ul>
        </div>
    );
}

export default NoteBoard;
