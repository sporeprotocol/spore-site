export interface Question {
    question: string;
    answer: string;
}

export const questionsData: Question[] = [
    {
        question: "Is Spore an NFT?",
        answer: `Yes and no. [Spore](https://docs.spore.pro/basics/spore-101#what-is-a-spore) is a special kind of non-fungible token that establishes an intrinsic link between the token’s content and its value. Also, the content held by Spore is not only fully on-chain, but generative and dynamic as well.`
    },
    {
        question: "What kind of content can I put on the Spore Protocol?",
        answer: "The Spore Protocol allows you to put any content under 500kb in any format on-chain. You name it! This could be static or dynamic content, you can create unique, engaging digital experiences, offering more use-cases than many other solutions currently available."
    },
    {
        question: "How is the Spore Protocol different from other blockchain technologies in terms of content storage?",
        answer: "Unlike other protocols, the Spore Protocol stores content [fully on-chain](https://docs.spore.pro/basics/spore-101#what-does-it-mean-to-be-fully-on-chain), assuring true ownership. Once your content is on the Spore Protocol, it becomes tamper-proof, immutable, and permanent."
    },
    {
        question: "How does the Spore Protocol handle transaction fees?",
        answer: "With the Spore Protocol, digital assets benefit from [Zero-fee Transfers](https://docs.spore.pro/basics/spore-101#do-i-need-to-hold-ckb-to-transfer-and-receive-spores). This innovative feature removes the hassle of needing tokens to share creations, enabling audiences to receive and spread content without friction. It opens up opportunities to engage with non-crypto users like never before and drive mass-adoption."
    },
    {
        question: "How can I benefit from the protocol success?",
        answer: "Creators using the Spore Protocol can earn a stake in CKB, enabling both direct profits from Spore sales in cash or crypto and passive income from increased on-chain space usage. Each Spore, created with intrinsic value, grants holders the unique ability to 'melt' it at any time, converting it into underlying CKBytes for on-demand access to the contributed network value."
    },
    {
        question: "Is coding experience required to use Spore Protocol?",
        answer: "Yes, some coding experience is necessary to effectively use the Spore Protocol. However, comprehensive guides and resources are available in the [documentation](https://docs.spore.pro/) to assist users with varying levels of coding experience."
    },
    {
        question: "How do I get started with Spore Protocol?",
        answer: "To get started with the Spore Protocol, head over to our [documentation](https://docs.spore.pro/). There, you will find comprehensive guides and resources that will help you navigate the protocol and make the most out of its features."
    },
];
