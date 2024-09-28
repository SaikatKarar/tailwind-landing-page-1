import React, { createContext, useContext } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const scrollSettings = {
        speed: 0.15,
        isLTR: true,
    };

    const scrollHandler = (element, isLTR, speed) => () => {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        const totalTranslate = isLTR
            ? translateX + (-48 * 4) // initialTranslateLTR
            : -(translateX + (36 * 4)); // initialTranslateRTL

        element.style.transform = `translateX(${totalTranslate}px)`;
    };

    return (
        <ScrollContext.Provider value={{ scrollSettings, scrollHandler }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};
