import React from 'react'
import { ArrowRightIcon, CodeBracketSquareIcon, ComputerDesktopIcon, HandRaisedIcon } from '@heroicons/react/20/solid'
import asset_2 from '../../assets/asset_2.svg';

const HeroSection = () => {
    return (
        <div id="hero" class="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
            <div id="hero-container" class="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl">
                <div id="version-text" class="flex items-center my-6 gap-2 border border-yellow-300 
                bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group">
                    <div class="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
                    <p class="font-display font-medium text-yellow-600">v0.21.1: <span class="text-yellow-800">Find-in-page bug fixes</span></p>
                    <ArrowRightIcon class="size-5 text-yellow-600 group-hover:translate-x-1 transition duration-300" />
                </div>
                <div id="hero-features" class="hidden sm:flex gap-8 my-6">
                    <div class="flex justify-center gap-2 items-center text-gray-500">
                        <CodeBracketSquareIcon className='size-5 ' />
                        <p>Code Optional</p>
                    </div>
                    <div class="flex justify-center gap-2 items-center text-gray-500">
                        <HandRaisedIcon className='size-5' />
                        <p>Drag & drop builder</p>
                    </div>
                    <div class="flex justify-center gap-2 items-center text-gray-500">
                        <ComputerDesktopIcon className='size-5' />
                        <p>Windows, Mac, Linux</p>
                    </div>
                </div>
                <h1 class="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">Web app to desktop app in minutes</h1>
                <p class="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
                <div id="buttons-container" class="mt-12 flex gap-4 flex-col sm:flex-row">
                    <button class="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">Download now</button>
                    <button class="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">Read Docs</button>
                </div>
            </div>
            <div id="companies-container" class="flex flex-col gap-10">
                <div id="companies-title" class="flex justify-center gap-2">
                    <img class="translate-y-2" src={asset_2} alt="" />
                    <span class="font-semibold">APPS POWERED BY TODESKTOP</span>
                    <img class="-scale-x-100 translate-y-2" src={asset_2} alt="" />
                </div>
                <div id="lines-group" class="flex flex-col gap-4">
                    <div id="line1" class="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 3.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 4.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">LifeAt</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 5.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Convy</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 6.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Morgen</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 7.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Campsite</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 8.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Rise</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 9.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">ClickUp</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 10.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Notion</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 11.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Sunsama</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 12.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Beeper</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 13.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Cal</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 14.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Webstudio</span>
                        </div>

                    </div>
                    <div id="line2" class="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear">
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 15.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 16.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 17.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 18.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 19.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 20.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Moises</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 21.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Basedash</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 22.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Cursor</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 23.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Linear</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 24.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Voiceflow</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 25.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Kitemaker</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 26.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Cron</span>
                        </div>
                    </div>
                    <div id="line3" class="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 15.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 16.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 17.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 3.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 4.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 5.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 12.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 13.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 14.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 24.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 25.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src="./assets/asset 26.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                            <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection