import React, { useState } from 'react';
import ExploreItem from "@/components/Explore/ExploreItem/ExploreItem";
import { ItemDatails } from "@/data/ExploreItemData";
import { DocsDetail } from "@/data/ExploreItemData";
import './explore.css'

const Explore: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="bg-explore-bg bg-no-repeat bg-top bg-center flex flex-col max-w-[1440px] mx-auto px-[120px] sm:px-4 md:px-10">
            <div className="text-hd2 sm:text-hd2-mb font-extrabold font-custom text-center mt-[100px] text-BrandBlack mb-8">
                Explore, Learn, and Build!
            </div>
            <div className="max-w-[844px] sm:text-b2 mx-auto text-b2 font-normal font-inter text-center text-BrandLightGray mb-8">
                Whether you`&apos;re crafting a dynamic piece of code or turning a meme into an asset, we&apos;ve got the perfect ecosystem for your ideas to flourish.
            </div>
            <div className="h-[273px] md:h-[244px] mb-6">
                <ExploreItem title={DocsDetail.title} content={DocsDetail.content} link={DocsDetail.link}/>
            </div>
            <div className="card-section flex flex-wrap gap-6 justify-between ">
                {ItemDatails.map((cardProps, index) => (
                    <div
                        key={index}
                        className={`
                            sm:w-full
                            explore-item-animation-ct transition-all duration-300 h-[299px] sm:h-[252px]
                            ${hoveredIndex === index ? 'hovered' : ''}
                            ${(hoveredIndex !== null && (hoveredIndex + 1) % 2 === 0) && hoveredIndex - 1 === index ? 'ScaleSmall' : '' }
                            ${(hoveredIndex !== null && (hoveredIndex + 1) % 2 !== 0) && hoveredIndex + 1 === index ? 'ScaleSmall' : '' }
                        `}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <ExploreItem title={cardProps.title} content={cardProps.content} link={cardProps.link}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
