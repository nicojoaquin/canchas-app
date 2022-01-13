import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import Inicio from "./pages/inicio";
import Deportes from "./pages/deportes/";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/:deporte" element={<Deportes />} />
      </Routes>
    </Router>
  );
};

export default App;
