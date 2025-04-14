"use client"

import React, {useEffect, useState} from 'react';
import IsometricMaze from "@/app/_components/IsometricMaze";
import {Button} from "@/components/ui/button";
import {SiGithub} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import {LinkedinIcon} from "lucide-react";

const HeroBanner = ({heightPercent}: { heightPercent: number }) => {
    const [height, setHeight] = useState(0)

    // First render is always server side, so we need useEffect to access the window object, as useEffect only runs on client
    useEffect(() => {
        setHeight((window.innerHeight / 100) * heightPercent)
    })

    let maze = <></>

    if (height > 0) {
        maze = <IsometricMaze height={height}/>
    }

    const buttonSizeClass = "h-14 w-14"

    return (
        <div className={"relative"}>
            <div className={"absolute w-full h-full bg-black opacity-30"}>
            </div>
            <div className={"absolute w-full h-full flex justify-center items-center text-white flex-col"}>
                <h1 className={"text-5xl block mb-2"}>
                    Dominic Wild
                </h1>
                <h2 className={"text-2xl"}>
                    Pragmatic Software Engineer
                </h2>
                <div className={"flex gap-x-2 mt-2"}>
                    <Button asChild className={`rounded-full ${buttonSizeClass} bg-transparent border !p-0`}>
                        <Link href={"https://github.com/dominicwild/"} target={"_blank"}>
                            <SiGithub className={"!h-8 !w-8"}/>
                        </Link>
                    </Button>
                    <Button asChild className={`rounded-full ${buttonSizeClass} bg-transparent border !p-0`}>
                        <Link href={"https://www.linkedin.com/in/dominic-wild-563576178/"} target={"_blank"}>
                            <LinkedinIcon className={"!h-8 !w-8"}/>
                        </Link>
                    </Button>
                </div>
            </div>

            <div>
                {maze}
            </div>
        </div>
    );
};

export default HeroBanner;