// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="mt-[100px]">
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
                <h2 className="text-center font-custom font-extrabold text-[64px]">SPORE PROTOCOL</h2>
                <div className="flex justify-around w-[424px] mx-auto">
                    <Image src="/svg/like-mushroom.svg" alt="Like" width={120} height={90} />
                    <Image src="/svg/amazing-mushroom.svg" alt="Amazing" width={120} height={90} />
                    <Image src="/svg/sleeping-mushroom.svg" alt="Sleeping" width={120} height={90} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
