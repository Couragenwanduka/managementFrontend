 "use client"
import DashBoardHeader from '@/components/ui/dashBoardHeader'
import DashBoardCard from '@/components/ui/dashBoardCard'
import ProductivityChart from '@/components/ui/graph'

const Page = () => {
  return (
    <main className='flex h-screen overflow-hidden'>
        <div className='overflow-scroll hide-scrollbar'>     
            <DashBoardHeader name='Chuted' role='Developer' image='/image/Frame 1597884723 (1).svg'/>
            <DashBoardCard/>
            <ProductivityChart/>
        </div>
    </main>
  )
}

export default Page
