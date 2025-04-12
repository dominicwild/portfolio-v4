import React, {ReactNode} from 'react';

const BodyBackground = ({children, className}: { children: ReactNode, className: string }) => {
    return (
        <div className={`bg-gray-950 relative overflow-hidden w-full h-[100vh] ${className}`}>
            {/* Pixel Grid */}
            <div className="absolute inset-0 grid grid-cols-[repeat(32,1fr)] grid-rows-[repeat(18,1fr)]">
                {Array.from({length: 32 * 18}).map((_, i) => {
                    const col = i % 32
                    const row = Math.floor(i / 32)
                    const isCircuitNode = (col % 8 === 0 && row % 4 === 0) || (col % 4 === 0 && row % 8 === 0)
                    const isCircuitLine = col % 8 === 0 || row % 4 === 0 || (col % 4 === 0 && row % 8 === 0)

                    return (
                        <div
                            key={i}
                            className={`${isCircuitNode ? "bg-purple-500" : isCircuitLine ? "bg-purple-800/40" : ""}`}
                            style={{
                                opacity: isCircuitNode
                                    ? Math.random() > 0.7
                                        ? 0.9
                                        : 0.5
                                    : isCircuitLine
                                        ? Math.random() > 0.5
                                            ? 0.3
                                            : 0.1
                                        : 0,
                            }}
                        ></div>
                    )
                })}
            </div>

            {/* Retro Grid Lines */}
            <div className="absolute inset-0" style={{perspective: "500px"}}>
                <div
                    className="absolute h-[200%] w-[200%] -left-1/2 -top-1/2"
                    style={{
                        backgroundImage:
                            "linear-gradient(#f81ce580 1px, transparent 1px), linear-gradient(90deg, #f81ce580 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                        transform: "rotateX(60deg)",
                        opacity: 0.15,
                    }}
                ></div>
            </div>

            {/* Color Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-pink-900/30"></div>

            {/* Scan Line Effect */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",
                }}
            ></div>

            {/* CRT Vignette */}
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-gray-950/90"></div>

            {/* Content */}
            <div className="relative z-10 w-full h-full text-white">{children}</div>
        </div>
    );
};

export default BodyBackground;