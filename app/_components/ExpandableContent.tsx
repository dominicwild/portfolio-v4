"use client";

import React, {useState, useRef, useEffect} from "react";
import {CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ChevronDown, ChevronUp} from "lucide-react";
import Markdown from "@/app/_components/Markdown";

interface ExpandableContentProps {
    markdown: string;
}

const ExpandableContent = ({markdown}: ExpandableContentProps) => {
    const [expanded, setExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            // Scroll height gets full height of content, even the part that's not visible
            const height = contentRef.current.scrollHeight;
            setContentHeight(height);
        }
    }, [markdown]);

    const collapsedHeight = 200;
    const needsExpansion = contentHeight > collapsedHeight;

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <CardContent
                ref={contentRef}
                className={"flex-grow overflow-hidden transition-all duration-500 ease-in-out relative"}
                style={{
                    maxHeight: expanded ? `${contentHeight}px` : `${collapsedHeight}px`,
                }}
            >
                {!expanded && needsExpansion && (
                    <div
                        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none"></div>
                )}
                <Markdown
                    header1ClassName={"!-mt-1"}
                    paragraph1ClassName={"mb-4"}
                >
                    {markdown}
                </Markdown>
            </CardContent>
            {needsExpansion && (
                <CardFooter className={"justify-center mt-auto"}>
                    <Button
                        variant="outline"
                        onClick={toggleExpand}
                        className="w-full flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group"
                    >
                        <span>{expanded ? "Show Less" : "Read More"}</span>
                        <div
                            className={`transform transition-transform duration-300 ${expanded ? "rotate-180" : ""} group-hover:animate-bounce`}
                        >
                            <ChevronDown className="h-4 w-4"/>
                        </div>
                    </Button>
                </CardFooter>
            )}
        </>
    );
};

export default ExpandableContent;
