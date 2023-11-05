// components/Card.tsx
import React from 'react';
import Link from 'next/link';
import {ExploreItemsProps} from "@/types/Elxpore";
const ExploreItem: React.FC<ExploreItemsProps> = ({ title, content, link }) => {
    return (
        <div className="flex flex-col gap-6 w-full h-full px-8 py-12 border-2 border-BrandBlack rounded-[32px] cursor-pointer hover:bg-BackgroundDark">
            <h3 className="text-xl mb-2 text-hd3 font-custom font-extrabold">{title}</h3>
            <p className="text-base mb-4 font-b2 font-normal font-inter text-BrandDarkGray">{content}</p>
            <Link href={link} className="w-[85px] shadow-custom font-cutsom font-bold px-6 py-3 bg-Brand rounded-full">
                Visit
            </Link>
        </div>
    );
};

export default ExploreItem;
