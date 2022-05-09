import React from "react";
import "./MainHome.scss";

const Mainhome = () => {
  return (
    <main className="MainHome">
      <section className="section__1">
        <img src="banner_background.jpg" alt="" />
      </section>

      <section className="section__2">
        <h1>Únicos da casa</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="section__3">
        <img src="about.png" alt="#" />
        <div>
          <h1>"Servir bem, para servir sempre..."</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section className="section__4">
        <div>
          <h1>Venha nos conhecer</h1>
          <p>Info de endereço:</p>
          <p>Ex: na esquina da décima quinta AV. Sebastião</p>
        </div>
        <img src="local.jpg" alt="" />
      </section>

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
        <textarea
            name="box-text"
            id="box-text"
            cols="30"
            rows="10"
            placeholder="Digite suas dúvidas aqui..."
          ></textarea>
          <button class="btn-login">Enviar</button>
      </section>
    </main>
  );
};

export default Mainhome;
