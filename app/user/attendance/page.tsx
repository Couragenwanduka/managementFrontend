import React from 'react'
import AttendanceAction from '@/components/ui/user/takeAttendance'
import AttendanceHistory from '@/components/ui/user/attendanceHistory'


const Page = () => {
  return (
    <div className=''>
      <AttendanceAction/>
      <AttendanceHistory/>
    </div>
  )
}

export default Page
