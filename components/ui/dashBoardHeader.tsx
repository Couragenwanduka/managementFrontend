import React from 'react'
import Text from '../text'
import { Bell } from 'lucide-react'
import Image from 'next/image'


const DashBoardHeader = ({name, image, role}: {name:string, image:string, role:string}) => {
  return (
    <div className='flex h-20 justify-between items-center'>
        <div>
            <Text variant={'heading'} className='flex gap-2'> Welcome Back <span className='text-accent'>{name}</span></Text>
        </div>
        <div className='flex justify-between items-center gap-5 pr-10'>
          <Bell />
          <Image
           src={image}
           alt='user Picture'
           width={30}
           height={30}
          />
         <Text className='text-xs'>
            {role}
         </Text>

        </div>
      
    </div>
  )
}

export default DashBoardHeader
