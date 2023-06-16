import "./App.css";
import { Footer } from "./pages/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Nav } from "./pages/Nav/Nav";
import { Projects } from "./pages/Projects/Projects";
import { Project } from "./pages/Project/Project";
import { AboutMe } from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/aboutme" element={<AboutMe />} />

          <Route
            path="*"
            element={
              <div className="page-not-exist">
                <h2>This page does not exist</h2>
                <Link to="/">
                  <button className="page-not-exits-btn">back to home</button>
                </Link>
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
