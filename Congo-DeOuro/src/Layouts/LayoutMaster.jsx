import { Link, useNavigate, Outlet } from "react-router-dom";

export default function LayoutMaster() {
  const nav = useNavigate();
  const cargo = localStorage.getItem("userRole");

  function sair() {
    localStorage.removeItem("userRole");
    nav("/login");
  }

  return (
    <div className="layout-container">
      <header className="topo">
        <Link to="/" className="logo">Congo D'Ouro</Link>
        <nav className="menu-links">
          <Link to="/">Cardápio</Link>
          
          {cargo === "gerente" && <Link to="/gerente">Gestão</Link>}
          {cargo === "cozinha" && <Link to="/cozinha">Cozinha</Link>}

          {cargo ? (
            <button onClick={sair} className="btn-sair">Sair</button>
          ) : (
            <Link to="/login" className="btn-login">Login</Link>
          )}
        </nav>
      </header>

      <main className="conteudo">
        <Outlet />
      </main>
    </div>
  );
}