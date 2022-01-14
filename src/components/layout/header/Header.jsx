import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-success bg-success">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              Sportland
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/futbol">
                  Fútbol
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tenis">
                  Tenis
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/voley">
                  Voley
                </Link>
              </li>
            </ul>
            <div className="d-flex nav-item">
              <Link to="/reservas" className="text-light nav-link">
                Mis reservas
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
