import React from 'react';
import ReactMarkdown, {Components} from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

type MarkdownProps = {
    children: string,
    header1ClassName?: string,
    paragraph1ClassName?: string,
}
const Markdown = ({
                      children,
                      header1ClassName = "",
                      paragraph1ClassName = "",
                  }: MarkdownProps) => {
    const markdownComponents: Components = {
        h1: ({node, ...props}) => (
            <h1 className={`text-4xl font-bold mt-8 mb-4 ${header1ClassName}`} {...props} />
        ),
        h2: ({node, ...props}) => (
            <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />
        ),
        h3: ({node, ...props}) => (
            <h3 className="text-2xl font-semibold mt-5 mb-2" {...props} />
        ),
        h4: ({node, ...props}) => (
            <h4 className="text-xl font-medium mt-4 mb-2" {...props} />
        ),
        h5: ({node, ...props}) => (
            <h5 className="text-lg font-medium mt-4 mb-2" {...props} />
        ),
        h6: ({node, ...props}) => (
            <h6 className="text-base font-medium mt-4 mb-2" {...props} />
        ),
        ul: ({node, ...props}) => (
            <ul className="list-disc pl-6 mb-4" {...props} />
        ),
        ol: ({node, ...props}) => (
            <ol className="list-decimal pl-6 mb-4" {...props} />
        ),
        li: ({node, ...props}) => (
            <li className="mb-1" {...props} />
        ),
        p: ({node, ...props}) => (
            <p className={`${paragraph1ClassName}`} {...props} />
        ),
        a: ({node, ...props}) => (
            <a className={`text-blue-700 hover:underline`} {...props} />
        ),
        code: ({node, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            const code = String(children).replace(/\n$/, '')
            return match ? (
                <SyntaxHighlighter
                    style={oneDark as any}
                    language={match[1]}
                    PreTag="div"
                >
                    {code}
                </SyntaxHighlighter>
            ) : (
                <code className={`${className} bg-gray-200 p-0.5 px-1 rounded-xs`} {...props}>
                    {children}
                </code>
            )
        },

    };
    return (
        <ReactMarkdown components={markdownComponents}>
            {children}
        </ReactMarkdown>
    );
};

export default Markdown;