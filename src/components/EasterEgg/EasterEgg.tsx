import { motion, AnimatePresence } from 'framer-motion';
import React, {useEffect} from 'react';
import Image from "next/image";

const cardVariants = {
    initial: {
        rotateY: 180,
        opacity: 0,
        scale: 0,
    },
    in: {
        rotateY: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 1 }
    },
    out: {
        rotateY: 0,
        opacity: 0,
        scale: 1,
        transition: { duration: 1 }
    }
};

const EasterEgg: React.FC<{ onClose: () => void, isVisible: boolean }> = ({ onClose, isVisible }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // 组件卸载时重置滚动
        return () => {
            document.body.style.overflow = '';
        };
    }, []);
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 right-0 bottom-0 bg-Brand bg-easter-egg z-[999] flex flex-col justify-center items-center gap-4"
                    variants={cardVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                >

                    <Image width={44} height={44} src={'/svg/menu-close.svg'} alt={'close'} className="absolute top-16 right-16 cursor-pointer" onClick={onClose}/>
                    <div className="font-extrabold font-custom text-hd3 text-center">Natural Spore Facts</div>
                    <div className="font-normal font-custom text-b1 text-BrandDarkGray text-center">OF THE DAY</div>
                    <div className="w-[644px] h-[430px] relative flex items-center justify-center">
                        <Image className="absolute top-0 left-0" width={39} height={30} src={'/svg/up-quotation.svg'} alt={'up'}/>
                        <div className="w-[688px] h-[330px] rounded-[32px] border-4 border-BrandBlack bg-white text-[22px] font-[400] px-[82px] font-inter text-BrandBlack flex items-center">
                            Some spores are true adventurers, catching the wind and traveling an incredible 1,243 miles (2000 km)!
                        </div>
                        <Image className="absolute bottom-0 right-0" width={39} height={30} src={'/svg/down-quotation.svg'} alt={'up'}/>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default EasterEgg;
