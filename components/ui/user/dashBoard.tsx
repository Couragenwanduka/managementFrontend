'use client'
import React from 'react'
import { LayoutDashboard, FolderOpenDot, ListTodo, BookPlus, HandCoins, UserRoundPen, LogOut} from 'lucide-react';
import Text from '@/components/text';
import { usePathname } from 'next/navigation';
import Link from 'next/link';



const DashBoard = () => {
    const pathname = usePathname();
    const details = [
        {name: 'Dashboard', icon:<LayoutDashboard/> , link:'/user/dashboard'},
        {name:'Attendance', icon:<FolderOpenDot /> , link:'/user/attendance'},
        {name:'Tasks', icon:<ListTodo />, link:'/user/task'},
        {name:'Leaves', icon:<BookPlus />, link:'/user/leave'},
        {name:'Payroll', icon:<HandCoins />, link:'/user/payroll'},
        {name:'Profile', icon:<UserRoundPen />, link:'/user/profile'},
        {name:'Logout', icon:<LogOut />, link:'/user/layout'}
    ]
  return (
    <aside className='w-[100%] bg-primary h-screen flex flex-col gap-10 items-center'>
        <Text className='mt-16 text-white' variant={'heading'}>
            CourageGroup
        </Text>
        <div className='flex flex-col justify-between gap-5'>
             {details.map((items, index)=> (
               <Link
                 href={items.link}
                 key={index}
                 className={`flex items-center gap-2 w-72 ml-24 pl-10 pt-5 h-14 rounded-3xl cursor-pointer transition-all 
                    ${pathname === items.link ? 'bg-white text-primary font-bold' : 'text-white/80'}`}
               >
                    <p className='h-10 w-10'>{items.icon}</p>
                    <p className='h-9'>{items.name}</p>
               </Link>
             ))}
        </div>

    </aside>
  )
}

export default DashBoard
