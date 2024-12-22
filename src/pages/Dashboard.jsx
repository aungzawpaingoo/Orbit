import React from 'react'
import AppRow from '../components/DashboardComp/AppsRow'
import FrequentPlaces from '../components/DashboardComp/FrequentPlaces'
import GreetingTitle from '../components/DashboardComp/GreetingTitle'
import Recent from '../components/DashboardComp/Recent'

const Dashboard = () => {
  return (
    <div>
      <GreetingTitle/>
      <AppRow/>
      <FrequentPlaces/>
      <Recent/>
    </div>
  )
}

export default Dashboard