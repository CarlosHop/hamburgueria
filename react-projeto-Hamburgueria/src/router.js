import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cardapio from './Pages/Cardapio/Cardapio';
import Form from './Pages/FormCad/Form';
import Notfound from './Pages/Notfound/Notfound';
import Manager from './Pages/Manager/Manager';
import Produtos from './Pages/cadProdutos/produtos';
import Pedidos from './Pages/cadPedidos/pedidos';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cardapio' element={<Cardapio />} />
                <Route path='/form' element={<Form />} />
                <Route path='/manager' element={<Manager />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/pedidos' element={<Pedidos />} />
                <Route path='*' element={<Notfound />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;