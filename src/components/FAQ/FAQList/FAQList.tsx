// components/FAQList.tsx
import React from 'react';
import { FAQData } from "@/types/FAQ";
import { QuestionsData } from "@/data/FAQData";
import FAQItem from "@/components/FAQ/FAQItem/FAQItem";

const FAQList: React.FC = () => {
    return (
        <div className="flex flex-col w-[774px]">
            {QuestionsData.map((value, index) => (
                <FAQItem question={value.question} answer={value.answer} key={value.question}/>
            ))}
        </div>
    );
};

export default FAQList;
