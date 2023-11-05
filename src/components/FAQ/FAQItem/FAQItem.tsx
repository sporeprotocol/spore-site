import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FAQData } from "@/types/FAQ";
import Image from "next/image";

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
}
const FAQItem: React.FC<FAQData> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-Brand">
            {children}
        </a>
    );


    return (
        <div className="border-b py-4">
            <div className="flex font-bold font-inter text-b1 w-full justify-between text-BrandBlack" onClick={toggleOpen}>
                <ReactMarkdown children={question} className="question-text" />
                <Image className={`${isOpen ? 'rotate-180' : ''} ease-linear`} width={36} height={36} src={'/svg/faq-arrow.svg'} alt="faq" />
            </div>
            {isOpen && (
                <div className="pr-9 font-inter text-normal text-b1 text-BrandDarkGray">
                    {/* @ts-ignore */}
                    <ReactMarkdown children={answer} className="answer-text" components={{ a: CustomLink }}  />
                </div>
            )}
        </div>
    );
};

export default FAQItem;


