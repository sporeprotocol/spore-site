import React from 'react';
import {CardProps} from "@/types/Introduction";
import Link from "next/link";
import Image from "next/image";
const Card: React.FC<CardProps> = ({length, index, img, title, listItems, link }) => {
    return (
        <div className="relative cursor-pointer group">
            <div className="absolute inset-0 bg-white border-4 rounded-3xl border-BrandBlack transform transition-transform duration-300 group-hover:rotate-6"></div>
            <div className="relative w-[520px] h-[634px] border-4 bg-BackgroundLight rounded-3xl border-BrandBlack py-8 px-12 shadow-lg flex flex-col gap-8">
                <div className="border border-BrandBlack rounded-full w-[75px] h-[34px] flex font-inter text-b2 py-1 justify-center items-center">{ (index || index == 0)  ? index + 1 : 'NaN' } of {length || 0}</div>
                <Image width={182} height={182} src={img} alt={`${title} image`} className="relative"/>
                <div className="flex items-center mb-4 relative">
                    <div className="text-hd3 font-extrabold font-custom">
                        {title}
                    </div>
                </div>
                {listItems && (
                    <ul className="mb-4 flex flex-col gap-2 list-disc list-outside text-b2 relative">
                        {listItems.map((item, itemIndex) => (
                            <li key={itemIndex} className="font-inter text-BrandDarkGray">{item}</li>
                        ))}
                    </ul>
                )}
                <Link href={link} target={'_blank'} className="absolute right-12 bottom-9 w-12 h-12 bg-card-btn bg-cover"></Link>
            </div>
        </div>

    );
};


export default Card;
