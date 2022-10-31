import About from "./components/About";
import Education from "./components/Education";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Sovtech from "./components/Sovtech";
import Contacts from "./components/Contacts";



const App = () => {
  return (
    <>
      <Intro />
      <About />
      <Education />
      <Skills/> 
      <Projects />
      <Sovtech/>
      <Contacts/>
    </>
  );
};

export default App;
