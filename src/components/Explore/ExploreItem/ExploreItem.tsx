// components/Card.tsx
import React from 'react';
import Link from 'next/link';
import {ExploreItemsProps} from "@/types/Elxpore";
const ExploreItem: React.FC<ExploreItemsProps> = ({ title, content, link }) => {
    return (
        <div className="relative flex flex-col gap-6 sm:gap-3 w-full h-full px-8 py-12 border-2 border-BrandBlack rounded-[32px] bg-white cursor-pointer hover:bg-BackgroundDark">
            <h3 className="text-xl mb-2 text-hd3 font-custom font-extrabold sm:text-hd3-mb">{title}</h3>
            <p className="text-base max-w-[508px] mb-4 font-b2 font-normal font-inter text-BrandDarkGray sm:text-b2-mb">{content}</p>
            <Link href={link} className="absolute bottom-12 left-8 w-[85px] h-10 flex items-center shadow-custom font-cutsom font-bold px-6 py-3 bg-Brand rounded-full hover:bg-BackgroundDark">
                Visit
            </Link>
        </div>
    );
};

export default ExploreItem;
