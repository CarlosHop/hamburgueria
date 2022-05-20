import "./cardapio.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';

const Cardapio = () => {
    return(
        <div>
            <Navbar />
                <div className="container">
                    <Card title="Hambuguer Pimenta" img="./banner_background.jpg" descricao="Excepcional carne de hamburguer com pimentão assado" />
                    <Card title="Hamburguer de Bacon" img="./hamBacon.jpg" descricao="Carne de hamburguer e molho caseiro com bacon" />
                    <Card title="Hamburguer de Costela" img="./hamCostela.jpg" descricao="Carne de costela boniva e folhas de alface" />
                    <Card title="Hamburguer de Cheddar" img="./hamCheddar.png" descricao="Um hamburguer de carne de porco e uma avalanche de cheddar" />
                    <Card title="Hamburguer Colosso" img="./hamColosso.jpg" descricao="Carne de 350g de picanha com molho barbecue" />
                    <Card title="Hamburguer de Peru" img="./hamPeru.jpg" descricao="Carne de hamburguer e tiras de peeru defumado" />
                    <Card title="Hamburguer de Frango" img="./hamFrango.jpg" descricao="Carne de frango no hamburguer e frios selecionados" />  
                    <Card title="Hamburguer Rei" img="./xrei.jpg" descricao="O maior x-tudo de 2,5Kg de toda a região metropolitana" />
                    <Card title="Hamburguer Parmesão" img="./xparmesao.jpg" descricao="Hambuguer de 125g de carne e 140g de queijo parmesão" />  
                </div>
        </div>
    );
}

export default Cardapio;