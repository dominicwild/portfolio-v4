import React from 'react';
import ReactMarkdown, {Components} from "react-markdown";

const markdownComponents: Components = {
    h1: ({node, ...props}) => (
        <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
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
    code: ({node, className, children, ...props}) => {
        return (
            <pre className="bg-gray-100 rounded p-4 overflow-x-auto text-sm mb-4">
        <code className={`font-mono ${className ?? ''}`} {...props}>
          {children}
        </code>
      </pre>
        );
    },
};

const Markdown = ({children}: { children: string }) => {
    return (
        <ReactMarkdown components={markdownComponents}>
            {children}
        </ReactMarkdown>
    );
};

export default Markdown;