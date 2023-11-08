import React from 'react';
import {CardProps} from "@/types/Introduction";
import Link from "next/link";
import Image from "next/image";
const Card: React.FC<CardProps> = ({length, index, img, title, listItems, link }) => {
    return (
        <div className="w-[520px] sm:w-full relative cursor-pointer group">
            <div className="absolute inset-0 bg-white border-4 rounded-3xl border-BrandBlack transform transition-transform duration-300 group-hover:rotate-6"></div>
            <div className="relative w-[520px] h-[634px] sm:w-full sm:h-[510px] border-4 bg-BackgroundLight rounded-3xl border-BrandBlack py-8 px-12 sm:px-4 sm:py-8 shadow-lg flex flex-col gap-8">
                <div className="border border-BrandBlack rounded-full w-[75px] h-[34px] sm:w-[69px] sm:h-[32px] flex font-inter text-b2 py-1 justify-center items-center sm:text-b2-mb bg-white">{ (index || index == 0)  ? index + 1 : 'NaN' }/{length || 0}</div>
                <div className="relative sm:w-[124px] sm:h-[124px] w-[182px] h-[182px]">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src={img} alt={`${title} image`}
                        className="absolute"/>
                </div>
                <div className="flex items-center mb-4 relative sm:mb-0">
                    <div className="text-hd3 font-extrabold font-custom sm:text-hd3-mb">
                        {title}
                    </div>
                </div>
                {listItems && (
                    <ul className="mb-4 flex flex-col gap-2 list-disc list-outside text-b2 relative">
                        {listItems.map((item, itemIndex) => (
                            <li key={itemIndex} className="ml-4 font-inter text-BrandDarkGray sm:text-b2-mb">{item}</li>
                        ))}
                    </ul>
                )}
                {/*<Link href={link} target={'_blank'} className="absolute right-12 bottom-9 sm:top-6 sm:right-4 w-12 h-12 bg-card-btn bg-cover"></Link>*/}
            </div>
        </div>

    );
};


export default Card;
