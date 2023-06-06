import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./Components/signIn";
import SignIn from "./Components/signIn";
import DashBoard from "./Components/dashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/route1" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
