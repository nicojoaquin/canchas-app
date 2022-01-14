import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CanchasProvider from "./context/CanchasContext";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Inicio from "./pages/inicio";
import Deportes from "./pages/deportes/";
import MisReservas from "./pages/misReservas";

const App = () => {
  return (
    <CanchasProvider>
      <Router>
        <Header />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/:deporte" element={<Deportes />} />
            <Route path="/reservas" element={<MisReservas />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CanchasProvider>
  );
};

export default App;
