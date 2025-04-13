import HeroBanner from "@/app/_components/HeroBanner";
import BodyBackground from "@/app/_components/BodyBackground";

import {Montserrat} from 'next/font/google'
import React from "react";
import * as fs from "node:fs";
import Markdown from "@/app/_components/Markdown";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-montserrat',
    display: 'swap',
})


export default function Home() {
    const introMarkdown = fs.readFileSync("markdown/intro.md", "utf8");
    return (
        <div className={`${montserrat.className}`}>
            <HeroBanner heightPercent={50}/>
            <div>
                <BodyBackground className={"flex flex-col gap-y-2"}>
                    <div className="relative min-h-[50vh] text-white">
                        <div className={`mx-auto max-w-prose flex flex-col gap-y-2`}>
                            <Markdown>
                                {introMarkdown}
                            </Markdown>
                        </div>
                    </div>
                </BodyBackground>
            </div>
        </div>
    );
}
