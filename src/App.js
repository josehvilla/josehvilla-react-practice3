import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import DogInfo from "./Components/DogInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<DogInfo />} />
      </Routes>
    </div>
  );
}

export default App;
