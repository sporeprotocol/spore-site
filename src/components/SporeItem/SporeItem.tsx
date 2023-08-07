import React from 'react';
import { ReactComponent as FullOonChain } from "../../assets/svg/spore-fullonchain.svg";
import { ReactComponent as Adoption } from "../../assets/svg/spore-massadoption.svg";
import { ReactComponent as Monetize } from "../../assets/svg/spore-monetize.svg";
import { ReactComponent as Unmatched } from "../../assets/svg/spore-unmatched.svg";
import styles from './index.module.scss';

interface Props {
    title: string;
    content: string;
    index: number;
    total: number;
}

const SporeItem: React.FC<Props> = ({ title, content, index, total }) => {
    const svgs = {
        1: <FullOonChain />,
        2: <Adoption />,
        3: <Monetize />,
        4: <Unmatched />,
    };
    const SvgComponent = svgs[index.toString() as unknown as keyof typeof svgs];
    const wrapperClass = index % 2 === 0 ? 'even-wrapper' : 'odd-wrapper';
    return (
        <div className={`${styles.SporeItemWrapper} ${styles[wrapperClass]}`}>
            <div className={styles.TotalAndIndex}>{`${index}/${total}`}</div>
            <div className={styles.SvgItem}>
                {SvgComponent}
            </div>
            <div className={styles.SporeItemTitle}>
                <p>{title}</p>
            </div>
                <div className={styles.SporeItemContent}>
                <div className={styles.content}>
                    {content.includes('<') ? <div dangerouslySetInnerHTML={{ __html: content }} /> : <p>{content}</p>}
                </div>
            </div>
        </div>
    )
}

export default SporeItem
