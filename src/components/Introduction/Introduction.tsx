import React from 'react';
import Card from "@/components/Introduction/Card/Card";
import Link from "next/link";
import cardData from "@/data/Cards";
import DiscoverBtn from "@/components/Introduction/DiscoverBtn";

const Introduction: React.FC = () => {
    return (
        <div className="flex md:flex-col sm:flex-col bg-Brand pb-[100px]">
            <div className="w-full max-w-[1440px] mx-auto px-[120px] md:mt-12 md:px-10 sm:px-4 sm:items-center flex md:flex-col sm:flex-col md:items-center justify-between">
                <div className="max-h-[600px] flex flex-col sticky top-0">
                    <div className="text-section mb-4 sm:text-center md:text-center md:mb-12">
                        <p className="sm:w-[216px] text-hd2 font-black font-custom sm:text-hd2-mb">What&apos;s in Spore</p>
                        <p className="text-b2 font-inter font-normal mt-4 sm:text-b2-mb">(not just another NFT protocol)</p>
                        <div className="w-[168px] h-[56px] hidden lg:flex">
                            <DiscoverBtn />
                        </div>
                    </div>
                    <div className="svg-section w-[405px] mt-[45px] hidden lg:flex">
                        <div className="duration-1000 transition-transform transform hover:scale-90 bg-scatter w-[405px] h-[348px] cursor-pointer hover:bg-poly hover:w-[282px] hover:h-[271px]">
                        </div>
                    </div>
                </div>
                <div className="card-section flex flex-col justify-center items-center gap-12">
                    {cardData.map((cardProps, index) => (
                        <Card key={index} length={cardData.length} index={index} {...cardProps} />
                    ))}
                </div>
                <div className="w-[343px] h-[56px] hidden md:flex">
                    <DiscoverBtn />
                </div>
            </div>
        </div>
    );
};

export default Introduction;
