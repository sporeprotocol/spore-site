"use client"

import React, { useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import MenuItem from "@/components/Header/MenuItem/MenuItem";
import {DocUrl} from "@/data/links";
import MenuItems from "@/data/HeaderItem";

const Header: React.FC = () => {
    const [isDocsHovered, setDocsHovered] = useState(false);
    const hoverTimeoutRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current !== null) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setDocsHovered(true);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = window.setTimeout(() => {
            setDocsHovered(false);
        }, 100);  // 300 milliseconds delay
    };


    return (
        <header className="flex justify-between items-center p-4 relative z-[99]">
            <div className="logo">
                <Image
                    width={202}
                    height={32}
                    src={'/svg/dark-text-logo.svg'} alt={'logo'}
                />
            </div>

            <nav className="flex">
                <button className={`w-[80px] h-[32px] box-content px-4 py-2 text-b2 font-custom ${isDocsHovered ? 'font-medium text-BrandDarkGray' : 'border-b-2 border-Brand font-bold'}`}>Home</button>
                <div className="z-99 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button className={`w-[80px] h-[32px] box-content px-4 py-2 text-b2 font-custom ${isDocsHovered ? 'border-b-2 border-Brand font-bold' : 'font-medium text-BrandDarkGray'}`}>
                        Docs
                    </button>
                    <div className={`absolute top-full mt-2 w-[598px] h-[340px] border-2 rounded-2xl border-BrandBlack bg-Brand ${isDocsHovered ? 'visible' : 'invisible'}`}>
                        <div className="flex box-border w-[574px] h-[316px] m-2 border-2 border-BrandBlack rounded-2xl bg-white">
                            <div className="flex flex-col flex-1 border-r-2 border-BrandBlack px-6 py-4 gap-6">
                                <MenuItem link={`${DocUrl.baseUrl}`} title={'Documentations'} intro={'Master Spore, from basics to building your next project'}/>
                                <Image width={165} height={165} src={'/svg/Dropdown-mushroom.svg'} alt={'Header-Mushroom'} />
                            </div>
                            <div className="flex flex-1 flex-col items-center p-4 gap-1">
                                {MenuItems.map(item =>
                                    <MenuItem key={item.intro} link={item.link} title={item.title} intro={item.intro}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="icons flex gap-2">
                <Link href={'https://github.com'}>
                    <Image
                        width={32}
                        height={32}
                        src={'/svg/github-pc.svg'} alt={'logo'}
                    />
                </Link>
                <Link href={'https://github.com'}>
                    <Image
                        width={32}
                        height={32}
                        src={'/svg/discord-pc.svg'} alt={'logo'}
                    />
                </Link>
                <Link href={'https://github.com'}>
                    <Image
                        width={32}
                        height={32}
                        src={'/svg/mail-pc.svg'} alt={'logo'}
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
