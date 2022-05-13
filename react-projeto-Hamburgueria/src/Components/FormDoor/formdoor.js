import "./formdoor.scss";

const FormDoor = () => {
    return(
        <section className="section__5">
        <h1>Fale Conosco</h1>
        <form>
          <label for="email">Email</label>
          <input placeholder="exemplologin@gmail.com"
            autocomplete="off"
            id="email"
            type="text"/>
          <label for="password"> Password </label>
          <input type="password" id="password" placeholder="senha:" />
        </form>
        <a href="/manager">
          <button class="btn-login">Enviar</button>
        </a>
      </section>
    );
}

export default FormDoor;