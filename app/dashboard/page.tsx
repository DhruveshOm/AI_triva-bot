// "use client"
// import React, { useState } from 'react'
// import SearchSection from './_components/SearchSection'
// import TemplteListSection from './_components/TemplateListSection'

// function Dashboard() {
//   const [userSearchInput,setUserSearchInput]=useState<string>()
//   return (
//     <div>
//       {/* Search Sectio */}
//       <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>


//       {/* Template List Section */}
//       <TemplteListSection userSearchInput={userSearchInput}/>
//     </div>
//   )
// }

// export default Dashboard
"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection' // Fixed typo in component name

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>('') // Initialize with empty string instead of undefined

  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />

      {/* Template List Section */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard