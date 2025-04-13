import React, {ReactNode} from 'react';

const BodyBackground = ({children, className}: { children: ReactNode, className: string }) => {
    return (
        <div className={`relative`}>
            <div className="absolute inset-0 bg-[#082568]"></div>
            {/* base color */}
            <div
                className="absolute inset-0 bg-[url('/light-wool.png')] bg-repeat opacity-60"
                aria-hidden
            ></div>
            {children}
        </div>
    );
};

export default BodyBackground;