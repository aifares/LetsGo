import { Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="bg-red-300">/route</div>} />
      <Route path="/route1" element={<div>route1</div>} />
    </Routes>
  );
}

export default App;
