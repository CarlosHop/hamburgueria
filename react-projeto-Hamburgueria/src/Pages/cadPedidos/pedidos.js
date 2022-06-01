import Navbar from "../../Components/Navbar/Navbar";
import "./pedidos.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  const CarregarPedidos = async () => {
    const resp = await axios.get("http://localhost:5000/pedidos/");
    const data = await resp.data;
    console.log(data);
    setPedidos(data);
  };

  useEffect(() => {
    CarregarPedidos();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="mainBack">
        <h1>Tabela de Pedidos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Situação</th>
              <th>Preco Total</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.descricao}</td>
                <td>{request.quantidade}</td>
                <td>{request.situacao}</td>
                <td>R$ {request.preco_total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <form>
          <h1>Cadastro de pedidos</h1>
          <label for="desc">Descrição</label>
          <textarea cols="30" rows="10" type="text" id="desc" placeholder="Digite a descrição do pedido"></textarea>
          <label for="quant">Quantidade</label>
          <input
            type="text"
            id="preco"
            placeholder="Digite a quantidade de lanches"
          />
          <label for="situ">Situação</label>
          <input
            type="text"
            id="situ"
            placeholder="Digite a situação do pedido"
          />
          <label for="price">Preço Total</label>
          <input
            type="text"
            id="price"
            placeholder="Digite o preço total do pedido"
          />
          <button class="btn-login">Enviar</button>
        </form>
      </main>
    </div>
  );
};

export default Pedidos;