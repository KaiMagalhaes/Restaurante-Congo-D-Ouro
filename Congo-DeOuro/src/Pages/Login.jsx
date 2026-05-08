import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [usr, setUsr] = useState("");
  const [psw, setPsw] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    alert("Bem-vindo ao sistema, " + usr);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 card p-4 shadow">
          <h2 className="text-center mb-4">Acesso Staff</h2>
          <form onSubmit={enviar}>
            <div className="mb-3">
              <label className="form-label">Utilizador</label>
              <input 
                type="text" 
                className="form-control" 
                value={usr} 
                onChange={(e) => setUsr(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Senha</label>
              <input 
                type="password" 
                className="form-control" 
                value={psw} 
                onChange={(e) => setPsw(e.target.value)} 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}