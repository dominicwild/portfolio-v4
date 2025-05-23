import React, {ReactNode} from 'react';

const BodyBackground = ({children, className}: { children: ReactNode, className: string }) => {
    return (
        <div className={`relative`}>
            <div className="absolute inset-0 bg-[#082568]"></div>
            <div
                className="absolute inset-0 bg-[url('/light-wool.png')] bg-repeat opacity-60 z-0"
                aria-hidden
            ></div>
            {children}
        </div>
    );
};

export default BodyBackground;