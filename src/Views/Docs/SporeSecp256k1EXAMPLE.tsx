import React from 'react'
import { MDXProvider } from '@mdx-js/react';
import  SporeSecp256k1EXAMPLEDocs  from '../../assets/docs/SporeSecp256k1EXAMPLE.mdx'
import CodeBlock from "../../components/CodeBlock/CodeBlock.tsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.tsx";
import styles from './index.module.scss'
import CommonFooter from "../../components/CommonFooter/CommonFooter.tsx";

const components = {
    pre: CodeBlock as React.FC<JSX.IntrinsicElements['pre']>,
};


const SporeSecp256k1EXAMPLE: React.FC = () => {
    return (
        <>
            <div className={styles.DocsWrapper}>
                <BreadCrumbs parentName="Try" childName="Spore Secp256k1 Example" parentLink="/try" />
                <div className={styles.MdxContainer}>
                    {/*@ts-ignore*/}
                    <MDXProvider  components={components}>
                        <SporeSecp256k1EXAMPLEDocs />
                    </MDXProvider>
                </div>
            </div>
            <CommonFooter />
        </>
    )
}

export default SporeSecp256k1EXAMPLE