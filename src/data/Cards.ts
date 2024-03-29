// cardData.ts
import {CardProps} from "@/types/Introduction";

const cardData: CardProps[] = [
    {
        img: "/svg/monetize.svg",
        title: "On-Chain Digital Objects",
        listItems: ["Craft digital objects that are inherently valuable",
                    "Benefit from the increasing use of on-chain space",
                    "Melt back and redeem $CKB tokens anytime"],
        link: "/link1",
    },
    {
        img: "/svg/adoption.svg",
        title: "Mass Adoption",
        listItems: ["Mint Spores, share without costs, watch them spread",
                    "Drive adoption across web2 and beyond with Spore's Zero-Fee transfers & passkey integration"],
        link: "/link2",
    },
    {
        img: "/svg/full-on-chain.svg",
        title: "Private & Secure",
        listItems: ["Own fully on-chain digital objects",
                    "Control over your on-chain presence for privacy",
                    "Minimize exposure to targeted attacks"],
        link: "/link3",
    },
    {
        img: "/svg/unmatched.svg",
        title: "Unmatched Flexibility",
        listItems: ["Free from format constraints",
            "Break the limits of traditional protocol",
            "Explore and unlock more use cases"],
        link: "/link2",
    },
];

export default cardData;
