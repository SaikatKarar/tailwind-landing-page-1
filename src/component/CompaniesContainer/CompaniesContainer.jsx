import React, { useEffect, useRef } from 'react';
import asset_2 from '../../assets/asset 2.svg';
import { companiesLine1, companiesLine2, companiesLine3 } from '../constants';

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function CompaniesContainer() {
    // Create refs for the lines
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);

    // Define scrollHandler outside of the setupIntersectionObserver
    const scrollHandler = (element, isLTR, speed) => () => {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate = 0;

        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    };

    useEffect(() => {
        // Setup intersection observers when component mounts
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

            const intersectionObserver = new IntersectionObserver(intersectionCallback);
            intersectionObserver.observe(element);
        };

        setupIntersectionObserver(line1Element, true, 0.15);
        setupIntersectionObserver(line2Element, false, 0.15);
        setupIntersectionObserver(line3Element, true, 0.15);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('scroll', scrollHandler(line1Element, true, 0.15));
            document.removeEventListener('scroll', scrollHandler(line2Element, false, 0.15));
            document.removeEventListener('scroll', scrollHandler(line3Element, true, 0.15));
        };
    }, []);

    return (
        <div id="companies-container" className="flex flex-col gap-10 overflow-y-hidden overflow-x-hidden">
            <div id="companies-title" className="flex justify-center gap-2">
                <img className="translate-y-2" src={asset_2} alt="" />
                <span className="font-semibold">APPS POWERED BY TODESKTOP</span>
                <img className="-scale-x-100 translate-y-2" src={asset_2} alt="" />
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
