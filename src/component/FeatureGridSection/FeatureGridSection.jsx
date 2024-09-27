// import React from 'react'
// import { featureGridItems } from '../constants'

// const FeatureGridSection = () => {
//     return (
//         <div id="bento-grid" className="container">
//             <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal">ToDesktop handles the details</h2>
//             <div id="grid-container" className="flex flex-col gap-6 lg:grid lg:grid-cols-3" style={{ gridAutoRows: "96px" }}>
//                 {featureGridItems.map((item, index) => (
//                     <div
//                         key={index}
//                         // why grid layout not work this code
//                         className={`row-start-${item.rowStart || '1'} row-end-${item.rowEnd || '2'} group rounded-2xl p-[1px] gradient-hover-outer`}
//                     >
//                         <div className="gradient-hover-inner rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
//                             <h3 className="text-2xl">{item.title}</h3>
//                             {item.description && (
//                                 <p className="text-lg text-center font-light">{item.description}</p>
//                             )}
//                             <img src={item.imgSrc} alt={item.title} />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default FeatureGridSection

import React from 'react'
import { featureGridItems } from '../constants'

const FeatureGridSection = () => {
    return (
        <div id="bento-grid" className="container">
            <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal">ToDesktop handles the details</h2>
            <div id="grid-container" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "96px" }}>
                {featureGridItems.map((item, index) => (
                    <div
                        key={index}
                        className={`row-start-${item.rowStart || '1'} row-end-${item.rowEnd || '2'} group rounded-2xl p-[1px] gradient-hover-outer`}
                    >
                        <div className="gradient-hover-inner rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
                            <h3 className="text-2xl">{item.title}</h3>
                            {item.description && (
                                <p className="text-lg text-center font-light">{item.description}</p>
                            )}
                            <img src={item.imgSrc} alt={item.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureGridSection