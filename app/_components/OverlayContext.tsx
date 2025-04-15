"use client"
import {AnimatePresence, motion} from "motion/react";
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
    useMemo,
    KeyboardEventHandler,
    ReactElement,
} from "react";
import {createPortal} from "react-dom";

type OverlayContextType = {
    show: (content: ReactNode) => void;
    hide: () => void;
    addOnHideCallback: (func: Function) => void;
};

const OverlayContext = createContext<OverlayContextType | null>(null);

export const useOverlay = () => {
    const ctx = useContext(OverlayContext);
    if (!ctx) throw new Error("useOverlay must be used within OverlayProvider");
    return ctx;
};

export const OverlayProvider = ({children}: { children: ReactNode }) => {
    const [content, setContent] = useState<ReactNode | null>(null);
    const [mounted, setMounted] = useState(false);
    const [onHideCallbacks, setOnHideCallbacks] = useState<Function[]>([])

    const show = (node: ReactNode) => setContent(node)

    const values = useMemo(() => {
        return {
            show,
            hide: () => {
                setContent(null)
                console.log(onHideCallbacks)
                for (let onHideCallback of onHideCallbacks) {
                    onHideCallback();
                }
            },
            addOnHideCallback: (func: Function) => {
                setOnHideCallbacks((prevOnHideCallbacks) => [
                    ...prevOnHideCallbacks, func
                ])
            }
        }
    }, [onHideCallbacks, setOnHideCallbacks])

    const onKeyDownHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key === "Escape") {
            values.hide()
        }
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    let toRender: ReactElement | null = null;
    console.log(content)
    if (content) {
        console.log("Rendering thing")
        toRender = (
            <motion.div
                className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center transition-all  ease-in-out duration-500"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.3}}
            >
                <div onClick={values.hide} onKeyDown={onKeyDownHandler} className="absolute inset-0"/>
                <div className="relative z-10">{content}</div>
            </motion.div>
        )
    }

    const portal = useMemo(() => {
        if (!mounted) return null;
        return createPortal(
            <AnimatePresence>
                {toRender}
            </AnimatePresence>,
            document.body
        );
    }, [mounted, content]);

    return (
        <OverlayContext.Provider value={values}>
            {children}
            {portal}
        </OverlayContext.Provider>
    );
};
