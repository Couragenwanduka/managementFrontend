import React from 'react'
import LoginComponent from '@/components/ui/loginComponent'
import Image from 'next/image'

const Home = () => {
  return (
    <main>
      <div className="relative h-screen">
        {/* Background Image with Overlay */}
        <div className="relative w-full h-full">
          <Image
            src="/image/Moon.jpg" // Replace with the path to your image
            alt="Background"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Makes the image cover the container
            quality={100} // Optional: ensures high-quality image
          />
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        </div>

        {/* Login Form Section on top of the image */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <LoginComponent />
        </div>
      </div>
    </main>
  )
}

export default Home
