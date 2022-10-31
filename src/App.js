import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Sovtech from "./components/sovtech/Sovtech";
import Contacts from "./components/contacts/Contacts";
import Skills from "./components/skills/Skills";
import Intro from "./components/intro/Intro";
import Education from "./components/education/Education";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="sections">
        <div className="intro">
          <Intro/>
        </div>
        <div className="about">
          <About/>
        </div>
        <div className="education">
          <Education/>
        </div>
        <div className="skills">
          <Skills/>
        </div>
        <div className="projects">
          <Projects/>
        </div>
        <div className="sovtech">
          <Sovtech/>
        </div>
        <div className="contacts">
          <Contacts/>

        </div>

      </div>
    </div>

  );
}

export default App;
