import React from 'react';
import Link from 'next/link';
import { MenuItem } from '@/types/Menu';
const MenuItem: React.FC<MenuItem> = ({ link, title, intro }) => {
    return (
        <div className="box-content menuItem flex items-start w-[227px] px-2 py-1 hover:bg-BackgroundDark hover:rounded">
            <Link href={link} className="flex flex-col gap-1" target="_blank" rel="noopener noreferrer">
                <p className="text-b1-bold block font-bold text-inter">
                    {title}
                </p>
                <p className="text-b2 font-normal text-BrandDarkGray text-inter">
                    {intro}
                </p>
            </Link>
        </div>
    );
};

export default MenuItem;