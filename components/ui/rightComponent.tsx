'use client'
import React from 'react'

const RightComponent = () => {
  return (
    <div>
      {/* Layered animated cards */}
      <div className="absolute top-4 left-4 bg-accent h-[90%] w-[90%] rounded-lg z-10 transition-all duration-700 hover:scale-105"></div>
      <div className="absolute top-6 left-6 bg-primary h-[90%] w-[90%] rounded-lg z-20 transition-all duration-700 delay-100 hover:scale-105"></div>
      <div className="absolute top-8 left-8 bg-accent h-[90%] w-[90%] rounded-lg z-30 transition-all duration-700 delay-200 hover:scale-105"></div>
      <div className="absolute top-10 left-10 bg-primary h-[90%] w-[90%] rounded-lg z-40 transition-all duration-700 delay-300 hover:scale-105"></div>
      <div className="absolute top-12 left-12 bg-accent h-[90%] w-[90%] rounded-lg z-50 transition-all duration-700 delay-400 hover:scale-105"></div>
      <div className="absolute top-14 left-14 bg-primary h-[90%] w-[90%] rounded-lg z-60 flex flex-col justify-center items-center text-white px-8 text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">
          Welcome to Courage HR
        </h2>
        <p className="text-lg opacity-90 animate-fade-in delay-200">
          Manage your team efficiently. Empower every employee.
        </p>
      </div>
    </div>
  )
}

export default RightComponent
