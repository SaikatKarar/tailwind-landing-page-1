import React from 'react'
import Navbar from './component/Navbar/Navbar'
import HeroSection from './component/HeroSection/HeroSection'
import StepCard from './component/StepCard/StepCard'

function App() {
  return (
    <>
      <Navbar />
      // ----  Main ----
      <main className="mt-10">
        {/* ---- Hero section ---- */}
        <HeroSection />
        {/* <div className='h-[1000px]'></div> */}
        <StepCard />
      </main>
    </>
  )
}

export default App