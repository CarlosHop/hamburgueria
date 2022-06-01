import Navbar from '../../Components/Navbar/Navbar';
import "./produtos.scss";
import axios from 'axios';
import { useState, useEffect } from 'react';

// Pesquisar: 
//  CORS
//  useEffect
//  React Hooks


const Produtos = () => {

    const [produtos, setProdutos] = useState([])

    const carregarProdutos = async () => {
        const resp = await axios.get('http://localhost:5000/produto/')
        const data = await resp.data;
        console.log(data)
        setProdutos(data)
    }

    const criarProdutos = async () => {
        await axios.post('http://localhost:5000/produto/', {id: 20, nome: "bugtest", preco: 12.90})
    }

    const handleInput = event => {
         setProdutos(event.target.value)
    }

    useEffect(() => {carregarProdutos()}, []);

    return(
        <div>
            <Navbar/>
                <main className='main'>
                    <h1>Tabela de Produtos</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>              
                                    <td>{product.nome}</td>              
                                    <td>R$ {product.preco}</td>              
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <form >
                        <h1>Cadastro de produtos</h1>
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" placeholder='Digite o nome do produto' onChange={handleInput}/>
                        <label for="preço">Preço</label>
                        <input type="text" id="preco" placeholder='Digite o valor do produto' />
                        <button class="btn-login"  onClick={criarProdutos}>Enviar</button>
                    </form>
                </main>
        </div>
    );
}

export default Produtos;