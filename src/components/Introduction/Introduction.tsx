import React from 'react';
import Card from "@/components/Introduction/Card/Card";
import Link from "next/link";
import cardData from "@/data/Cards";

const Introduction: React.FC = () => {
    return (
        <div className="flex bg-Brand pb-[100px]">
            <div className="w-full max-w-[1440px] mx-auto px-[120px] flex justify-between">
                <div className="max-h-[600px] flex flex-col sticky top-0">
                    <div className="text-section mb-4">
                        <p className="text-hd2 font-black font-custom">What's in Spore</p>
                        <p className="text-b2 font-inter font-normal mt-4">(not just another NFT protocol)</p>
                        <Link className="mt-12 w-[168px] h-[56px] bg-BrandBlack block flex justify-center items-center rounded-full text-btn font-custom font-extrabold shadow-custom text-white" href={'/'} target={'_blank'}>
                            Discover More
                        </Link>
                    </div>
                    <div className="svg-section w-[405px] mt-[45px]">
                        <div className="duration-1000 transition-transform transform hover:scale-90 bg-scatter w-[405px] h-[348px] cursor-pointer hover:bg-poly hover:w-[282px] hover:h-[271px]">
                        </div>
                    </div>
                </div>
                <div className="card-section flex flex-col gap-12">
                    {cardData.map((cardProps, index) => (
                        <Card key={index} length={cardData.length} index={index} {...cardProps} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Introduction;
