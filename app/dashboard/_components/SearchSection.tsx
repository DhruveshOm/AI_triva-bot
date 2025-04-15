import React from 'react'
import { Search } from 'lucide-react'

function SearchSection({ onSearchInput }: { onSearchInput: (value: string) => void }) {
  return (
    <div className='p-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900
    flex flex-col justify-center items-center text-white shadow-lg'>
      <div className='text-center mb-6'>
        <h2 className='text-4xl font-bold mb-2 font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300'>
          Let the Quiz Begin ✨
        </h2>
        <p className='text-lg text-purple-200 italic'>
          "Think fast, score big, learn faster"
        </p>
      </div>
      
      <div className='w-full max-w-2xl px-4'>
        <div className='relative flex items-center'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Search className='h-5 w-5 text-purple-300' />
          </div>
          <input 
            type='text' 
            placeholder='Search quizzes...'
            onChange={(e) => onSearchInput(e.target.value)}
            className='block w-full pl-10 pr-3 py-3 rounded-xl border-0
            bg-white/10 backdrop-blur-sm text-white placeholder-purple-200
            focus:ring-2 focus:ring-purple-400 focus:outline-none
            transition-all duration-200 shadow-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default SearchSection