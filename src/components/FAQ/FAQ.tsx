// components/FAQList.tsx
import React from 'react';
import FAQList from "@/components/FAQ/FAQList/FAQList";
import Image from "next/image";

const FAQ: React.FC = () => {

    return (
       <div className="max-w-[1440px] mx-auto bg-Brand rounded-t-[64px] mt-[100px]">
           <div className="mt-12 bg-white rounded-t-[64px] py-[100px] flex max-w-[1440px] w-full px-[120px] mx-auto justify-between">
               <div className="flex flex-col">
                   <p className="font-custom font-extrabold text-hd2">Frequently</p>
                   <p className="font-custom font-extrabold text-hd2">Asked</p>
                   <p className="font-custom font-extrabold text-hd2">Questions</p>
                   <div className="w-[233px] h-[233px] bg-faq-circle flex justify-center items-center">
                       <div className="w-[200px] h-[200px] rounded-full overflow-hidden relative">
                           <Image className="absolute bottom-[-26px] left-[20px]" width={164} height={183} src={'/svg/faq-mushroom.svg'} alt='faq-mushroom' />
                       </div>
                   </div>
               </div>
               <FAQList />
           </div>
       </div>
    );
};

export default FAQ;
