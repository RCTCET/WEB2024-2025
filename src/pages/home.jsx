import React from 'react';
import { StatsBar } from '../Components/Stats';
import { MomentsFrame } from '../Components/Moments';
import Legacy from '../Components/legacy'
import EndeavorsCarousel from '../Components/EndeavorsCarousel'
import AvenuesofService from "../Components/aboutpage/AvenuesofService"
import Illuminate from '../Components/aboutSection';
import RotaractClubLayout from "../Components/heroSection"
const Home = () => {
  return (
    <>
    <RotaractClubLayout/>
      <StatsBar />
      <Illuminate/>
      <Legacy/>
      <EndeavorsCarousel/>
      <MomentsFrame />

    </>
  );
};

export default Home;
