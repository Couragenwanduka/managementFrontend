import React from 'react'
import ProfilePage from '@/components/ui/admin/profile'

const page = () => {
  return (
    <div>
        <ProfilePage profileUser={{ name: 'John Doe', email: 'john.doe@example.com' }}/>
    </div>
  )
}

export default page
