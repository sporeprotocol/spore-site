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
        <footer className="lg:mt-[100px] md:mt-[100px] sm:py-[100px]">
            <AnimatePresence>
                {showEasterEgg && <EasterEgg onClose={handleClose} isVisible={showEasterEgg} />}
            </AnimatePresence>
            <div className="flex flex-col gap-8 mx-auto">
                <div className="flex justify-around w-[192px] gap-[24px] mx-auto">
                    <Link href={'https://github.com'} className="rounded-full bg-white hover:bg-BackgroundDark">
                        <Image
                            width={48}
                            height={48}
                            src={'/svg/github-pc.svg'} alt={'logo'}
                        />
                    </Link>
                    <Link href={'https://github.com'} className="rounded-full bg-white hover:bg-BackgroundDark">
                        <Image
                            width={48}
                            height={48}
                            src={'/svg/discord-pc.svg'} alt={'logo'}
                        />
                    </Link>
                    <Link href={'https://github.com'} className="rounded-full bg-white hover:bg-BackgroundDark">
                        <Image
                            width={48}
                            height={48}
                            src={'/svg/mail-pc.svg'} alt={'logo'}
                        />
                    </Link>
                </div>
                <h2 className="text-center font-custom font-extrabold text-[64px] sm:text-[36px] sm:p-4">SPORE PROTOCOL</h2>
                    {isMobile ? (
                        <div className="flex justify-around w-full mx-auto">
                            <Image src="/svg/sleeping-mushroom-mb.svg" alt="Sleeping" width={91} height={88} />
                            <Image src="/svg/like-mushroom-mb.svg" alt="Like" width={91} height={88} />
                            <Image src="/svg/amazing-mushroom-mb.svg" alt="Amazing" width={91} height={88} />
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-around w-[424px] mx-auto">
                                <div className="bg-sleeping-mushroom w-[120px] h-[90px] hover:cursor-flamethrower active:cursor-flamethrower-active"></div>
                                <div className="bg-like-mushroom w-[120px] h-[90px] hover:cursor-flamethrower active:cursor-flamethrower-active"></div>
                                <div className="bg-amazing-mushroom w-[120px] h-[90px] hover:cursor-flamethrower active:cursor-flamethrower-active"></div>
                            </div>
                        </>
                    )}
            </div>
        </footer>
    );
};

export default Footer;
