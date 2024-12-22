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
      <IntoComponent />
      <FeatureCards />
      <FeatureTab/>
      <AISuggestion/>
      <TeamFeature/>
      <CustomerStories/>
      <FooterComponent/>
    </div>
  );
};

export default Home;
