import React, { useRef, useEffect } from 'react';
import { useScroll } from '../ScrollProvider/ScrollProvider';
import assets_2 from '../../assets/asset 2.svg';
import { companiesLine1, companiesLine2, companiesLine3 } from '../constants';

function CompaniesContainer() {
    const { scrollSettings, scrollHandler } = useScroll(); // Get settings and handler from context

    // Create refs for the lines
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);

    useEffect(() => {
        const line1Element = line1Ref.current;
        const line2Element = line2Ref.current;
        const line3Element = line3Ref.current;

        const setupIntersectionObserver = (element, isLTR, speed) => {
            const intersectionCallback = (entries) => {
                const isIntersecting = entries[0].isIntersecting;
                const handler = scrollHandler(element, isLTR, speed);

                if (isIntersecting) {
                    document.addEventListener('scroll', handler);
                } else {
                    document.removeEventListener('scroll', handler);
                }
            };

            const observer = new IntersectionObserver(intersectionCallback);
            observer.observe(element);
        };

        // Setting up for all lines
        setupIntersectionObserver(line1Element, scrollSettings.isLTR, scrollSettings.speed);
        setupIntersectionObserver(line2Element, !scrollSettings.isLTR, scrollSettings.speed);
        setupIntersectionObserver(line3Element, scrollSettings.isLTR, scrollSettings.speed);

        // Clean up event listeners when component unmounts
        return () => {
            document.removeEventListener('scroll', scrollHandler(line1Element, scrollSettings.isLTR, scrollSettings.speed));
            document.removeEventListener('scroll', scrollHandler(line2Element, !scrollSettings.isLTR, scrollSettings.speed));
            document.removeEventListener('scroll', scrollHandler(line3Element, scrollSettings.isLTR, scrollSettings.speed));
        };
    }, [scrollHandler, scrollSettings]);

    return (
        <div id="companies-container" className="flex flex-col gap-10 overflow-y-hidden overflow-x-hidden">
            <div id="companies-title" className="flex justify-center gap-2">
                <img className="translate-y-2" src={assets_2} alt="" />
                <span className="font-semibold">APPS POWERED BY TODESKTOP</span>
                <img className="-scale-x-100 translate-y-2" src={assets_2} alt="" />
            </div>

            <div id="lines-group" className="flex flex-col gap-4">
                {/* Line 1 */}
                <div
                    id="line1"
                    ref={line1Ref}
                    className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear"
                >
                    {companiesLine1.map((company, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
                        >
                            <img
                                src={company.imgSrc}
                                className="w-12 h-12 md:w-16 md:h-16"
                                alt={company.name}
                            />
                            <span className="text-[12px] font-semibold lg:text-[16px]">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Line 2 */}
                <div
                    id="line2"
                    ref={line2Ref}
                    className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear"
                >
                    {companiesLine2.map((company, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
                        >
                            <img
                                src={company.imgSrc}
                                className="w-12 h-12 md:w-16 md:h-16"
                                alt={company.name}
                            />
                            <span className="text-[12px] font-semibold lg:text-[16px]">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Line 3 */}
                <div
                    id="line3"
                    ref={line3Ref}
                    className="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear"
                >
                    {companiesLine3.map((company, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
                        >
                            <img
                                src={company.imgSrc}
                                className="w-12 h-12 md:w-16 md:h-16"
                                alt={company.name}
                            />
                            <span className="text-[12px] font-semibold lg:text-[16px]">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CompaniesContainer;
