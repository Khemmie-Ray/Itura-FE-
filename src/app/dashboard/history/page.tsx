import React from 'react'
import DayCard from '@/components/dashboard/DayCard'
import MobDayCard from '@/components/dashboard/MobDayCard'
import Profile from '@/components/dashboard/Profile'

const History = () => {
  return (
    <div>
      <div className='flex justify-end'>
      <Profile />
      </div>
      <MobDayCard />
        <DayCard />
    </div>
  )
}

export default History