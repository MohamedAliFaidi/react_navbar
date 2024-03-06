import "./App.css";
import { Routes, Route } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Navbar from "./Navbar";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
      </Routes>
    </>
  );
}

export default App;
