import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cardapio from './Pages/Cardapio/Cardapio';
import Notfound from './Pages/Notfound/Notfound';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cardapio' element={<Cardapio />} />
                <Route path='*' element={<Notfound />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;