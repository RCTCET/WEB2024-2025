
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import { HobbyClub } from './pages/Hobby';
import GetInvolvedHero from "./Components//getInvolved/GetInvolvedHero"
import { Achievement } from './pages/Achievement';
import ClubInsightHero from './pages/ClubInsightHero';
import TeamPage from './pages/MeetTheTeam';
import About from './pages/about';
import Projects from './pages/Projects';
import ContactForm from './pages/contactus';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hobbyclub" element={<HobbyClub />} />
          <Route path="about" element={<About />} />
          <Route path="get-involved" element={<GetInvolvedHero />} />
          <Route path="achievement" element={<Achievement />} />
          <Route path="club-insight" element={<ClubInsightHero />} />
          <Route path="meet-the-team" element={<TeamPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;

