
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import GetInvolvedHero from "./Components//getInvolved/GetInvolvedHero"
import { Achievement } from './pages/Achievement';
import TeamPage from './pages/meetTheTeam';
import About from './pages/about';
import Projects from './pages/projects';
import ContactForm from './pages/contactus';
import { Avenue } from './Components/Avenue';
import { ThemeProvider } from './context/themeContext';
import SaaFineTable from './Components/withBackend/SaaFineTable';
import FeedBack from './Components/withBackend/FeedBack';


function App() {
  return (
    <ThemeProvider>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          {/* club hub start */}
          <Route path="get-involved" element={<GetInvolvedHero />} />
          <Route path="avenue" element={<Avenue />} />
          <Route path="achievement" element={<Achievement />} />
          <Route path="saa-fine" element={<SaaFineTable/>} />
          <Route path="meet-the-team" element={<TeamPage />} />
          <Route path="feedback" element={<FeedBack />} />
          
          {/* club hub finish */}
          <Route path="contact" element={<ContactForm />} />
          
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
