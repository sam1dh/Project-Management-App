import React from 'react'
import Navbar from "@/app/components/Navbar/Index"
import Sidebar from "@/app/components/Sidebar/index1";
const dashboardwrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    // flex we used to sperate the content and sidebar with equal manner
    // min-h-screen will be actually take the height of the sidebar with minimum height of the screen 
    // width full - w-full 
    // sidebar - csss
    // md:pl-64 means media query : padding left 64 size
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* Side bar  this is the right side part of the dashboard */ }
        <Sidebar/>
        <main 
        className={'flex w-full flex-col bg-gray-50  dark:bg-black md:pl-64'}>
          <Navbar/>
            {children}
        </main>
    </div>
    
  )
}

export default dashboardwrapper