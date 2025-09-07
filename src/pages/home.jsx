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
    <div className="bg-white dark:bg-stone-900 min-h-screen">
      <RotaractClubLayout/>
      {/* <StatsBar /> */}
      <Anantya/>
      <EventsDrive/>
      <Legacy/>
      <EndeavorsCarousel/>
      <Suspense fallback={<div>Loading...</div>}>
        <MomentsFrame />
      </Suspense>
    </div>
  );
};

export default Home;
