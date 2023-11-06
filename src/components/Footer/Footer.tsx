// components/Footer.tsx
import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import Link from "next/link";

const Footer: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <footer className="lg:mt-[100px] md:mt-[100px] sm:py-[100px]">
            <div className="flex flex-col gap-8 mx-auto">
                <div className="flex justify-around w-[192px] gap-[24px] mx-auto">
                    <Link href={'https://github.com'}>
                        <Image
                            width={48}
                            height={48}
                            src={'/svg/github-pc.svg'} alt={'logo'}
                        />
                    </Link>
                    <Link href={'https://github.com'}>
                        <Image
                            width={48}
                            height={48}
                            src={'/svg/discord-pc.svg'} alt={'logo'}
                        />
                    </Link>
                    <Link href={'https://github.com'}>
                        <Image
                            width={48}
                            height={48}
                            src={'/svg/mail-pc.svg'} alt={'logo'}
                        />
                    </Link>
                </div>
                <h2 className="text-center font-custom font-extrabold text-[64px] sm:text-[36px] sm:p-4">SPORE PROTOCOL</h2>
                    {isMobile ? (
                        // 移动端显示的图片
                        <div className="flex justify-around w-full mx-auto">
                            <Image src="/svg/sleeping-mushroom-mb.svg" alt="Sleeping" width={91} height={88} />
                            <Image src="/svg/like-mushroom-mb.svg" alt="Like" width={91} height={88} />
                            <Image src="/svg/amazing-mushroom-mb.svg" alt="Amazing" width={91} height={88} />
                        </div>
                    ) : (
                        // 桌面端显示的图片
                        <div className="flex justify-around w-[424px] mx-auto">
                            <Image src="/svg/sleeping-mushroom.svg" alt="Sleeping" width={120} height={90} />
                            <Image src="/svg/like-mushroom.svg" alt="Like" width={120} height={90} />
                            <Image src="/svg/amazing-mushroom.svg" alt="Amazing" width={120} height={90} />
                        </div>
                    )}
            </div>
        </footer>
    );
};

export default Footer;
