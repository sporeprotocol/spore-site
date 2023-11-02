import React, { useEffect } from 'react';
import Prism from 'prismjs';
import './code.css'

const HeroSection: React.FC = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return (
        <div className="mt-[130px] pb-[87px]">
            <div className="flex gap-[100px]">
                <div className="flex flex-col gap-[48px] w-[579px]">
                    <div className="flex flex-col gap-1">
                        <p className="text-hd1 font-custom font-black">Monetize</p>
                        <p className="text-hd1 font-custom font-black">On-chain Artifact</p>
                        <p className="text-hd1 font-custom font-black">with Spore Protocol</p>
                    </div>
                    <p className="text-b1 mt-4 text-inter text-BrandDarkGray font-normal">
                        Spore Protocol infuses digital assets with enduring value backed by tokenomics,
                        redeemable at any time. Ensures true on-chain ownership, creative freedom and
                        frictionless interaction experience.
                    </p>
                    <div className="flex justify-center items-center shadow-custom w-[263px] rounded-full h-[56px] p-[10px 24px] gap-[8px] text-button font-custom font-extrabold text-white bg-BrandBlack">
                        {`Explore Documentation >`}
                    </div>

                </div>
                <div className="w-[528px] text-inter flex relative">
                    <div className="w-[183px] h-[183px] absolute bg-code-mushroom bg-cover right-0 top-[-35px]"></div>
                    <div className="w-[528px] h-[366px] bg-code-block bg-no-repeat self-end z-10 p-[37px]">
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
            </div>
        </div>
    );
};

export default HeroSection;