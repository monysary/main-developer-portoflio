import ResponsiveAppBar from './components/Navbar.js';
import Home from './components/Home.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Home />
      <Skills />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
