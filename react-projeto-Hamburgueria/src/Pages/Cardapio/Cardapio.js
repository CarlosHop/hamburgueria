import "./cardapio.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';

const Cardapio = () => {
    return(
        <div>
            <Navbar />
                <mainCardapio>
                    <div className="container">
                        <Card title="meu bug1" img="./banner_background.jpg" descricao="sla testando" />
                        <Card title="meu bug12" img="./hamBacon.jpg" descricao="sla testando 2" />
                        <Card title="meu bug12" img="./hamCostela.jpg" descricao="sla testando 2" />
                        <Card title="meu bug12" img="./hamCheddar.png" descricao="sla testando 2" />
                        <Card title="meu bug12" img="./hamColosso.jpg" descricao="sla testando 2" />
                        <Card title="meu bug12" img="./hamPeru.jpg" descricao="sla testando 2" />
                        <Card title="meu bug12" img="./hamFrango.jpg" descricao="sla testando 2" />  
                    </div> 
                </mainCardapio>
        </div>
    );
}

export default Cardapio;