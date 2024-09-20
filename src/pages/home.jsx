import React from 'react';
import { StatsBar } from '../Components/Stats';
import { MomentsFrame } from '../Components/Moments';
import Legacy from '../Components/legacy'
import EndeavorsCarousel from '../Components/EndeavorsCarousel'
import AvenuesofService from "../Components/aboutpage/AvenuesofService"
import Illuminate from '../Components/aboutSection';
const Home = () => {
  return (
    <>
      <StatsBar />
      <Illuminate/>
      <Legacy/>
      <EndeavorsCarousel/>
      <MomentsFrame />

    </>
  );
};

export default Home;
