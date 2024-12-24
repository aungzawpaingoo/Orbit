import React from 'react'
import AppRow from '../components/DashboardComp/AppsRow'
import FrequentPlaces from '../components/DashboardComp/FrequentPlaces'
import GreetingTitle from '../components/DashboardComp/GreetingTitle'
import Recent from '../components/DashboardComp/Recent'
import LoginFooter from '../components/LogInScreenComp/LoginFooter'

const Dashboard = () => {
  return (
    <div className='w-full bg-white'>
      <GreetingTitle title={"Good Day, Aung Zaw Paing Oo"}/>
      <AppRow/>
      <FrequentPlaces/>
    </div>
  )
}

export default Dashboard