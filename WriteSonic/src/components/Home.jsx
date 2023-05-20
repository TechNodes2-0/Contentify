import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
         <h1 className="overflow-y-auto">
        <Navbar />
        <Hero />
        <Footer />
      </h1>
    </div>
  )
}
