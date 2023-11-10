import React from 'react'
import Link from "next/link";
import {DocUrl} from "@/data/links";

const ExploreBtn: React.FC = () => {
    return (
        <Link href={`${DocUrl.baseUrl}`} target={'_blank'}>
            <div className="sm:mt-12 cursor-pointer flex justify-center items-center shadow-custom w-[263px] rounded-full h-[56px] p-[10px 24px] gap-[8px] text-button font-custom font-extrabold text-white bg-BrandBlack">
                {`Explore Documentation >`}
            </div>
        </Link>
    )
}

export default ExploreBtn