'use client'
import React from 'react'

const DashBoardCard = () => {
  return (
    <main className='p-4 md:p-6'>
      {/* Top widgets */}
      <div className='flex  justify-between gap-4 mt-10'>
        {/* Attendance Widget */}
        <div className="bg-primary/10 border border-primary rounded-xl shadow-md p-4 w-full md:w-[32%] h-36 flex flex-col items-center justifycenter">
          <h2 className="text-lg font-bold mb-2 text-primary">Today’s Attendance</h2>
          <p className="text-muted">Clocked In: <span className="text-info font-semibold">9:00 AM</span></p>
        </div>

        {/* Tasks Widget */}
        <div className="bg-accent/10 border border-accent rounded-xl shadow-md p-4 w-full md:w-[32%] h-36 flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold mb-2 text-accent">Your Tasks</h2>
          <ul className="text-muted list-disc text-sm ml-4">
            <li>Update payroll info</li>
            <li>Submit daily report</li>
          </ul>
        </div>

        {/* Leave Balance */}
        <div className="bg-success/10 border border-success rounded-xl shadow-md p-4 w-full md:w-[32%] h-36 flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold mb-2 text-success">Leave Balance</h2>
          <p className="text-success font-medium text-sm">12 days remaining</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="mt-10 bg-highlight/10 border border-highlight rounded-xl shadow-md p-6 w-full">
        <h2 className="text-lg font-bold mb-4 text-highlight">Latest Announcements</h2>
        <div className="space-y-2 text-muted text-sm">
          <p>📢 PTA meeting scheduled for September 25th.</p>
          <p>📢 Result uploads deadline is October 5th.</p>
          <p>📢 Admin training on the new feedback system this Friday.</p>
          <p>📢 Teachers to finalize class registers before next week.</p>
        </div>
      </div>
    </main>
  )
}

export default DashBoardCard;
