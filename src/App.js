import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter  basename="/personal-website">
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
          <Route path="resume" element={<Resume />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
          </BrowserRouter>

    </div>
  );
}

export default App;
