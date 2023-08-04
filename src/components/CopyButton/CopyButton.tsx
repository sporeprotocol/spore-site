import React, { useState } from 'react'
import './CopyButton.scss'

interface CopyButtonProps {
    text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
    const [popoverText, setPopoverText] = useState('');
    const [showPopover, setShowPopover] = useState(false);
    const [hovering, setHovering] = useState(false);

    const copyText = async () => {
        await navigator.clipboard.writeText(text);
        setPopoverText('Copied!');
        setShowPopover(true);
        setTimeout(() => {
            if (!hovering) { // Only hide if not hovering
                setShowPopover(false);
            }
        }, 2000);
    };

    const mouseEnter = () => {
        setHovering(true);
        if (!showPopover) {
            setPopoverText('Copy Code');
            setShowPopover(true);
        }
    }

    const mouseLeave = () => {
        setHovering(false);
        setShowPopover(false);
    }

    return (
        <div className="copy-btn-wrapper">
            {showPopover &&
                <div className="popover">
                    {popoverText}
                    <div className="popover-arrow"></div>
                </div>
            }
            <div
                onClick={copyText}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.6665 2.66666H13.3332C11.8625 2.66666 10.6665 3.86266 10.6665 5.33332V10.6667H5.33317C3.8625 10.6667 2.6665 11.8627 2.6665 13.3333V26.6667C2.6665 28.1373 3.8625 29.3333 5.33317 29.3333H18.6665C20.1372 29.3333 21.3332 28.1373 21.3332 26.6667V21.3333H26.6665C28.1372 21.3333 29.3332 20.1373 29.3332 18.6667V5.33332C29.3332 3.86266 28.1372 2.66666 26.6665 2.66666ZM5.33317 26.6667V13.3333H18.6665L18.6692 26.6667H5.33317ZM26.6665 18.6667H21.3332V13.3333C21.3332 11.8627 20.1372 10.6667 18.6665 10.6667H13.3332V5.33332H26.6665V18.6667Z" fill="black" fill-opacity="0.3"/>
                </svg>
            </div>

        </div>
    );
};

export default CopyButton;
