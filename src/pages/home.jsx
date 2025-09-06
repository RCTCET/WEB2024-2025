import { Suspense } from "react";
import { StatsBar } from '../Components/Stats';
import { MomentsFrame } from '../Components/Moments';
import Legacy from '../Components/legacy'
import EndeavorsCarousel from '../Components/EndeavorsCarousel'
import Anantya from '../Components/aboutSection';
import RotaractClubLayout from "../Components/heroSection"
import EventsDrive from "../Components/withBackend/EventsDrive"
const Home = () => {
  return (
    <>
    <RotaractClubLayout/>
      <StatsBar />
      <Anantya/>
      <EventsDrive/>
      <Legacy/>
      <EndeavorsCarousel/>
      <Suspense fallback={<div>Loading...</div>}>
        <MomentsFrame />
      </Suspense>
    </>
  );
};

export default Home;
