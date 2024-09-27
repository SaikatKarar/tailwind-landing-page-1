import React from 'react'
import Navbar from './component/Navbar/Navbar'
import HeroSection from './component/HeroSection/HeroSection'
import StepCard from './component/StepCard/StepCard'
import FeatureGridSection from './component/FeatureGridSection/FeatureGridSection'

function App() {
  return (
    <>
      <Navbar />
      // ----  Main ----
      <main className="mt-10">
        {/* ---- Hero section ---- */}
        <HeroSection />

        <StepCard />
        <FeatureGridSection />

        <div className='h-[1000px]'></div>
      </main>
    </>
  )
}

export default App