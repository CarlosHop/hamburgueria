import Mensagem from "../../Components/Message/mensagem";
import Load from "../../Components/Loading/loading"
import "./styleTest.scss"

const Testes = () => {
    return(
        <div className='backteste'>
            <Mensagem className="sucesso" title="Sucesso!" desc="Cadastro criado com suacesso!"/>
            <Load/>
        </div>
    );
}

export default Testes;