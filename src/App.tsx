import "./App.css";
import { Contact } from "./pages/Contact/Contact";
import { Footer } from "./pages/Footer/Footer";
import { Main } from "./pages/Main/Main";
import { Nav } from "./pages/Nav/Nav";
import { Skills } from "./pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
