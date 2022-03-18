import { Route, Routes } from "react-router-dom";
import Title from "./components/Title";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Time from "./components/Time";

function App() {
  return (
    <div className="App">
      <span className="App__tag_top">
        {'<html/>'}
        <br />
      </span>
      <Header />
      <div className="App__main-container">
        <div className="App__main-container__side">
          <LeftSide />
          <Title />
        </div>
        <div className="App__main-container__pages">
          <Routes>
            <Route path='/' element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Time/>
      <span className="App__tag_bottom">
        <br />
        {'</html>'}
      </span>
    </div>
  );
}

export default App;
