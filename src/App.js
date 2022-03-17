import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <LeftSide />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
