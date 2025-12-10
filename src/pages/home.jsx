import React from 'react'
import HeroSection from '../components/heroSection'
import AiTypes from '../components/aiTypes'
import AiBenefits from '../components/aiBenefits'
import Contact from '../components/contact'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

function Home() {
    return (
        <>
        <NavBar />
        <main>
            <HeroSection />
            <AiTypes />
            <AiBenefits />
            <Contact />
        </main>
        <Footer />
        </>
    )
}

export default Home