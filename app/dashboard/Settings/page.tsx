import { UserProfile } from '@clerk/nextjs'

function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="max-w-3xl mx-auto">
        <UserProfile 
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: 'shadow-none border border-gray-200 w-full',
              navbar: 'border-b border-gray-200',
            }
          }}
        />
      </div>
    </div>
  )
}

export default SettingsPage