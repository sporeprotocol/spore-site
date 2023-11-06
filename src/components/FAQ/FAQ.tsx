// components/FAQList.tsx
import React from 'react';
import FAQList from "@/components/FAQ/FAQList/FAQList";
import Image from "next/image";

const FAQ: React.FC = () => {

    return (
       <div className="max-w-[1440px] mx-auto bg-Brand overflow-hidden rounded-t-[64px] mx-10 mt-[100px]">
           <div className="mt-12 bg-white rounded-t-[64px] py-[100px] flex md:flex-col sm:flex-col max-w-[1440px] w-full px-[120px] sm:px-4 mx-auto justify-between">
               <div className="flex-col hidden lg:flex">
                   <p className="font-custom font-extrabold text-hd2">Frequently</p>
                   <p className="font-custom font-extrabold text-hd2">Asked</p>
                   <p className="font-custom font-extrabold text-hd2">Questions</p>
                   <div className="w-[233px] h-[233px] bg-faq-circle flex justify-center items-center mt-6">
                       <div className="w-[200px] h-[200px] rounded-full overflow-hidden relative">
                           <Image className="absolute bottom-[-26px] left-[20px]" width={164} height={183} src={'/svg/faq-mushroom.svg'} alt='faq-mushroom' />
                       </div>
                   </div>
               </div>
               <p className="hidden md:flex sm:flex font-custom font-extrabold text-hd2 sm:text-hd2-mb text-center mb-[56px]">Frequently Asked Questions</p>
               <FAQList />
           </div>
       </div>
    );
};

export default FAQ;
