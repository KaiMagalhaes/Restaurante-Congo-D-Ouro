import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cozinha() {
  const [pedidos, setPedidos] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "cozinha") {
      alert("Acesso negado");
      nav("/login");
    }

    const dados = JSON.parse(localStorage.getItem("listaPedidos") || "[]");
    setPedidos(dados);
  }, []);

  function mudar(id, st) {
    const nova = pedidos.map(p => {
      if (p.idPedido === id) return { ...p, estado: st };
      return p;
    });
    setPedidos(nova);
    localStorage.setItem("listaPedidos", JSON.stringify(nova));
  }

  return (
    <div className="cozinha-container">
      <h1 className="titulo-pg">Pedidos da Cozinha</h1>
      <div className="grid-pedidos">
        {pedidos.map(p => (
          <div key={p.idPedido} className="card-pedido">
            <div className="info-mesa">Mesa: {p.mesa}</div>
            <h3 className="prato-nome">{p.nome}</h3>
            <p className="status-texto">Status: <span>{p.estado}</span></p>
            <div className="botoes-acao">
              <button onClick={() => mudar(p.idPedido, "fazendo")} className="btn-preparar">Fazer</button>
              <button onClick={() => mudar(p.idPedido, "pronto")} className="btn-pronto">Pronto</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}