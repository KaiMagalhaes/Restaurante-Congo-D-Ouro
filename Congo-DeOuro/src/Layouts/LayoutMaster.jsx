import { Outlet, Link } from "react-router-dom";

<Link className="navbar-brand d-flex align-items-center" to="/">
  <img 
    src="/Img/atabaque.png" 
    alt="Logo" 
    width="30" 
    height="30" 
    className="me-2"
  />
  Congo D'Ouro
</Link>

export default function LayoutMaster() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Congo D'Ouro</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/menu">Cardápio</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </div>
        </div>
      </nav>

      <main className="container mt-4">
        <Outlet />
      </main>

      <footer className="text-center mt-5 py-3 bg-light">
        <p>Restaurante Congo D'Ouro © 2026 </p>
      </footer>
    </div>
  );
}