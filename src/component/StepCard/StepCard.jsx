import React from 'react'
import { stepsData } from '../constants'
import { CheckIcon } from '@heroicons/react/20/solid'

const StepCard = () => {
    return (
        <div id="steps" className="flex flex-col gap-6 container mx-auto mt-20">
            <h2 className="text-5xl sm:font-semibold mb-14">How it works</h2>
            {stepsData.map((stepData, index) => (
                <div key={index} className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">{stepData.step}</span>
                        <h3 className="text-4xl font-bold text-[#1F2937]">{stepData.title}</h3>
                        <p className="text-lg font-light">{stepData.description}</p>
                        <ul className="grid grid-cols-2 gap-2">
                            {stepData.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <CheckIcon className='size-5 text-gray-500' />
                                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">{feature}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-12">
                        <img src={stepData.image} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StepCard