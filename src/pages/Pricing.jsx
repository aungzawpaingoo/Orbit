import React from 'react'
import PricingHeader from '../components/PricingScreenComp/PricingHeader'
import PricingDataCards from '../components/PricingScreenComp/PricingDataCards'
import PricingTableComparison from '../components/PricingScreenComp/PricingTableComparison'
import FooterComponent from '../components/HomeScreenComp/FooterComponent'
import SafeGurardInfo from '../components/PricingScreenComp/SafeGurardInfo'
import DataCenterDetails from '../components/PricingScreenComp/DataCenterDetails'

const Pricing = () => {
  return (
    <div className='w-full h-full bg-white'>
      <PricingDataCards/>
      <PricingTableComparison/>
      <SafeGurardInfo/>
      <DataCenterDetails/>
      <FooterComponent/>
    </div>
  )
}

export default Pricing