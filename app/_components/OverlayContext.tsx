"use client"
import React, {createContext, useContext, useState, ReactNode, useEffect, useMemo, KeyboardEventHandler} from "react";
import {createPortal} from "react-dom";

type OverlayContextType = {
    show: (content: ReactNode) => void;
    hide: () => void;
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

    const show = (node: ReactNode) => setContent(node)

    const values = useMemo(() => {
        return {
            show,
            hide: () => setContent(null)
        }
    }, [])

    const onKeyDownHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key === "Escape") {
            values.hide()
        }
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    const portal = useMemo(() => {
        if (!mounted) return null;
        return createPortal(
            content ? (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                    <div onClick={values.hide} onKeyDown={onKeyDownHandler} className="absolute inset-0"/>
                    <div className="relative z-10">{content}</div>
                </div>
            ) : null,
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
