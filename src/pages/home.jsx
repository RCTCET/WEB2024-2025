import React from 'react';
import { StatsBar } from '../Components/Stats';
import { MomentsFrame } from '../Components/Moments';
import Legacy from '../Components/legacy'

const Home = () => {
  return (
    <>
      <StatsBar />
      <Legacy/>
      <MomentsFrame />

    </>
  );
};

export default Home;
