import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./Manager.scss";

const Manager = () => {
    return(
        <div>
            <Navbar/>
            <main className='mainClass'>
                <h1>Gerenciamento</h1>
                <div className='botoes'>
                    <a href="/produtos">
                        <button class="btn-produtos">Cadastro de Produtos</button>
                    </a>
                    <a href="/pedidos">
                        <button class="btn-pedidos">Cadastro de Pedidos</button>
                    </a>
                </div>
            </main>
    
            <Footer/>
        </div>
    );
}

export default Manager;