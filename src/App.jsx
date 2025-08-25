import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Project/:Slug" element={<Project />}></Route>
      </Routes>
    </>
  );
}

export default App;
