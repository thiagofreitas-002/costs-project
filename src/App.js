import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* PAGES */
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";
import Projects from "./components/pages/Projects";

/* LAYOUT */
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
