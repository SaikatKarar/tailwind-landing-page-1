import React, { useRef, useEffect } from 'react';
import { companiesFeatureLine } from '../constants';
import { useScroll } from '../ScrollProvider/ScrollProvider';

function CompaniesFeatureLine() {
    const { scrollSettings, scrollHandler } = useScroll(); // Use context data
    const containerRef = useRef(null); // Attach ref to the container, not individual items

    useEffect(() => {
        const containerElement = containerRef.current;
        const handler = scrollHandler(containerElement, scrollSettings.isLTR, scrollSettings.speed);

        // Setup scroll event listener
        document.addEventListener('scroll', handler);

        // Cleanup on unmount
        return () => document.removeEventListener('scroll', handler);
    }, [scrollSettings, scrollHandler]); // Make sure to include `scrollHandler` in the dependency array

    return (
        <div className="container mx-auto mt-0 lg:mt-4">
            <div className="border rounded-lg overflow-hidden p-4">
                <div ref={containerRef} className='flex justify-center'>
                    {companiesFeatureLine.map((e, idx) => (
                        <div key={idx} className="flex gap-8 p-6">
                            <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                                {e.title}
                            </h3>
                            <span>•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CompaniesFeatureLine;
