import React, { Suspense } from 'react';
import { OurJourney } from '../Components/aboutpage/AvenuesofService';

const AboutSection = React.lazy(() => import('../Components/aboutpage/about'));
const Objectives = React.lazy(() => import('../Components/aboutpage/objective'));
const AvenuesofService = React.lazy(() =>
  import('../Components/aboutpage/AvenuesofService')
);

const About = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutSection />
      <Objectives />
      {/* <AvenuesofService /> */}
      <OurJourney />
    </Suspense>
  );
};

export default About;
