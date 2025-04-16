"use client"
import {motion} from "motion/react";
import React, {useEffect, useState} from "react";
import {useOverlay} from "@/app/_components/OverlayContext";

export const PopoutCard = ({imageUrl}: { imageUrl: string }) => {
    const [isPopout, setIsPopout] = useState(false);
    const overlay = useOverlay();

    useEffect(() => {
        overlay.addOnHideCallback(() => {
            setIsPopout(false);
        })
    }, [setIsPopout])

    let imageToRender = <></>

    if (!isPopout) {
        imageToRender = (
            <motion.div className={""} layoutId={imageUrl}>
                <div
                    data-slot="card-image"
                    className={"w-full overflow-hidden rounded-t-xl h-[20rem]"}
                >
                    <img
                        src={imageUrl}
                        className="object-cover w-full h-full"
                    />
                </div>
            </motion.div>
        )
    }

    return (
        <div className={"relative group"} onClick={() => {
            setIsPopout(true)
            overlay.show(
                <motion.div
                    data-slot="card-image"
                    className={"flex items-center justify-center"}
                    layoutId={imageUrl}
                >
                    <img
                        src={imageUrl}
                        className="object-contain max-h-[80vh] max-w-[80vw]"
                    />
                </motion.div>
            )
        }}>
            <div
                className={`flex text-white justify-center items-center align-middle absolute top-0 left-0 inset-0 
                w-full h-full  transition-all duration-100 opacity-0 hover:opacity-100 cursor-pointer
                 bg-black/50 z-20 rounded-t-xl`}>

                View Content
            </div>

            <div className={"h-[20rem]"}>
                {imageToRender}
            </div>
        </div>
    )
}