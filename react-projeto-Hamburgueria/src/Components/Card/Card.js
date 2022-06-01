import "./Card.scss";

const Card = (props) => {
    return (
            <article className="card">
                <img src={props.img} alt={props.title} />
                <div className="descricao">
                    <h1>{props.title}</h1>
                    <p>R${props.descricao}</p>
                </div>
            </article>
    );
}

export default Card;
