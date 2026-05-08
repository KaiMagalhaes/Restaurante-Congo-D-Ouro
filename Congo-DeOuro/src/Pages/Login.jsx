import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usr, setUsr] = useState("");
  const [psw, setPsw] = useState("");
  const navegar = useNavigate();

  const entrar = (e) => {
    e.preventDefault();

    if (usr === "admin" && psw === "123") {
      navegar("/gerente");
    } else if (usr === "chef" && psw === "123") {
      navegar("/cozinha");
    } else {
      alert("Dados errados!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 card p-4 shadow">
          <h2 className="text-center mb-4">Acesso Staff</h2>
          <form onSubmit={entrar}>
            <div className="mb-3">
              <label className="form-label">Utilizador</label>
              <input type="text" className="form-control" value={usr} onChange={(e) => setUsr(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Senha</label>
              <input type="password" className="form-control" value={psw} onChange={(e) => setPsw(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );


  const entrar = (e) => {
    e.preventDefault();
    if (usr === "admin" && psw === "123") {
      localStorage.setItem("tipo", "admin");
      navegar("/gerente");
    } else if (usr === "chef" && psw === "123") {
      localStorage.setItem("tipo", "chef"); 
      navegar("/cozinha");
    } else {
      alert("Dados errados!");
    }
  };
}