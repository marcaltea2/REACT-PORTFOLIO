import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Project/:Slug" element={<ProjectDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
