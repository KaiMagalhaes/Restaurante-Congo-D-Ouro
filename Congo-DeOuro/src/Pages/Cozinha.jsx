export default function Cozinha() {
  const pds = [
    { id: 101, prato: "Moqueca", mesa: "04", hora: "14:20" },
    { id: 102, prato: "Acarajé", mesa: "04", hora: "14:25" }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-danger">Pedidos Pendentes</h2>
      <div className="row">
        {pds.map((p) => (
          <div key={p.id} className="col-md-6 mb-3">
            <div className="card bg-warning text-dark p-3">
              <h5>{p.prato} - Mesa {p.mesa}</h5>
              <small>Pedido às: {p.hora}</small>
              <button className="btn btn-sm btn-success mt-2">Concluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}