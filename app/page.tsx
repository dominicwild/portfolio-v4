import HeroBanner from "@/app/_components/HeroBanner";
import BodyBackground from "@/app/_components/BodyBackground";

import {Montserrat} from 'next/font/google'
import React from "react";
import * as fs from "node:fs";
import Markdown from "@/app/_components/Markdown";
import {Projects} from "@/app/_components/Projects";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-montserrat',
    display: 'swap',
})


function Intro() {
    const introMarkdown = fs.readFileSync("markdown/intro.md", "utf8");
    return <div className={`mx-auto max-w-prose flex flex-col gap-y-2 mb-4 lg:px-0 px-8`}>
        <Markdown>
            {introMarkdown}
        </Markdown>
    </div>;
}

export default function Home() {

    return (
        <div className={`${montserrat.className}`}>
            <HeroBanner heightPercent={50}/>
            <div>
                <BodyBackground className={"flex flex-col gap-y-2"}>
                    <div className="relative min-h-[50vh] text-white z-10 pb-4 ">
                        <Intro/>

                        <Projects/>
                    </div>
                </BodyBackground>
            </div>
        </div>
    );
}

export const metadata = {
    title: "Dominic Portfolio",
};