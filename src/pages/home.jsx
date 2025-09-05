import { StatsBar } from '../Components/Stats';
import { MomentsFrame } from '../Components/Moments';
import Legacy from '../Components/legacy'
import EndeavorsCarousel from '../Components/EndeavorsCarousel'
import Anantya from '../Components/aboutSection';
import RotaractClubLayout from "../Components/heroSection"
import EventsDrive from "../Components/withBackend/EventsDrive"
import SaaFineTable from '../Components/withBackend/SaaFineTable';
const Home = () => {
  return (
    <>
    <RotaractClubLayout/>
      <StatsBar />
      <Anantya/>
      <EventsDrive/>
      <Legacy/>
      <EndeavorsCarousel/>
      <MomentsFrame />
    </>
  );
};

export default Home;
