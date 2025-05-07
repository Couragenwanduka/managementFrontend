import React from 'react'

const DashBoardCard = () => {
  return (
    <main>
      <div className='flex justify-between mt-10 mr-7 gap-2'>
        {/* Attendance Widget */}
        <div className="bg-primary/10 border border-primary rounded-xl shadow-md p-4 w-[19.7rem] h-36 flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2 text-primary">Today’s Attendance</h2>
          <p className="text-muted">Clocked In: <span className="text-info font-semibold">9:00 AM</span></p>
        </div>

        {/* Tasks Widget */}
        <div className="bg-accent/10 border border-accent rounded-xl shadow-md p-4 w-[19.7rem] h-36 flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2 text-accent">Your Tasks</h2>
          <ul className="text-muted list-disc ml-5">
            <li>Update payroll info</li>
            <li>Submit daily report</li>
          </ul>
        </div>

        {/* Leave Balance */}
        <div className="bg-success/10 border border-success rounded-xl shadow-md p-4 w-[19.7rem] h-36 flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2 text-success">Leave Balance</h2>
          <p className="text-success font-medium">12 days remaining</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="mt-8 bg-highlight/10 border border-highlight rounded-xl shadow-md p-4 w-[97%]">
        <h2 className="text-lg font-bold mb-4 text-highlight">Latest Announcements</h2>
        <div className="space-y-1 text-muted">
          <p>📢 Company retreat scheduled for June 15th.</p>
          <p>📢 Company retreat scheduled for June 15th.</p>
          <p>📢 Company retreat scheduled for June 15th.</p>
          <p>📢 Company retreat scheduled for June 15th.</p>
        </div>
      </div>
    </main>
  )
}

export default DashBoardCard
