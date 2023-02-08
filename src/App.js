import ResponsiveAppBar from './components/Navbar.js';
import Home from './components/Home.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
