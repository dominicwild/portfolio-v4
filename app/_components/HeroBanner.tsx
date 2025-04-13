"use client"

import React, {useEffect, useState} from 'react';
import IsometricMaze from "@/app/_components/IsometricMaze";

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
            </div>

            <div>
                {maze}
            </div>
        </div>
    );
};

export default HeroBanner;