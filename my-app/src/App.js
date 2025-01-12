import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experiance";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
