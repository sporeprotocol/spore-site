import React, { useState } from 'react';
import styles from './index.module.scss';
import CustomConfiguration from '../../assets/docs/CustomConfiguration.mdx'
import UsingYourOwnAccounts from '../../assets/docs/UsingYourOwnAccounts.mdx'
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../CodeBlock/CodeBlock.tsx";

const components = {
    pre: CodeBlock as React.FC<JSX.IntrinsicElements['pre']>,
};

const ContentBoard: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const renderContent = (index: number, title: string, ContentComponent: React.FC) => (
        <div>
            <div className={`${styles.ContentBoardWrapper}`}>
                <h4>{title}</h4>
                <button onClick={() => {
                    if (openIndex === index) {
                        setOpenIndex(null);
                    } else {
                        setOpenIndex(index);
                    }
                }}>
                    {openIndex === index ? '-' : '+'}
                </button>
            </div>
            {openIndex === index && (
                <div className={styles.MdxProvider}>
                    {/*@ts-ignore*/}
                    <MDXProvider components={components}>
                        <ContentComponent />
                    </MDXProvider>
                </div>
            )}
        </div>
    );

    return (
        <div>
            {renderContent(0, "Customize Configuration", CustomConfiguration)}
            {renderContent(1, "Using Your Own Accounts", UsingYourOwnAccounts)}
        </div>
    );
}

export default ContentBoard;
