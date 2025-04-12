"use client"

import React, {useEffect, useState} from 'react';
import IsometricMaze from "@/app/_components/IsometricMaze";

const HeroBanner = () => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(window.innerHeight / 2)
    })

    if (height > 0) {
        return <IsometricMaze height={height}/>
    }

    return (
        <>
        </>
    );
};

export default HeroBanner;