"use client"
import {CardImage} from "@/components/ui/card";
import {motion} from "motion/react";
import React, {useEffect, useState} from "react";
import {useOverlay} from "@/app/_components/OverlayContext";

const variants = {
    enter: {
        y: ["100%", "50%", "-100%"], // bottom → middle → top
        opacity: [0, 1, 0],
        transition: {duration: 1.5, times: [0, 0.5, 1]},
    },
    exit: {
        y: ["-100%", "50%", "100%"], // reverse: top → middle → bottom
        opacity: [0, 1, 0],
        transition: {duration: 1.5, times: [0, 0.5, 1]},
    },
};

export const PopoutCard = ({imageUrl}: { imageUrl: string }) => {
    const [isPopout, setIsPopout] = useState(false);
    const overlay = useOverlay();

    useEffect(() => {
        overlay.addOnHideCallback(() => {
            setIsPopout(false);
        })
    }, [setIsPopout])

    console.log("isPopout", isPopout);

    return (
        <div className={"relative group"} onClick={() => {
            setIsPopout(true)
            overlay.show(<div></div>)
        }}>
            <div
                className={`flex text-white justify-center items-center align-middle absolute top-0 left-0 inset-0 
                w-full h-full  transition-all duration-100 opacity-0 hover:opacity-100 cursor-pointer
                 bg-black/50 z-20 rounded-t-xl`}>

                View Content
            </div>

            <motion.div
                className={""}
            >
                <CardImage
                    src={imageUrl}
                    alt=""
                    className={"h-[20rem]"}
                />
            </motion.div>
        </div>
    )
}