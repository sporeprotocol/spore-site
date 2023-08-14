import React from 'react';
import ReactMarkdown from 'react-markdown';
import './TextLayout.scss'

interface MarkdownImageRowProps {
    markdown: string;
    SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    ratio: number;
    reverse: boolean;
}

const MarkdownImageRow: React.FC<MarkdownImageRowProps> = ({ markdown, SvgComponent, ratio, reverse = false }) => {
    return (
        <div className="flex items-center" >
            {reverse ?
                <>
                    <div style={{width: `${ratio}px`}}>
                        <SvgComponent style={{width: '100%', height: 'auto'}}/>
                    </div>
                    <div className="markdown-container">
                        <ReactMarkdown children={markdown} />
                    </div>
                </>
                :
                <div className="textLayout-container flex items-center">
                    <div>
                        <ReactMarkdown children={markdown} />
                    </div>
                    <div style={{width: `${ratio}px`, flexShrink: '0'}}>
                        <SvgComponent style={{width: '100%', height: 'auto'}}/>
                    </div>
                </div>
            }
        </div>
    );
};


export default MarkdownImageRow;
