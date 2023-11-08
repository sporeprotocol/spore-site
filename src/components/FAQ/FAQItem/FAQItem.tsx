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
            <div className="flex font-bold font-inter cursor-pointer text-b1 sm:text-b1-mb w-full justify-between text-BrandBlack" onClick={toggleOpen}>
                {/* @ts-ignore */}
                <ReactMarkdown className="question-text pr-6" components={{ a: CustomLink }}>
                    {question}
                </ReactMarkdown>
                <Image className={`${isOpen ? 'rotate-180' : ''} ease-linear`} width={36} height={36} src={'/svg/faq-arrow.svg'} alt="faq" />
            </div>
            {isOpen && (
                <div className="pr-9 pt-3 font-inter text-normal text-b1 text-BrandDarkGray">
                    {/* @ts-ignore */}
                    <ReactMarkdown className="answer-text sm:text-b2-mb" components={{ a: CustomLink }}>
                        {answer}
                    </ReactMarkdown>
                </div>
            )}
        </div>
    );
};

export default FAQItem;


