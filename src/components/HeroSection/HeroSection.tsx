import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import './code.css'
import ExplorBtn from "@/components/HeroSection/ExplorBtn";
import EasterEgg from "@/components/EasterEgg/EasterEgg";
import { AnimatePresence } from 'framer-motion';

const HeroSection: React.FC = () => {
    const [showEasterEgg, setShowEasterEgg] = useState(false);
    const words = ["Craft", "Secure", "Distribute", "Monetize"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);
    const speed = 150; // typing speed

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    const handleMushroomClick = () => {
        setShowEasterEgg(true);
    };

    const handleClose = () => {
        setShowEasterEgg(false);
    };

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : speed, parseInt(String(Math.random() * 350))));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <>
            <AnimatePresence>
                {showEasterEgg && <EasterEgg onClose={handleClose} isVisible={showEasterEgg} />}
            </AnimatePresence>
            <div className="mt-[130px] md:mt-[100px] sm:mt-[100px] pb-[87px]">

                <div className="flex md:flex-col sm:flex-col md:justify-center sm:justify-center sm:items-center md:items-center md:text-center md:w-full md:px-10 justify-between md:gap-12">
                    <div className="flex flex-col gap-[48px] w-[579px] md:w-full sm:w-full">
                        <div className="flex flex-col gap-1 sm:text-center">
                            <p className="h-[58px] sm:h-8 text-hd1 font-custom font-black sm:text-hd1-mb">{`${words[index].substring(0, subIndex)}${blink ? "|": " "}`}</p>
                            <p className="lg:w-[454px] relative text-hd1 font-custom font-black sm:text-hd1-mb sm:mx-auto md:mx-auto">
                                <span className="relative z-10">On-chain Artifact</span>
                                <span className="absolute w-full left-0 bottom-0 h-[30px] bg-Brand rounded-full z-1 sm:hidden"></span>
                            </p>
                            <p className="text-hd1 font-custom font-black sm:text-hd1-mb">with Spore Protocol</p>
                        </div>
                        <p className="text-b1 mt-4 text-inter text-BrandDarkGray font-normal sm:text-b1-mb sm:text-center sm:px-4">
                            Spore Protocol infuses digital assets with enduring value backed by tokenomics, redeemable at any time. Ensures true on-chain ownership, privacy, creative freedom and frictionless interaction.
                        </p>
                        <div className="hidden lg:block">
                            <ExplorBtn />
                        </div>
                    </div>
                    <div className="w-[555px] h-[366px] self-end lg:flex-none sm:w-full md:w-full text-inter flex md:flex-col relative sm:overflow-hidden md:overflow-hidden">
                        <div className="hidden hover:cursor-flamethrower active:cursor-flamethrower-active lg:flex w-[183px] h-[183px] absolute bg-code-mushroom bg-cover right-[20px] top-[-137px]" onClick={handleMushroomClick}></div>
                        <div className="w-[555px] sm:w-full h-[366px] md:w-full md:border md:border-BrandBlack md:rounded-2xl md:bg-white sm:bg-white md:text-left lg:bg-code-block bg-no-repeat self-end z-10 p-[37px] sm:pl-6 sm:pt-8 sm:border sm:border-BrandBlack sm:rounded-2xl">
                            <div className="w-[100px] border rounded-full border-BrandBlack text-center text-code !leading-6 font-redHat">index.js</div>
                            <div className="flex sm:overflow-x-scroll">
                                <div className="mt-4">
                                    <div className="font-redHat text-code text-BrandLightGray">1</div>
                                    <div className="font-redHat text-code text-BrandLightGray">2</div>
                                    <div className="font-redHat text-code text-BrandLightGray">3</div>
                                    <div className="font-redHat text-code text-BrandLightGray">4</div>
                                    <div className="font-redHat text-code text-BrandLightGray">5</div>
                                    <div className="font-redHat text-code text-BrandLightGray">6</div>
                                    <div className="font-redHat text-code text-BrandLightGray">7</div>
                                    <div className="font-redHat text-code text-BrandLightGray">8</div>
                                    <div className="font-redHat text-code text-BrandLightGray">9</div>
                                </div>
                                <pre className="mt-4 ml-4">
                    <code className="language-javascript font-redHat text-code">
                        {
                            `await createSpore({
    data: {
        contentType:'image/jpeg',
        content: await fetchLocalFile('./image.jpg'),
    },
    toLock: wallet.lock,
    fromInfos: [wallet.address], 
    config,
});`
                        }
                    </code>
                </pre>
                            </div>
                        </div>

                    </div>
                    <div className="hidden md:block sm:block">
                        <ExplorBtn />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
