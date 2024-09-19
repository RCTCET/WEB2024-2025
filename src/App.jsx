
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import { HobbyClub } from './pages/Hobby';
import GetInvolvedHero from "./Components//getInvolved/GetInvolvedHero"
import ClubInsightHero from './pages/ClubInsightHero';
import TeamPage from './pages/meetTheTeam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hobbyclub" element={<HobbyClub />} />
          <Route path="get-involved" element={<GetInvolvedHero/>} />
          <Route path="club-insight" element={<ClubInsightHero />} />
          <Route path="meet-the-team" element={<TeamPage />} />  
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
