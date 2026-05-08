export default function Gerente() {
  const vds = [
    { id: 1, mesa: "04", total: "45.00", status: "Pago" },
    { id: 2, mesa: "02", total: "22.50", status: "Pago" }
  ];

  return (
    <div className="container mt-4">
      <h2>Painel do Gerente</h2>
      <div className="alert alert-success">Saldo em Caixa: 2280.45€</div>
      <h3>Últimas Vendas</h3>
      <ul className="list-group">
        {vds.map((v) => (
          <li key={v.id} className="list-group-item d-flex justify-content-between">
            Mesa {v.mesa} <span>{v.total}€</span>
          </li>
        ))}
      </ul>
    </div>
  );
}