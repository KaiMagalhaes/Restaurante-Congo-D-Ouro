import { Link, useNavigate, Outlet } from "react-router-dom";
import "./LayoutMaster.css";

export default function LayoutMaster() {
  const nav = useNavigate();

  const cargo = localStorage.getItem("userRole");

  function sair() {
    localStorage.removeItem("userRole");
    nav("/login");
  }

  return (
    <div className="layout-geral">
      <nav className="barra-topo">
        <Link to="/" className="marca">
          Congo D'Ouro
        </Link>

        <div className="links">
          <Link to="/">Cardápio</Link>

          {cargo === "gerente" && <Link to="/gerente">Gestão</Link>}
          {cargo === "cozinha" && <Link to="/cozinha">Cozinha</Link>}

          {cargo ? (
            <button onClick={sair} className="btn-sair">
              Sair
            </button>
          ) : (
            <Link to="/login" className="btn-entrar">
              Login Staff
            </Link>
          )}
        </div>
      </nav>

      <main className="corpo-pagina">
        <Outlet />
      </main>
    </div>
  );
}
