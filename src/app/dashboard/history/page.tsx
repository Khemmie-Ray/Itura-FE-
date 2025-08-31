import React from 'react'
import DayCard from '@/components/dashboard/DayCard'
import MobDayCard from '@/components/dashboard/MobDayCard'
import ProtectedRoute from '@/components/dashboard/ProtectedRoutes'

const History = () => {
  return (
    <ProtectedRoute>
    <div>
      <MobDayCard />
        <DayCard />
    </div>
    </ProtectedRoute>
  )
}

export default History