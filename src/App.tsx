import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./Components/signIn";
import SignIn from "./Components/signIn";
import DashBoardBox from "./Components/dashBoardBox";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/route1" element={<DashBoardBox />} />
    </Routes>
  );
}

export default App;
