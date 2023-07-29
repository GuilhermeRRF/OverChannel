import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Genero from "./pages/Genero";
import Racking from "./pages/Racking";
import MaisPopular from "./pages/MaisPopular";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/genero" element={<Genero />} />
        <Route path="/racking" element={<Racking />} />
        <Route path="/maispopular" element={<MaisPopular />} />
      </Routes>
    </>
  );
}

export default App;
