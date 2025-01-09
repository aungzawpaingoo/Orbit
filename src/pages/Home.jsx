import React from 'react';
import IntoComponent from '../components/HomeScreenComp/IntoComponent';
import FeatureCards from '../components/HomeScreenComp/FeatureCards';
import FeatureTab from '../components/HomeScreenComp/FeatureTab';
import AISuggestion from '../components/HomeScreenComp/AISuggestion';
import FooterComponent from '../components/HomeScreenComp/FooterComponent';
import TeamFeature from '../components/HomeScreenComp/TeamFeature';
import CustomerStories from '../components/HomeScreenComp/CustomStories';

const Home = () => {

  
  return (
    <div className="w-full h-full bg-white">
      
      <div className='py-0'>
      <IntoComponent />
      </div>

      <div className='py-10'>
      <FeatureCards />
      </div>

      <div className='py-10'>
      <FeatureTab/>
      </div>

      <div className='py-10'>
      <AISuggestion/>
      </div>
      
      <div className='py-10'>
      <TeamFeature/>
      </div>

      <div className='py-10'>
      <CustomerStories/>
      </div>

      <div className='py-10'>
      <FooterComponent/>
      </div>

    </div>
  );
};

export default Home;
