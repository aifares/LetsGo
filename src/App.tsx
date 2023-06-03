import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./Components/signIn";
import SignIn from "./Components/signIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/route1" element={<div>route1</div>} />
    </Routes>
  );
}

export default App;
