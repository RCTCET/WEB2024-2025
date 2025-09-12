import React, { Suspense } from 'react';
import { OurJourney } from '../Components/aboutpage/AvenuesofService';
import AboutAvenue from '../Components/AboutAvenue';

const AboutSection = React.lazy(() => import('../Components/aboutpage/about'));
const Objectives = React.lazy(() => import('../Components/aboutpage/objective'));
// const AvenuesofService = React.lazy(() =>
//   import('../Components/aboutpage/AvenuesofService')
// );

const About = () => {
  return (
    <div className="bg-white dark:bg-stone-900 min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
        <Objectives />
        {/* <AvenuesofService /> */}
        <OurJourney />
        <AboutAvenue/>
      </Suspense>
    </div>
  );
};

export default About;
