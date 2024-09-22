import React from 'react'
import { ArrowRightIcon, CodeBracketSquareIcon, ComputerDesktopIcon, HandRaisedIcon } from '@heroicons/react/20/solid'
import asset_2 from '../../assets/asset 2.svg';
import { companiesLine1, companiesLine2, companiesLine3 } from '../constants';

const HeroSection = () => {
    return (
        <div id="hero" className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
            <div id="hero-container" className="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl">
                <div id="version-text" className="flex items-center my-6 gap-2 border border-yellow-300 
                bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
                    <p className="font-display font-medium text-yellow-600">v0.21.1: <span className="text-yellow-800">Find-in-page bug fixes</span></p>
                    <ArrowRightIcon className="size-5 text-yellow-600 group-hover:translate-x-1 transition duration-300" />
                </div>
                <div id="hero-features" className="hidden sm:flex gap-8 my-6">
                    <div className="flex justify-center gap-2 items-center text-gray-500">
                        <CodeBracketSquareIcon className='size-5 ' />
                        <p>Code Optional</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-gray-500">
                        <HandRaisedIcon className='size-5' />
                        <p>Drag & drop builder</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-gray-500">
                        <ComputerDesktopIcon className='size-5' />
                        <p>Windows, Mac, Linux</p>
                    </div>
                </div>
                <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">Web app to desktop app in minutes</h1>
                <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
                <div id="buttons-container" className="mt-12 flex gap-4 flex-col sm:flex-row">
                    <button className="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">Download now</button>
                    <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">Read Docs</button>
                </div>
            </div>
            <div id="companies-container" className="flex flex-col gap-10">
                <div id="companies-title" className="flex justify-center gap-2">
                    <img className="translate-y-2" src={asset_2} alt="" />
                    <span className="font-semibold">APPS POWERED BY TODESKTOP</span>
                    <img className="-scale-x-100 translate-y-2" src={asset_2} alt="" />
                </div>
                <div id="lines-group" className="flex flex-col gap-4">

                    {/* Line 1 */}
                    <div id="line1" className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                        {companiesLine1.map((company, index) => (
                            <div key={index} className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                                <img src={company.imgSrc} className="w-12 h-12 md:w-16 md:h-16" alt={company.name} />
                                <span className="text-[12px] font-semibold lg:text-[16px]">{company.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Line 2 */}
                    <div id="line2" className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear">
                        {companiesLine2.map((company, index) => (
                            <div key={index} className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                                <img src={company.imgSrc} className="w-12 h-12 md:w-16 md:h-16" alt={company.name} />
                                <span className="text-[12px] font-semibold lg:text-[16px]">{company.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Line 3 */}
                    <div id="line3" className="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                        {companiesLine3.map((company, index) => (
                            <div key={index} className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                                <img src={company.imgSrc} className="w-12 h-12 md:w-16 md:h-16" alt={company.name} />
                                <span className="text-[12px] font-semibold lg:text-[16px]">{company.name}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection