import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Sovtech from "./components/Sovtech";
import Contacts from "./components/Contacts";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";


const App = () => {
  return (
    <>
      <Navbar/ >
      <Intro />
      <About />
      <Education />
      <Tech />
      <Skills />
      
      <Projects />
      <Sovtech />
      <Contacts />
    </>
  );
};

export default App;
