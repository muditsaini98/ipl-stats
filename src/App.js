import "./App.css";
import NavBarnav from "./Components/NavBarnav";
import Home from "./Components/Home";
import Seasons from "./Components/Seasons";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Teams from "./Components/Teams";

function App() {

  return (
    <div className="App">
      <NavBarnav />
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
