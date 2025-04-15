"use client"
import {CardImage} from "@/components/ui/card";
import {motion, Variants} from "motion/react";
import React, {useEffect, useState} from "react";
import {useOverlay} from "@/app/_components/OverlayContext";
import {cn} from "@/lib/utils";

const parentVariants: Variants = {
    exit: {
        transition: {duration: 2},
        // transition: {duration: 1, times: [0, 0.25, 0.5, 1]},
        // top: ["0%", "-200%", "-110%", "50%"],
        // left: ["0%", "0%", "50%", "50%"],
        position: ["initial", "initial", "fixed"],
        // transform: ["", "", "translate(-50%, -50%)", "translate(-50%, -50%)"],
        transform: ["translate(0%, 0%)", "translate(0%, -250%)"],
        zIndex: 100,
    },
    visible: {
        // opacity: [1, 1, 1],
        transition: {duration: 1, times: [0, 0.25, 0.5, 1]},
        // top: 0,
        // left: 0,
        transform: "translate(0%, 0%)"
    }
};

export const PopoutImage = ({imageUrl}: { imageUrl: string }) => {
    const [isPopout, setIsPopout] = useState(false);
    const overlay = useOverlay();

    useEffect(() => {
        overlay.addOnHideCallback(() => {
            setIsPopout(false);
        })
    }, [setIsPopout])

    console.log(isPopout)

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

            <div className={"h-[20rem] "}>
                <motion.div
                    className={"absolute"}
                    variants={parentVariants}
                    animate={isPopout ? "exit" : "visible"}
                >
                    <div
                        data-slot="card-image"
                        className={"relative w-full overflow-hidden rounded-t-xl h-[20rem]"}
                    >
                        <img
                            src={imageUrl}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}