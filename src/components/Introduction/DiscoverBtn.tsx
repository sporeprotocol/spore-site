import React from 'react'
import Link from "next/link";
import {DocUrl} from "@/data/links";

const DiscoverBtn: React.FC = () => {
    return (
        <Link className="mt-12 w-full h-full bg-BrandBlack block flex justify-center items-center rounded-full text-btn font-custom font-extrabold shadow-custom text-white" href={`${DocUrl.baseUrl}`} target={'_blank'}>
            Discover More
        </Link>
    )
}

export default DiscoverBtn