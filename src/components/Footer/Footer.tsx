import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import Link from "next/link";
import EasterEgg from "@/components/EasterEgg/EasterEgg";
import {AnimatePresence} from "framer-motion";

const Footer: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showEasterEgg, setShowEasterEgg] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', checkIfMobile);
        checkIfMobile();
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const handleMushroomClick = () => {
        setShowEasterEgg(true);
    };

    const handleClose = () => {
        setShowEasterEgg(false);
    };

    return (
        <footer className="lg:py-[100px] md:py-[100px] sm:py-[100px]">
            <AnimatePresence>
                {showEasterEgg && <EasterEgg onClose={handleClose} isVisible={showEasterEgg} />}
            </AnimatePresence>
            <div className="flex gap-8 mx-auto justify-center">
                <div className="bg-sleeping-mushroom w-[120px] h-[116px] hover:cursor-flamethrower active:cursor-flamethrower-active" onClick={handleMushroomClick}></div>
                <div className="flex flex-col">
                    <div className="flex justify-around w-[192px] gap-[24px] mx-auto">
                        <Link target={'_blank'} href={'https://twitter.com/sporeprotocol'} className="rounded-full bg-white hover:bg-BackgroundDark">
                            <Image
                                width={48}
                                height={48}
                                src={'/svg/x-logo.svg'} alt={'logo'}
                            />
                        </Link>
                        <Link target={'_blank'} href={'https://github.com/sporeprotocol'} className="rounded-full bg-white hover:bg-BackgroundDark">
                            <Image
                                width={48}
                                height={48}
                                src={'/svg/github-pc.svg'} alt={'logo'}
                            />
                        </Link>
                        <Link target={'_blank'} href={'https://discord.com/channels/1083998986735730738/1176755433462054973'} className="rounded-full bg-white hover:bg-BackgroundDark">
                            <Image
                                width={48}
                                height={48}
                                src={'/svg/discord-pc.svg'} alt={'logo'}
                            />
                        </Link>
                        <Link target={'_blank'} href={'mailto:contact@spore.pro'} className="rounded-full bg-white hover:bg-BackgroundDark">
                            <Image
                                width={48}
                                height={48}
                                src={'/svg/mail-pc.svg'} alt={'logo'}
                            />
                        </Link>
                    </div>
                    <h2 className="text-center font-custom font-extrabold text-[64px] sm:text-[36px] sm:p-4">SPORE PROTOCOL</h2>
                </div>
                <div className="bg-amazing-mushroom w-[120px] h-[116px] hover:cursor-flamethrower active:cursor-flamethrower-active" onClick={handleMushroomClick}></div>
            </div>
        </footer>
    );
};

export default Footer;
