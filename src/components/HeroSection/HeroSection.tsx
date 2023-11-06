import React, { useEffect } from 'react';
import Prism from 'prismjs';
import './code.css'
import ExplorBtn from "@/components/HeroSection/ExplorBtn";

const HeroSection: React.FC = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return (
        <div className="mt-[130px] md:mt-[100px] sm:mt-[100px] pb-[87px]">
            <div className="flex md:flex-col sm:flex-col md:justify-center sm:justify-center sm:items-center md:items-center md:text-center md:w-full md:px-10 gap-[100px] md:gap-12">
                <div className="flex flex-col gap-[48px] w-[579px] md:w-full sm:w-full">
                    <div className="flex flex-col gap-1 sm:text-center">
                        <p className="text-hd1 font-custom font-black sm:text-hd1-mb">Monetize</p>
                        <p className="text-hd1 font-custom font-black sm:text-hd1-mb">On-chain Artifact</p>
                        <p className="text-hd1 font-custom font-black sm:text-hd1-mb">with Spore Protocol</p>
                    </div>
                    <p className="text-b1 mt-4 text-inter text-BrandDarkGray font-normal sm:text-b1-mb sm:text-center sm:px-4">
                        Spore Protocol infuses digital assets with enduring value backed by tokenomics,
                        redeemable at any time. Ensures true on-chain ownership, creative freedom and
                        frictionless interaction experience.
                    </p>
                    <div className="hidden lg:block">
                        <ExplorBtn />
                    </div>
                </div>
                <div className="w-[555px] h-[366px] self-end lg:flex-none sm:w-full md:w-full text-inter flex md:flex-col relative">
                    <div className="hidden lg:flex w-[183px] h-[183px] absolute bg-code-mushroom bg-cover right-[20px] top-[-137px]"></div>
                    <div className="w-[555px] sm:w-full h-[366px] md:w-full md:border md:border-BrandBlack md:rounded-2xl md:bg-white sm:bg-white md:text-left lg:bg-code-block bg-no-repeat self-end z-10 p-[37px] sm:pl-6 sm:pt-8 sm:border sm:border-BrandBlack sm:rounded-2xl">
                        <div className="w-[100px] border rounded-full border-BrandBlack text-center text-code !leading-6 font-redHat">index.js</div>
                        <div className="flex">
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
        content: await fetchLocalImage('./image.jpg'),
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
    );
};

export default HeroSection;