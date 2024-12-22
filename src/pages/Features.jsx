import React from 'react'
import FeaturesHero from '../components/FeatureScreenComp/FeaturesHero'
import InfoTab from '../components/FeatureScreenComp/InfoTab'
import AdditionalInfoGallery from '../components/FeatureScreenComp/AdditionalInfoGallery'
import ScalableCard from '../components/FeatureScreenComp/ScalableCard'
import UsersDetails from '../components/FeatureScreenComp/UsersDetails'
import DesignBanner from '../components/FeatureScreenComp/DesignBanner'
import FooterComponent from '../components/HomeScreenComp/FooterComponent'

const Features = () => {
  return (
    <div className='w-full h-full bg-white'>
     <FeaturesHero/>
     <InfoTab/>
     <AdditionalInfoGallery/>
     <ScalableCard/>
     <DesignBanner/>
     <UsersDetails/>
     <FooterComponent/>
    </div>
  )
}

export default Features