import React from 'react'
import { Search } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center' >
      <div className='flex gap-2 items-center p-2  border rounded-md 
      max-w-lg bg-white'> 
        <Search/>
        <input type='text' placeholder='Search...'
        className='outline-none'
        />
      </div>
      <div className='flex gap-5 items-center'>
        {/* <h2 className='bg-violet-600 p-1 rounded-full text-xs text-white px-2 '>
        👤
        </h2> */}
        <UserButton/>
      </div>
    </div>
  )
}

export default Header