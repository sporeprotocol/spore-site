import React from 'react';
import NoteBoard from "../components/NoteBoard/NoteBoard";

interface ContentItem {
    header: string;
    content: (string | React.ReactElement)[];
}


const contentData: ContentItem[] = [
    {
        header: 'Customize Configuration',
        content: [
            React.createElement(NoteBoard, { header: "🍡 Ingredients:", contents: ["Terminal", "Spore Secp256k1 example", "Your testing accounts (optional)"] }),
            '- If you wish to use your testing accounts or modify the SporeConfig of the examples, you can do so in the examples/secp256k1/utils/config.ts file:',
            ` \`\`\`javascript
// Inside utils/config.ts
export const defaultSporeConfig: SporeConfig = {
    /* Your custom SporeConfig */
};
export const accounts: string[] = [
    /* Your private keys */
];
\`\`\` `
        ]
    }
];


export default contentData;
