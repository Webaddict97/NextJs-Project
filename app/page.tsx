import Image from 'next/image'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import React from 'react'

function page() {
  return (
    <div>
      <>
      <Navbar />
      <Hero/>
      </>
    </div>
  )
}

export default page;

