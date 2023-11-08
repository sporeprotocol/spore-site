// cardData.ts
import {CardProps} from "@/types/Introduction";

const cardData: CardProps[] = [
    {
        img: "/svg/monetize.svg",
        title: "Build & Monetize",
        listItems: ["All digital assets are created with intrinsic value, backed by tokens one can redeem any time.",
                    "Benefit from the increasing use of on-chain space.",
                    "Earn with a community-driven income model backed by CKB."],
        link: "/link1",
    },
    {
        img: "/svg/adoption.svg",
        title: "Mass Adoption",
        listItems: ["Mint Spores, share them with ease, and watch them grow.",
                    "Interact without friction, just smooth user experiences.",
                    "Spore's zero-fee transfers & passkey integration enables adoption across both web2 and beyond."],
        link: "/link2",
    },
    {
        img: "/svg/full-on-chain.svg",
        title: "Fully On-Chain",
        listItems: ["Embrace true security and control with complete on-chain ownership.",
                    "Enhance your creative resilience.",
                    "Storing and sharing your work across the robust decentralized network."],
        link: "/link3",
    },
    {
        img: "/svg/unmatched.svg",
        title: "Unmatched Flexibility",
        listItems: ["Offer you the flexibility to create anything on-chain.",
            "No format restrictions, no traditional protocol limits, unlocking more use cases.",
            "Go even further with dynamic contents."],
        link: "/link2",
    },
];

export default cardData;
