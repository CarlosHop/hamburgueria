import { NavCon } from "../../components/Header";
import { Container } from "../../components/Main";

function Home() {
  return (
    <NavCon>
      <nav>
        <img src="../img/logo.png" alt="" />
        <ul>
          <p>inicio</p>
          <p>cardápio</p>
        </ul>
      </nav>
      <Container>
        <section>
          <h1>ÚNICOS DA CASA</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
      </Container>
    </NavCon>
  );
}

export default Home;
