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
            <div className={"absolute w-full h-full bg-black opacity-30"}/>

            <div>
                {maze}
            </div>
        </div>
    );
};

export default HeroBanner;