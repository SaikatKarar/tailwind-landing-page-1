import React from 'react'
import Navbar from './component/Navbar/Navbar'
import HeroSection from './component/HeroSection/HeroSection'

function App() {
  return (
    <>
      <Navbar />
      // ----  Main ----
      <main className="mt-10">
        {/* ---- Hero section ---- */}
        <HeroSection />
        <div className='h-[1000px]'></div>
      </main>
    </>
  )
}

export default App