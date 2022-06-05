import "./styleMensagem.scss"

const Mensagem = (props) => {
    return(
        <main className={props.tipo}> 
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        </main>
    );
}

export default Mensagem;