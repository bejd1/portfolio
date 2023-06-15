import "./App.css";
import { Footer } from "./pages/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Nav } from "./pages/Nav/Nav";
import { Projects } from "./pages/Projects/Projects";
import { Project } from "./pages/Project/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* {isOpen && <Menu menuToggle={menuToggle} />} */}
        <Nav />
        {/* <Nav menuToggle={menuToggle} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />

          <Route
            path="*"
            element={
              <div className="not__exit">
                <h2 className="not__exits">This page does not exist</h2>
                <Link to="/" className="not__exit-btn">
                  back to home
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
